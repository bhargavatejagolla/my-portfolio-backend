const json = JSON.stringify({
  access_key: "511786e3-f754-460f-8ac6-dae1a4d9d762",
  name: "Antigravity JSON Test",
  email: "test@example.com",
  message: "Testing if JSON bypasses the Cloudflare issue."
});

fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: json
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
