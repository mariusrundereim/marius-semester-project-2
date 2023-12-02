import { createListing } from "../../api/listings/createListing.mjs";

export function createListingForm() {
  const form = document.querySelector("#newListing-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
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

    try {
      const createdListing = await createListing(newListing);
      // Do something with the createdListing if needed
      console.log(createdListing);

      // Store in session storage
      sessionStorage.setItem("createdListing", JSON.stringify(createdListing));

      // Display success message
      alert("Listing created");

      // Form reset
      form.reset();

      // Redirect to listing page with specific ID
      window.location.href = `/src/html/listingSpecific.html?id=${createdListing.id}`;
    } catch (error) {
      console.error("Error creating listing:", error);
      alert("Error creating listing");
    }
  });
}
