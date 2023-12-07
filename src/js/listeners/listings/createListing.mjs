import { createListing } from "../../api/listings/createListing.mjs";
import { createListingForm } from "../components/validation/newListingValidation.mjs"; // Add this import statement

const form = document.querySelector("#newListing-form");
createListingForm(form);

// import { createListing } from "../../api/listings/createListing.mjs";

// export function createListingForm() {
//   const form = document.querySelector("#newListing-form");

//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);

//     const mediaUrls = [];
//     // Iterate over media inputs
//     for (let i = 1; i <= 4; i++) {
//       const mediaInputValue = formData.get(`media-${i}`);
//       if (mediaInputValue) {
//         mediaUrls.push(mediaInputValue);
//       }
//     }

//     const newListing = {
//       title: formData.get("title"),
//       description: formData.get("description"),
//       media: mediaUrls,
//       endsAt: new Date(formData.get("endsAt")),
//     };

//     const createdListing = await createListing(newListing);
//     form.reset();
//     window.location.href = `./listingSpecific.html?id=${createdListing.id}`;
//   });
// }

// (async () => {
//   await createListingForm();
// })();
