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
    const resultNew = await getAllListings();

    // Ends soon sort
    const endSoonListings = [...result];
    endSoonListings.sort((a, b) => {
      a = Date.parse(a.endsAt);
      b = Date.parse(b.endsAt);
      // console.log(a - b);
      return a - b;
    });

    // Ends soon listings
    for (let i = 0; i < 4; i++) {
      const card = defaultCard(endSoonListings[i]);
      cardWrapper.appendChild(card);
    }

    for (let i = 0; i < 300; i++) {
      const card = defaultCard(resultNew[i]);
      // const card = defaultCard(result[i]);
      newListing.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching and displaying listings:", error);
  }
}

(async () => {
  await displayListings();
})();
