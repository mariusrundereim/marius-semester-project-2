export function bidHistory(listing) {
  console.log(listing.bids);
  const bidHistorySection = document.querySelector("#bid_item");
  bidHistorySection.classList.add("test");
  // For each bid, create a div with the bidder name and amount
  // Sort the listing.bid array by amount
  listing.bids.sort((a, b) => {
    return b.amount - a.amount;
  });
  listing.bids.forEach((bid) => {
    const bidItem = document.createElement("div");
    bidItem.id = "bid_item";
    bidItem.classList.add(
      "flex",
      "justify-between",
      "text-center",
      "first:bg-gray-500"
    );
    const bidderName = document.createElement("p");
    bidderName.classList.add("text-md");
    bidderName.textContent = bid.bidderName;
    const bidAmount = document.createElement("p");
    bidAmount.classList.add("text-md");
    bidAmount.textContent = bid.amount;
    bidItem.appendChild(bidderName);
    bidItem.appendChild(bidAmount);
    bidHistorySection.appendChild(bidItem);
  });
  return bidHistorySection;
}
