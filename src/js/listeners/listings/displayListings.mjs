import { getAllListings } from "../../api/listings/listings.mjs";
import { defaultCard } from "../../components/card/card.mjs";
// import { formatEndsAt } from "../../utils/formatting/formatEndsAt.mjs";

export async function displayListings() {
  try {
    const cardWrapper = document.querySelector("#listing_cards");
    const newListing = document.querySelector("#listing_new_cards");
    cardWrapper.innerHTML = "";
    newListing.innerHTML = "";

    const result = await getAllListings();

    // Filter and sort
    const endSoonListings = result.sort(
      (a, b) => new Date(a.endsAt) - new Date(b.endsAt)
    );

    const newListingListings = result.sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );

    // Display 10 listings in a for loop
    for (let i = 0; i < 2; i++) {
      const card = defaultCard(endSoonListings[i]);
      cardWrapper.appendChild(card);
    }

    for (let i = 0; i < 2; i++) {
      const card = defaultCard(newListingListings[i]);
      newListing.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching and displaying listings:", error);
  }
}

(async () => {
  await displayListings();
})();
