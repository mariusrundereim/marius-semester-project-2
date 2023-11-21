import { createListing } from "../api/listings/createListing.mjs";

export const listingForm = document.querySelector("#newListing-form");
console.log(listingForm);
listingForm.addEventListener("submit", (e) => {
  const form = e.target;
  const newListing = {
    title: form.querySelector("#newList_title").value,
    description: form.querySelector("#newList_desc").value,
    media: Array.of(form.querySelector("#newList_media").value.toString()),
    endsAt: new Date(form.querySelector("#newList_endsAt").value).toString(),
  };
  createListing(newListing);
});
