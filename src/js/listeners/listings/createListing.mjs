import { createListing } from "../../api/listings/createListing.mjs";

export function createListingForm() {
  const form = document.querySelector("#newListing-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const mediaUrls = [];
    // Iterate over media inputs
    for (let i = 1; i <= 4; i++) {
      const mediaInputValue = formData.get(`media-${i}`);
      if (mediaInputValue) {
        mediaUrls.push(mediaInputValue);
      }
    }

    const newListing = {
      title: formData.get("title"),
      description: formData.get("description"),
      media: mediaUrls,
      endsAt: new Date(formData.get("endsAt")),
    };

    try {
      const createdListing = await createListing(newListing);

      // Store in session storage
      sessionStorage.setItem("createdListing", JSON.stringify(createdListing));

      // Form reset
      form.reset();

      // Redirect to listing page with specific ID
      window.location.href = `./listingSpecific.html?id=${createdListing.id}`;
    } catch (error) {
      console.error("Error creating listing:", error);
      alert("Error creating listing");
    }
  });
}

(async () => {
  await createListingForm();
})();
