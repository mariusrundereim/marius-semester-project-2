import { bidListing } from "../../api/listings/bidListing.mjs";
import { checkLoggedIn } from "../../auth/state.mjs";
// import { placeBidButton } from "../../ui/listings/singleListing.mjs";

export function bidOnListing(listing) {
  const bidForm = document.querySelector("#bid_form");

  bidForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const form = e.target;
      const bidAmount = parseInt(form.bid_input_amount.value);

      // Check if user is logged in with JWT, if not logged in, disable bid button
      if (!checkLoggedIn()) {
        alert("You must be logged in to bid on a listing.");
        console.log("not logged in");
        placeBidButton.disabled = true;
        return;
      }

      // Check if bidAmount is a valid number
      if (isNaN(bidAmount) || bidAmount <= 0) {
        alert("Please enter a valid bid amount.");
        console.log("Invalid bid amount");
        return;
      }

      const newBid = {
        amount: bidAmount,
      };

      console.log(newBid);

      await bidListing(listing.id, newBid.amount);
    } catch (error) {
      // Handle other types of errors
      console.error("Unexpected error:", error);
    }
  });

  return bidForm;
}

/*
import { bidListing } from "../../api/listings/bidListing.mjs";
import { checkLoggedIn } from "../../auth/state.mjs";

export function bidOnListing(listing) {
  const bidForm = document.querySelector("#bid_form");
  bidForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!checkLoggedIn()) {
      alert("You must be logged in to bid on a listing");
      console.log("not logged in");
      return;
    } else {
      console.log("logged in");
    }
    const form = e.target;
    const newBid = {
      amount: parseInt(form.bid_input_amount.value),
    };
    console.log(newBid);
    await bidListing(listing.id, newBid.amount);
  });
  return bidForm;
}
*/
