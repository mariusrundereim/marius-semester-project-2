import { getAllListings } from "../../api/listings/listings.mjs";
import { defaultCard } from "../../components/card/card.mjs";
// import { formatEndsAt } from "../../utils/formatting/formatEndsAt.mjs";

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
