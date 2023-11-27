export function bidHistory(listing) {
  console.log(listing.bids);
  const bidHistorySection = document.querySelector("#bid_item");
  bidHistorySection.classList.add("test");

  listing.bids.sort((a, b) => {
    return b.amount - a.amount;
  });
  listing.bids.forEach((bid) => {
    const bidItem = document.createElement("div");
    bidItem.id = "bid_item";
    bidItem.classList.add(
      "grid",
      "grid-cols-3",
      "first:bg-gray-300",
      "px-2",
      "py-1",
      "rounded-md"
    );
    const bidderName = document.createElement("p");
    bidderName.classList.add("text-md", "font-semibold");
    bidderName.textContent = bid.bidderName;
    const bidAmount = document.createElement("p");
    bidAmount.classList.add("text-md", "text-center");
    bidAmount.textContent = bid.amount;
    const bidCreated = document.createElement("p");
    bidCreated.classList.add("text-md", "text-right");
    bidCreated.textContent = bid.created;
    bidItem.appendChild(bidderName);
    bidItem.appendChild(bidAmount);
    bidItem.appendChild(bidCreated);
    bidHistorySection.appendChild(bidItem);
  });
  return bidHistorySection;
}

// Display highest bidder
export function highestBidder(listing) {
  const highestBidderContainer = document.querySelector("#highest_bidder");
  highestBidderContainer.classList.add(
    "p-2",
    "basis-1/2",
    "border",
    "border-1",
    "rounded-xl"
  );
  const highestBidderInner = document.createElement("div");
  highestBidderInner.classList.add("flex", "flex-col", "justify-center");
  const highestBidderTitle = document.createElement("h3");
  highestBidderTitle.classList.add("text-xl", "font-bold");
  highestBidderTitle.textContent = "Highest bid";
  const highestBidderName = document.createElement("p");
  highestBidderName.classList.add("text-md");
  highestBidderName.textContent = listing.bids[0].bidderName;
  const highestBidderAmount = document.createElement("p");
  highestBidderAmount.classList.add("text-md");
  highestBidderAmount.textContent = listing.bids[0].amount;

  highestBidderInner.appendChild(highestBidderTitle);
  highestBidderInner.appendChild(highestBidderName);
  highestBidderInner.appendChild(highestBidderAmount);
  highestBidderContainer.appendChild(highestBidderInner);
  return highestBidderContainer;
}
