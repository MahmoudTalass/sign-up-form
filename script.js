const inputs = form.querySelectorAll("input");

inputs.forEach((input) => {
   input.addEventListener("input", () => {
      if (input.validity.valid) {
         input.classList.remove("invalid-input");
      } else {
         input.classList.add("invalid-input");
      }
   });
});
