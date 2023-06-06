const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const password = document.querySelector("#password");
const confirmPwrd = document.querySelector("#confirm");
const errorMsg = document.querySelector("#confirmation-msg");

inputs.forEach((input) => {
   input.addEventListener("input", () => {
      if (input.validity.valid) {
         input.classList.remove("invalid-input");
      } else {
         input.classList.add("invalid-input");
      }
   });
});

let areEqual;

confirmPwrd.addEventListener("input", () => {
   areEqual = confirmPwrd.value === password.value;
   if (!areEqual) {
      errorMsg.textContent = "Passwords do not match";
      errorMsg.className = "no-match";
   } else {
      errorMsg.textContent = "Passwords match!";
      errorMsg.className = "match";
   }
});

form.addEventListener("submit", (e) => {
   if (!areEqual) {
      e.preventDefault();
   }
});
