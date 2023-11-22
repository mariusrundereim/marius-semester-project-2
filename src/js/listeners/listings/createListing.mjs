import { createListing } from "../../api/listings/createListing.mjs";

export const listingForm = document
  .querySelector("#newListing-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const newListing = {
      title: form.newList_title.value,
      description: form.newList_desc.value,
      media: Array.of(form.newList_media.value.toString()),
      endsAt: new Date(form.newList_endsAt.value.toString()),
      // endsAt: form.newList_endsAt.value,
      // media: form.newList_media.value,
    };
    console.log(newListing);
    createListing(newListing);
  });
