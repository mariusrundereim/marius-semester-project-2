export function viewListingDetails(listing) {
  console.log(listing.seller.name);
  console.log("Naaame", listing.seller.name);
  console.log(listing.media);
  console.log(listing.description);
  console.log(listing.endsAt);
  console.log(listing.bids[0].bidderName);
  console.log(listing.title);

  const listingDetails = document.querySelector("#listing_container");
  // Media Gallery
  const mediaGallery = document.createElement("div");
  mediaGallery.classList.add(
    "p-2",
    "flex",
    "flex-col",
    "bg-white",
    "rounded-md"
  );

  const coverImage = document.createElement("img");
  coverImage.classList.add(
    "max-h-96",
    "aspect-video",
    "object-cover",
    "rounded-md"
  );
  coverImage.src = listing.media[0];
  coverImage.alt = listing.title;

  const nextImagesContainer = document.createElement("div");
  nextImagesContainer.classList.add(
    "py-2",
    "flex",
    "flex-wrap",
    "gap-1",
    "justify-center",
    "items-center"
  );

  // More media images
  for (let i = 0; i < listing.media.length; i++) {
    const nextImage = document.createElement("img");
    nextImage.classList.add(
      "h-10",
      "md:h-20",
      "aspect-square",
      "object-cover",
      "rounded-md",
      "brightness-50"
    );
    nextImage.src = listing.media[i];
    nextImage.alt = listing.title;
    nextImagesContainer.appendChild(nextImage);
  }

  // Listing Title, Seller and Description

  const sellerDetailsContainer = document.createElement("div");
  sellerDetailsContainer.classList.add(
    "flex",
    "basis-1/2",
    "flex-col",
    "border",
    "border-1",
    "border-brand-light",
    "rounded-xl"
  );

  // Append elements to Image gallery section
  mediaGallery.appendChild(coverImage);
  mediaGallery.appendChild(nextImagesContainer);

  // Append elements to End Container
  listingDetails.appendChild(mediaGallery);
}
