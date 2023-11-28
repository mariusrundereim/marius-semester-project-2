import { bidListing } from "../../api/listings/bidListing.mjs";

export function bidOnListing(listing) {
  const bidForm = document.querySelector("#bid_form");
  bidForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const newBid = {
      amount: parseInt(form.bid_input_amount.value),
    };
    console.log(newBid);
    await bidListing(listing.id, newBid.amount);
  });
  return bidForm;
}
