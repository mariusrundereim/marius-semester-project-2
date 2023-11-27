export function bidOnListing(listing) {
  const bidForm = document.querySelector("#bid_form");
  bidForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const newBid = {
      amount: form.bid_input_amount.value,
    };
    console.log(newBid);
    await bidListing(listing.id, newBid.amount);
    bid_input_amount.value = "";
    console.log(bid_input_amount.value);
  });
  return bidForm;
}
// bidOnListing();
