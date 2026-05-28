import React, { useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ElectricBorder from './ElectricBorder';
import TextPressure from './TextPressure';
import FallingText from './FallingText';

export default function Contact() {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="animate-pulse">Sending...</span>';
    
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    object.access_key = "511786e3-f754-460f-8ac6-dae1a4d9d762";
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const data = await response.json();
      
      if (data.success) {
        btn.innerHTML = 'Sent Successfully!';
        btn.classList.add('bg-green-500', 'text-white', 'border-green-500');
        e.target.reset();
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('bg-green-500', 'text-white', 'border-green-500');
        }, 3000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      btn.innerHTML = 'Error! Try Again.';
      btn.classList.add('bg-red-500', 'text-white', 'border-red-500');
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('bg-red-500', 'text-white', 'border-red-500');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <div style={{ position: 'relative', height: '100px', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          <TextPressure
            text="GET IN TOUCH"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#c084fc"
            minFontSize={48}
          />
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div style={{ height: '300px', width: '100%', position: 'relative' }}>
            <FallingText
              text="Let's build something amazing together! I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
              highlightWords={["amazing", "projects,", "creative", "visions."]}
              highlightClass="text-primary font-black drop-shadow-[0_0_15px_rgba(97,220,163,0.4)]"
              trigger="click"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1.8rem"
              mouseConstraintStiffness={0.9}
            />
            <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-500 font-mono opacity-50 animate-pulse pointer-events-none">
              Click anywhere inside this text box!
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:bhargavatejagolla@gmail.com" className="group flex items-center gap-6 p-6 glass-panel border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 overflow-hidden relative cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-4 bg-primary/10 text-primary rounded-2xl group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div className="relative">
                <h4 className="text-sm text-gray-400 font-mono mb-1">Email</h4>
                <p className="font-bold text-lg text-gray-200 group-hover:text-primary transition-colors">bhargavatejagolla@gmail.com</p>
              </div>
            </a>

            <a href="tel:8919349090" className="group flex items-center gap-6 p-6 glass-panel border border-white/5 hover:border-secondary/50 transition-all hover:-translate-y-1 overflow-hidden relative cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-4 bg-secondary/10 text-secondary rounded-2xl group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <div className="relative">
                <h4 className="text-sm text-gray-400 font-mono mb-1">Phone</h4>
                <p className="font-bold text-lg text-gray-200 group-hover:text-secondary transition-colors">+91 8919349090</p>
              </div>
            </a>

            <div className="group flex items-center gap-6 p-6 glass-panel border border-white/5 hover:border-purple-500/50 transition-all hover:-translate-y-1 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-4 bg-purple-500/10 text-purple-400 rounded-2xl group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <div className="relative">
                <h4 className="text-sm text-gray-400 font-mono mb-1">Location</h4>
                <p className="font-bold text-lg text-gray-200 group-hover:text-purple-400 transition-colors">Sangareddy, Telangana</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://github.com/bhargavatejagolla" target="_blank" rel="noreferrer" className="p-4 glass-panel hover:bg-primary/20 hover:text-primary transition-all hover:-translate-y-1 border border-white/5 hover:border-primary/50">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/golla-bhargava-teja" target="_blank" rel="noreferrer" className="p-4 glass-panel hover:bg-secondary/20 hover:text-secondary transition-all hover:-translate-y-1 border border-white/5 hover:border-secondary/50">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div>
          <ElectricBorder
            color="#61dca3"
            speed={2}
            chaos={0.15}
            thickness={2}
            style={{ borderRadius: '24px' }}
            className="h-full"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="p-8 md:p-10 flex flex-col gap-6 h-full bg-[#0c1015] rounded-[24px]">
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  className="w-full h-[calc(100%-2rem)] min-h-[150px] bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="group relative w-full bg-white/5 border border-white/10 hover:border-primary/50 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 overflow-hidden hover:shadow-[0_0_20px_rgba(97,220,163,0.3)] mt-auto"
              >
                <div className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <span className="relative z-10 flex items-center gap-2">Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
              </button>
            </form>
          </ElectricBorder>
        </div>
      </div>
    </section>
  );
}
