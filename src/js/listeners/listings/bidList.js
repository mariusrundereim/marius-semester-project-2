import { bidListing } from "../../api/listings/bidListing.js";

export function bidOnListing(listing) {
  const bidForm = document.querySelector("#bid_form");

  bidForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const form = e.target;
      const bidAmount = parseInt(form.bid_input_amount.value);

      // Check if bidAmount is a valid number
      if (isNaN(bidAmount) || bidAmount <= 0) {
        alert("Please enter a valid bid amount.");
        console.log("Invalid bid amount");
        return;
      }

      const newBid = {
        amount: bidAmount,
      };

      // console.log(newBid);

      // Update the bidListing API call
      await bidListing(listing.id, newBid.amount);
    } catch (error) {
      // Handle other types of errors
      console.error("Unexpected error:", error);
    }
  });

  return bidForm;
}
