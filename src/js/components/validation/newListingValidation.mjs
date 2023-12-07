import {
  titleError,
  descriptionError,
  mediaError,
  endsAtError,
} from "./newListingElements.mjs";

export function validateField(fieldName, value) {
  switch (fieldName) {
    case "title":
      if (value === "") {
        return "Please enter a title";
      }
      return "";
    case "description": {
      if (value === "") {
        return "Please enter a description";
      }
      return "";
    }
    case "media": {
      if (value === "") {
        return "Please enter a media";
      }
      return "";
    }
    case "endsAt": {
      // Assuming validateEndsAt is defined somewhere
      return validateEndsAt(new Date(value));
    }
    default:
      return true;
  }
}

export function displayError(errorElement, message) {
  errorElement.textContent = message;
}

export function createListingForm(form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Clear errors
    titleError.textContent = "";
    descriptionError.textContent = "";
    mediaError.textContent = "";
    endsAtError.textContent = "";

    const formData = new FormData(form);

    const fields = ["title", "description", "media", "endsAt"];
    let valid = true;

    fields.forEach((fieldName) => {
      const value = formData.get(fieldName);
      const errorMessage = validateField(fieldName, value);
      if (errorMessage) {
        displayError(window[fieldName + "Error"], errorMessage);
        valid = false;
      }
    });

    if (valid) {
      // Continue with submission, call createListing or any other necessary function
      // ...
    }
  });
}
