import"./assets/modulepreload-polyfill-3cfb730f.js";const t={email:"",message:""},o={form:document.querySelector(".feedback-form"),input:document.querySelector('input[name="email"]'),textarea:document.querySelector('textarea[name="message"]'),btn:document.querySelector("button")},a="feedback-form-state",{form:r,input:n,textarea:m,btn:i}=o;s();function l(e){if(e.preventDefault(),t.email===""||t.message===""){alert("Fill please all fields");return}localStorage.removeItem(a),console.log(t),e.currentTarget.reset()}function u(e){e.preventDefault(),localStorage.setItem(a,e.target.value),t[e.target.name]=e.target.value.trim()}function s(){const e=localStorage.getItem(a);e&&(n.value=e,m.value=e)}r.addEventListener("submit",l);r.addEventListener("input",u);
//# sourceMappingURL=commonHelpers2.js.map