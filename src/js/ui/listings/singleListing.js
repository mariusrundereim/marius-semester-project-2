import { bidListing } from "../../api/listings/bidListing.js";
import { formatEndsAt } from "../../utils/formatting/formatEndsAt.js";
import { imageGallery } from "./listingGallery.js";
import { checkLoggedIn } from "../../auth/state.js";

export function viewListingDetails(listing) {
  const listingWrapper = document.querySelector("#listing_container");

  // Section for Gallery
  const gallerySection = imageGallery(listing);

  // Section to Title and Seller Details
  const titleSellerSection = document.createElement("section");
  titleSellerSection.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "mt-5",
    "mb-4",
    "min-h-[18rem]",
    "gap-4"
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
    "self-stretch",
    "text-white",
    "bg-brand-dark",
    "rounded-xl",
    "min-h-full"
  );
  const endsDivInner = document.createElement("div");
  endsDivInner.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "py-12"
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
    "min-h-[18rem]",
    "gap-4"
  );

  const placeBidContainer = document.createElement("div");
  placeBidContainer.classList.add(
    "flex",
    "basis-1/2",
    "flex-col",
    "items-center",
    "justify-center",

    "rounded-xl",
    "bg-brand-color"
  );
  const placeBidInner = document.createElement("div");
  placeBidInner.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "gap-4",
    "p-2"
  );
  const placeBidTitle = document.createElement("h3");
  placeBidTitle.classList.add("text-xl", "font-bold");
  placeBidTitle.textContent = "Place a bid";
  const placeBidForm = document.createElement("form");

  placeBidForm.id = "bid_form";
  placeBidForm.classList.add("flex", "flex-col", "gap-4");
  const placeBidInput = document.createElement("input");
  const highestBidAmount = Math.max(...listing.bids.map((bid) => bid.amount));

  // Bid addEventListener
  placeBidForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(placeBidInput.value, listing.id);
    console.log("Form submitted");
    bidListing(listing.id, placeBidInput.value);
  });
  placeBidInput.id = "bid_input_amount";
  placeBidInput.classList.add(
    "border",
    "border-1",
    "border-brand-light",
    "rounded-lg",
    "p-2"
  );
  placeBidInput.placeholder = "Enter your bid";
  placeBidInput.type = "number";
  placeBidInput.min = highestBidAmount + 1;
  placeBidInput.max = 1000;
  // console.log(placeBidInput.value);

  const placeBidButton = document.createElement("button");
  placeBidButton.classList.add(
    "text-white",
    "bg-brand-dark",
    "hover:bg-brand-dark",
    "transition-all",
    "hover:shadow-lg",
    "font-semibold",
    "text-lg",
    "p-2",
    "px-4",
    "rounded-lg"
  );
  placeBidButton.textContent = "Place your bid!";

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
    "flex-col",
    "items-center",
    "justify-between",
    "my-4"
  );
  const bidHistoryTitle = document.createElement("h3");
  bidHistoryTitle.classList.add("text-2xl", "text-center", "font-bold");
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

  if (!checkLoggedIn()) {
    bidsSection.classList.add("hidden");
  }
}
