import"./assets/modulepreload-polyfill-3cfb730f.js";const t={email:"",message:""},s={form:document.querySelector(".feedback-form"),input:document.querySelector('input[name="email"]'),textarea:document.querySelector('textarea[name="message"]'),btn:document.querySelector("button")},r="feedback-form-state",{form:o,input:n,textarea:m,btn:f}=s;i();function l(e){if(e.preventDefault(),n.value.trim()===""||m.value.trim()===""){alert("Fill please all fields");return}localStorage.removeItem(r),console.log(t),e.currentTarget.reset()}function u(e){t[e.target.name]=e.target.value.trim(),localStorage.setItem(r,JSON.stringify(t))}function i(){const e=localStorage.getItem(r);if(!e)return;const a=JSON.parse(e);n.value=a.email,t.email=a.email,m.value=a.message,t.message=a.message}o.addEventListener("submit",l);o.addEventListener("input",u);
//# sourceMappingURL=commonHelpers2.js.map
