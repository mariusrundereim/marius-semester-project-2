import { bidListing } from "../../api/listings/bidListing.mjs";
import { formatEndsAt } from "../../utils/formatting/formatEndsAt.mjs";

export function viewListingDetails(listing) {
  console.log("Ends:", listing.endsAt);
  // console.log("Ends:", updateRemainingTime(listing.endsAt));
  console.log("EndsFormat:", formatEndsAt(listing.endsAt));
  const listingWrapper = document.querySelector("#listing_container");

  // Section for Image gallery
  const gallerySection = document.createElement("section");
  gallerySection.classList.add("flex", "flex-col", "gap-4");

  // Create the first media item
  const firstMedia = document.createElement("img");
  firstMedia.classList.add("aspect-video", "object-cover", "rounded-md");
  firstMedia.src = listing.media[0];
  firstMedia.alt = listing.title;
  gallerySection.appendChild(firstMedia);

  // Create a container for the rest of the media items
  const nextMediaContainer = document.createElement("div");
  nextMediaContainer.classList.add(
    "py-2",
    "flex",
    "flex-wrap",
    "gap-1",
    "justify-center",
    "items-center"
  );
  gallerySection.appendChild(nextMediaContainer);

  // nextMediaItem
  listing.media.slice(1).forEach((mediaUrl) => {
    const nextMediaItem = document.createElement("img");
    nextMediaItem.classList.add(
      "h-10",
      "md:h-20",
      "aspect-square",
      "object-cover",
      "rounded-md",
      "brightness-50"
    );
    nextMediaItem.src = mediaUrl;
    nextMediaItem.alt = listing.title;
    nextMediaContainer.appendChild(nextMediaItem);
  });

  // Append the gallerySection to the listingWrapper
  listingWrapper.appendChild(gallerySection);

  // Section to Title and Seller Details

  const titleSellerSection = document.createElement("section");
  titleSellerSection.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "mt-5",
    "mb-4",
    "items-stretch",
    // "min-h-max",
    "gap-2"
  );

  const sellerDetailsContainer = document.createElement("div");
  sellerDetailsContainer.classList.add(
    "flex",
    "basis-1/2",
    "flex-col",
    "border",
    "border-1",
    "border-brand-light",
    "rounded-xl",
    "p-4"
  );

  const divInner = document.createElement("div");
  divInner.classList.add("mb-4");
  const sellerName = document.createElement("h3");
  sellerName.classList.add("text-md");
  sellerName.textContent = `Seller: ${listing.seller.name}`;
  const listingTitle = document.createElement("h3");
  listingTitle.classList.add("text-3xl", "font-bold", "mt-2");
  listingTitle.textContent = listing.title;

  const divInner2 = document.createElement("div");
  // divInner2.classList.add("p-2");
  const listingDescription = document.createElement("p");
  listingDescription.classList.add("text-lg");
  listingDescription.textContent = listing.description;

  // Ends Date from the single listing
  const endsDiv = document.createElement("div");
  endsDiv.classList.add(
    "flex",
    "basis-1/2",
    "justify-center",
    "p-2",
    "h-36",
    "border",
    "border-1",
    "text-white",
    "bg-brand-dark",
    "rounded-xl"
  );
  const endsDivInner = document.createElement("div");
  endsDivInner.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center"
  );
  const endsDivTitle = document.createElement("h3");
  endsDivTitle.classList.add("text-xl", "font-bold");
  endsDivTitle.textContent = "Ends in";
  const endsDivTime = document.createElement("p");
  endsDivTime.classList.add("text-3xl", "font-semibold");
  endsDivTime.textContent = formatEndsAt(listing.endsAt);

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
    "min-h-max",
    "gap-2"
  );

  const placeBidContainer = document.createElement("div");
  placeBidContainer.classList.add(
    "flex",
    "basis-1/2",
    "flex-col",
    "border",
    "border-1",
    "border-brand-light",
    "rounded-xl",
    "bg-brand-color"
  );
  const placeBidInner = document.createElement("div");
  placeBidInner.classList.add("p-2");
  const placeBidTitle = document.createElement("h3");
  placeBidTitle.classList.add("text-xl", "font-bold");
  placeBidTitle.textContent = "Place a bid";
  const placeBidForm = document.createElement("form");

  placeBidForm.id = "bid_form";
  placeBidForm.classList.add("flex", "flex-col", "gap-2");
  const placeBidInput = document.createElement("input");

  placeBidForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(placeBidInput.value, listing.id);
    bidListing(listing.id, placeBidInput.value);
  });
  placeBidInput.id = "bid_input_amount";
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
  placeBidInput.max = 1000;
  console.log(placeBidInput.value);
  const placeBidButton = document.createElement("button");
  placeBidButton.classList.add(
    "text-white",
    "bg-brand-dark",
    "p-2",
    "px-6",
    "rounded-lg"
  );
  placeBidButton.textContent = "Bid";
  placeBidButton.type = "submit";
  placeBidButton.id = "bid_button";

  // Highest bidder container
  const highestBidContainer = document.createElement("div");
  highestBidContainer.id = "highest_bidder";

  // Append elements to Place Bid section
  placeBidInner.appendChild(placeBidTitle);
  placeBidForm.appendChild(placeBidInput);
  placeBidForm.appendChild(placeBidButton);
  placeBidInner.appendChild(placeBidForm);
  placeBidContainer.appendChild(placeBidInner);
  bidsSection.appendChild(placeBidContainer);

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
  bidItem.id = "bid_item";

  //Append elements to Bidding History section
  bidHistoryTitleContainer.appendChild(bidHistoryTitle);
  biddingHistorySection.appendChild(bidHistoryTitleContainer);

  bidItemsContainer.appendChild(bidItem);
  biddingHistorySection.appendChild(bidItemsContainer);

  // Append to listing wrapper (end container)
  listingWrapper.appendChild(gallerySection);
  listingWrapper.appendChild(titleSellerSection);
  listingWrapper.appendChild(bidsSection);
  listingWrapper.appendChild(biddingHistorySection);
}
