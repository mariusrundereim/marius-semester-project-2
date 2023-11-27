export function viewListingDetails(listing) {
  const listingWrapper = document.querySelector("#listing_container");
  // Section for Image gallery
  const gallerySection = document.createElement("section");
  gallerySection.classList.add("flex", "flex-col", "gap-4");
  const firstMedia = document.createElement("img");
  firstMedia.classList.add("aspect-video", "object-cover", "rounded-md");
  firstMedia.src = listing.media[0];
  firstMedia.alt = listing.title;

  const nextMediaContainer = document.createElement("div");
  nextMediaContainer.classList.add(
    "py-2",
    "flex",
    "flex-wrap",
    "gap-1",
    "justify-center",
    "items-center"
  );

  const nextMediaItem = document.createElement("img");
  nextMediaItem.classList.add(
    "h-10",
    "md:h-20",
    "aspect-square",
    "object-cover",
    "rounded-md",
    "brightness-50"
  );
  nextMediaItem.src = listing.media[0];
  nextMediaItem.alt = listing.title;

  gallerySection.appendChild(firstMedia);
  gallerySection.appendChild(nextMediaContainer);
  nextMediaContainer.appendChild(nextMediaItem);

  // Section to Title and Seller Details

  const titleSellerSection = document.createElement("section");
  titleSellerSection.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "mt-5",
    "mb-4",
    "min-h-max"
  );

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

  const divInner = document.createElement("div");
  divInner.classList.add("p-2");
  const sellerName = document.createElement("h3");
  sellerName.classList.add("text-xl", "font-bold");
  sellerName.textContent = listing.seller.name;
  const listingTitle = document.createElement("h3");
  listingTitle.classList.add("text-xl", "font-bold");
  listingTitle.textContent = listing.title;

  const divInner2 = document.createElement("div");
  divInner2.classList.add("p-2");
  const listingDescription = document.createElement("p");
  listingDescription.classList.add("text-sm");
  listingDescription.textContent = listing.description;

  // Ends Date from the single listing
  const endsDiv = document.createElement("div");
  endsDiv.classList.add(
    "flex",
    "basis-1/2",
    "p-2",
    "h-36",
    "border",
    "border-1",
    "text-white",
    "bg-brand-dark",
    "rounded-xl"
  );
  const endsDivInner = document.createElement("div");
  endsDivInner.classList.add("flex", "flex-col", "justify-center");
  const endsDivTitle = document.createElement("h3");
  endsDivTitle.classList.add("text-xl", "font-bold");
  endsDivTitle.textContent = "Ends in";
  const endsDivTime = document.createElement("p");
  endsDivTime.classList.add("text-2xl", "font-bold");
  endsDivTime.textContent = listing.endsAt;

  // Append elements to Seller Details section
  divInner.appendChild(sellerName);
  divInner.appendChild(listingTitle);
  divInner2.appendChild(listingDescription);
  sellerDetailsContainer.appendChild(divInner);
  sellerDetailsContainer.appendChild(divInner2);
  titleSellerSection.appendChild(sellerDetailsContainer);

  endsDivInner.appendChild(endsDivTitle);
  endsDivInner.appendChild(endsDivTime);
  endsDiv.appendChild(endsDivInner);
  titleSellerSection.appendChild(endsDiv);

  // Section for Bids
  const bidsSection = document.createElement("section");
  bidsSection.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "mt-5",
    "mb-4",
    "min-h-max"
  );

  const placeBidContainer = document.createElement("div");
  placeBidContainer.classList.add(
    "flex",
    "basis-1/2",
    "flex-col",
    "border",
    "border-1",
    "border-brand-light",
    "rounded-xl"
  );
  const placeBidInner = document.createElement("div");
  placeBidInner.classList.add("p-2");
  const placeBidTitle = document.createElement("h3");
  placeBidTitle.classList.add("text-xl", "font-bold");
  placeBidTitle.textContent = "Place a bid";
  const placeBidForm = document.createElement("form");
  placeBidForm.classList.add("flex", "flex-col", "gap-2");
  const placeBidInput = document.createElement("input");
  placeBidInput.classList.add(
    "border",
    "border-1",
    "border-brand-light",
    "rounded-md",
    "p-2"
  );
  placeBidInput.placeholder = "Enter your bid";
  placeBidInput.type = "number";
  placeBidInput.min = 1;
  placeBidInput.max = 100;
  const placeBidButton = document.createElement("button");
  placeBidButton.classList.add(
    "text-white",
    "bg-brand-dark",
    "p-2",
    "px-6",
    "rounded-lg"
  );
  placeBidButton.textContent = "Bidify";

  // Highest bidder container
  const highestBidContainer = document.createElement("div");
  highestBidContainer.classList.add(
    "p-2",
    "basis-1/2",
    "border",
    "border-1",
    "rounded-xl"
  );
  const highestBidInner = document.createElement("div");
  highestBidInner.classList.add("flex", "flex-col", "justify-center");
  const highestBidTitle = document.createElement("h3");
  highestBidTitle.classList.add("text-xl", "font-bold");
  highestBidTitle.textContent = "Highest bid";
  const highestBidAmount = document.createElement("p");
  highestBidAmount.classList.add("text-2xl", "font-bold");
  highestBidAmount.textContent = listing.bids[0].bidderName;

  // Append elements to Place Bid section
  placeBidInner.appendChild(placeBidTitle);
  placeBidForm.appendChild(placeBidInput);
  placeBidForm.appendChild(placeBidButton);
  placeBidInner.appendChild(placeBidForm);
  placeBidContainer.appendChild(placeBidInner);
  bidsSection.appendChild(placeBidContainer);

  highestBidInner.appendChild(highestBidTitle);
  highestBidInner.appendChild(highestBidAmount);
  highestBidContainer.appendChild(highestBidInner);
  bidsSection.appendChild(highestBidContainer);

  // Create Bidding History section
  const biddingHistorySection = document.createElement("section");
  biddingHistorySection.classList.add(
    "p-2",
    "border",
    "border-1",
    "rounded-xl"
  );
  const bidHistoryTitleContainer = document.createElement("div");
  bidHistoryTitleContainer.classList.add(
    "flex",
    "justify-between",
    "text-center"
  );
  const bidHistoryTitle = document.createElement("h3");
  bidHistoryTitle.classList.add("text-xl", "font-bold");
  bidHistoryTitle.textContent = "Bidding History";

  const bidItemsContainer = document.createElement("div");
  bidItemsContainer.classList.add("flex", "flex-col", "gap-2");

  const bidItem = document.createElement("div");
  bidItem.classList.add(
    "flex",
    "justify-between",
    "border",
    "border-1",
    "rounded-xl",
    "p-2",
    "cursor-default"
  );
  const bidItemName = document.createElement("p");
  bidItemName.classList.add("text-md");
  bidItemName.textContent = listing.bids[0].bidderName;
  const bidItemAmount = document.createElement("p");
  bidItemAmount.classList.add("text-md");
  bidItemAmount.textContent = listing.bids[0].amount;
  const bidItemCreated = document.createElement("p");
  bidItemCreated.classList.add("text-md");
  bidItemCreated.textContent = listing.bids[0].created;

  // Append elements to Bidding History section
  bidHistoryTitleContainer.appendChild(bidHistoryTitle);
  biddingHistorySection.appendChild(bidHistoryTitleContainer);
  bidItem.appendChild(bidItemName);
  bidItem.appendChild(bidItemAmount);
  bidItem.appendChild(bidItemCreated);
  bidItemsContainer.appendChild(bidItem);
  biddingHistorySection.appendChild(bidItemsContainer);

  // Append to listing wrapper (end container)
  listingWrapper.appendChild(gallerySection);
  listingWrapper.appendChild(titleSellerSection);
  listingWrapper.appendChild(bidsSection);
  listingWrapper.appendChild(biddingHistorySection);
}

// export function viewListingDetails(listing) {
//   console.log(listing.seller.name);
//   console.log("Naaame", listing.seller.name);
//   console.log(listing.media);
//   console.log(listing.description);
//   console.log(listing.endsAt);
//   console.log(listing.bids[0].bidderName);
//   console.log(listing.title);

//   const listingDetails = document.querySelector("#listing_container");
//   // Media Gallery
//   const mediaGallery = document.createElement("div");
//   mediaGallery.classList.add(
//     "p-2",
//     "flex",
//     "flex-col",
//     "bg-white",
//     "rounded-md"
//   );

//   const coverImage = document.createElement("img");
//   coverImage.classList.add(
//     "max-h-96",
//     "aspect-video",
//     "object-cover",
//     "rounded-md"
//   );
//   coverImage.src = listing.media[0];
//   coverImage.alt = listing.title;

//   const nextImagesContainer = document.createElement("div");
//   nextImagesContainer.classList.add(
//     "py-2",
//     "flex",
//     "flex-wrap",
//     "gap-1",
//     "justify-center",
//     "items-center"
//   );

//   // More media images
//   for (let i = 0; i < listing.media.length; i++) {
//     const nextImage = document.createElement("img");
//     nextImage.classList.add(
//       "h-10",
//       "md:h-20",
//       "aspect-square",
//       "object-cover",
//       "rounded-md",
//       "brightness-50"
//     );
//     nextImage.src = listing.media[i];
//     nextImage.alt = listing.title;
//     nextImagesContainer.appendChild(nextImage);
//   }

//   // Listing Title, Seller and Description

//   const sellerDetailsContainer = document.createElement("div");
//   sellerDetailsContainer.classList.add(
//     "flex",
//     "basis-1/2",
//     "flex-col",
//     "border",
//     "border-1",
//     "border-brand-light",
//     "rounded-xl"
//   );

//   // Append elements to Image gallery section
//   mediaGallery.appendChild(coverImage);
//   mediaGallery.appendChild(nextImagesContainer);

//   // Append elements to End Container
//   listingDetails.appendChild(mediaGallery);
// }
