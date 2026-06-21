import { useEffect, useRef, useState, useMemo, useCallback } from 'react';

const dist = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getAttr = (distance, maxDist, minVal, maxVal) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist);
  return Math.max(minVal, val + minVal);
};

const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const TextPressure = ({
  text = 'Compressa',
  fontFamily = "'Roboto Flex', 'Outfit', 'Plus Jakarta Sans', sans-serif",
  fontUrl = '',

  width = true,
  weight = true,
  italic = false,
  alpha = false,

  flex = false,
  stroke = false,
  scale = false,

  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  className = '',

  minFontSize = 24
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  // Group characters into words, tracking global index for spansRef
  const wordsWithChars = useMemo(() => {
    let charCount = 0;
    return text.split(' ').map(word => {
      const chars = word.split('');
      const wordWithIndices = chars.map(char => {
        const index = charCount;
        charCount++;
        return { char, index };
      });
      return { word, chars: wordWithIndices };
    });
  }, [text]);

  const totalChars = useMemo(() => {
    return wordsWithChars.reduce((sum, wordObj) => sum + wordObj.chars.length, 0);
  }, [wordsWithChars]);

  useEffect(() => {
    const handleMouseMove = e => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = e => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

    // Adjust font size calculation to scale with the word lengths
    let newFontSize = containerW / (totalChars / 1.5);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  }, [totalChars, minFontSize, scale]);

  useEffect(() => {
    const debouncedSetSize = debounce(setSize, 100);
    debouncedSetSize();
    window.addEventListener('resize', debouncedSetSize);
    return () => window.removeEventListener('resize', debouncedSetSize);
  }, [setSize]);

  useEffect(() => {
    if (!inView) return;

    let rafId;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach(span => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2
          };

          const d = dist(mouseRef.current, charCenter);

          // Roboto Flex axes: width (25..151) and weight (100..1000)
          // Width range: 75 (idle) to 150 (hovered)
          // Weight range: 300 (idle) to 1000 (hovered)
          const wdth = width ? Math.floor(getAttr(d, maxDist, 75, 75)) : 100;
          const wght = weight ? Math.floor(getAttr(d, maxDist, 300, 700)) : 400;
          const italVal = italic ? getAttr(d, maxDist, 0, 1).toFixed(2) : 0;
          const alphaVal = alpha ? getAttr(d, maxDist, 0, 1).toFixed(2) : 1;

          const newFontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;

          if (span.style.fontVariationSettings !== newFontVariationSettings) {
            span.style.fontVariationSettings = newFontVariationSettings;
          }
          if (alpha && span.style.opacity !== alphaVal) {
            span.style.opacity = alphaVal;
          }
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, alpha, inView]);

  const styleElement = useMemo(() => {
    if (!fontUrl) return null;
    return (
      <style>{`
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }
      `}</style>
    );
  }, [fontFamily, fontUrl]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {styleElement}
      <h1
        ref={titleRef}
        className={`text-pressure-title ${className}`}
        style={{
          fontFamily,
          textTransform: 'uppercase',
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          userSelect: 'none',
          whiteSpace: 'nowrap',
          fontWeight: 100,
          width: '100%',
          display: 'flex',
          justifyContent: flex ? 'space-between' : 'center',
          alignItems: 'center',
          gap: flex ? '0' : '0.4em'
        }}
      >
        {wordsWithChars.map((wordObj, wordIdx) => (
          <span
            key={wordIdx}
            className="text-pressure-word"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.02em'
            }}
          >
            {wordObj.chars.map(({ char, index }) => (
              <span
                key={index}
                ref={el => (spansRef.current[index] = el)}
                data-char={char}
                style={{
                  display: 'inline-block',
                  color: stroke ? 'transparent' : textColor,
                  WebkitTextStrokeWidth: stroke ? '2px' : '0',
                  WebkitTextStrokeColor: stroke ? strokeColor : 'transparent',
                  transition: 'color 0.2s ease, -webkit-text-stroke 0.2s ease'
                }}
              >
                {char}
              </span>
            ))}
            {/* Render space character spacer if not the last word */}
            {wordIdx < wordsWithChars.length - 1 && (
              <span style={{ width: '0.35em', display: 'inline-block' }}>&nbsp;</span>
            )}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;
