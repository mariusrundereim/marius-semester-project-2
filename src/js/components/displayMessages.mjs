export const nameError = document.querySelector("#nameError");
export const emailError = document.querySelector("#emailError");
export const passwordError = document.querySelector("#passwordError");

export function displayError(element, message) {
  console.log(message);

  if (element) {
    element.textContent = message;
  } else {
    console.error("Invalid element provided to displayError function");
  }
}

export function clearErrors() {
  if (nameError) nameError.textContent = "";
  if (emailError) emailError.textContent = "";
  if (passwordError) passwordError.textContent = "";
}

// export function displayError(message) {
//   console.log(message);
// }
