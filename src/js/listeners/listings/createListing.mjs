import { createListing } from "../../api/listings/createListing.mjs";

// export const listingForm = document
//   .querySelector("#newListing-form")
//   .addEventListener("submit", (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const newListing = {
//       title: form.newList_title.value,
//       description: form.newList_desc.value,
//       media: Array.of(form.newList_media.value.toString()),
//       endsAt: new Date(form.newList_endsAt.value.toString()),
//     };
//     console.log(newListing);
//     createListing(newListing);
//   });

export const listingForm = document
  .querySelector("#newListing-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const mediaUrls = formData.getAll("media[]");
    const newListing = {
      title: formData.get("title"),
      description: formData.get("description"),
      media: mediaUrls,
      endsAt: new Date(formData.get("endsAt")),
    };
    console.log(newListing);
    createListing(newListing);
  });
