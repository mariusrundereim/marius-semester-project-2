import { getAllListings } from "../../api/listings/listings.mjs";
import { defaultCard } from "../../components/card/card.mjs";
import { formatEndsAt } from "../../utils/formatting/formatEndsAt.mjs";

// export async function displayListings() {
//   //catch and handle the error
//   const cardWrapper = document.querySelector("#listing_cards");
//   cardWrapper.innerHTML = "";
//   const result = await getAllListings();

//   // Sort the listings by date
//   result.sort((a, b) => {
//     return new Date(b.created) - new Date(a.created);
//   });

//   // If endsAt is expired, remove from the list
//   result.forEach((listing) => {
//     // console.log(listing.endsAt);
//     if (listing.endsAt < new Date().toISOString()) {
//       result.splice(result.indexOf(listing), 1);
//     }
//   });

//   result.forEach((listing) => {
//     const card = defaultCard(listing);
//     cardWrapper.appendChild(card);
//   });
// }

export async function displayListings() {
  try {
    const cardWrapper = document.querySelector("#listing_cards");
    cardWrapper.innerHTML = "";

    const result = await getAllListings();

    // Filter and sort
    const filteredListings = result
      .filter((listing) => listing.endsAt > new Date().toISOString())
      .sort((a, b) => new Date(b.endsAt) - new Date(a.endsAt));

    // Display
    filteredListings.forEach((listing) => {
      const card = defaultCard(listing);
      cardWrapper.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching and displaying listings:", error);
  }
}

(async () => {
  await displayListings();
})();
