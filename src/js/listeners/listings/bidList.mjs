export function bidOnListing(listing) {
  const bidForm = document.querySelector("#bid_form");
  console.log(bidForm);
  bidForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const newBid = {
      amount: form.bid_input_amount.value,
    };
    console.log(newBid);
    bidListing(listing.id, newBid.amount);
    bid_input_amount.value = "";
    console.log(bid_input_amount.value);
  });
  return bidForm;
}
// bidOnListing();

// Update the DOM with the new bid
const bidForm = document.querySelector("#bid_form");
console.log(bidForm);
