import { createListing } from "../api/listings/createListing.mjs";

export const listingForm = document.querySelector("newListing-form");
console.log(listingForm);
listingForm.addEventListener("submit", (e) => {
  const form = e.target;
  const newListing = {
    title: form.title.value,
    description: form.description.value,
    media: Array.of(newMedia.value.toString()),
    endsAt: new Date(form.endsAt.value).toString(),
  };
  createListing(newListing);
});
