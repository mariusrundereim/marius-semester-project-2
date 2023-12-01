import { createListing } from "../../api/listings/createListing.mjs";

export const listingForm = document
  .querySelector("#newListing-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const mediaUrls = [];
    const firstMedia = formData.get("media[]");
    if (firstMedia) {
      mediaUrls.push(firstMedia);
    }
    const secondMedia = formData.get("media[]");
    if (secondMedia) {
      mediaUrls.push(secondMedia);
    }
    const thirdMedia = formData.get("media[]");
    if (thirdMedia) {
      mediaUrls.push(thirdMedia);
    }
    const fourthMedia = formData.get("media[]");
    if (fourthMedia) {
      mediaUrls.push(fourthMedia);
    }

    const newListing = {
      title: formData.get("title"),
      description: formData.get("description"),
      media: mediaUrls,
      endsAt: new Date(formData.get("endsAt")),
    };
    console.log(newListing);
    createListing(newListing);
  });
