import { getAllListings } from "../../api/listings/listings.mjs";
import { defaultCard } from "../../components/card/card.mjs";
// import { formatEndsAt } from "../../utils/formatting/formatEndsAt.mjs";

export async function displayListings() {
  try {
    const endsContainer = document.querySelector("#listing_cards");
    const createdContainer = document.querySelector("#listing_new_cards");
    endsContainer.innerHTML = "";
    createdContainer.innerHTML = "";

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
      endsContainer.appendChild(card);
    }

    for (let i = 0; i < 300; i++) {
      const card = defaultCard(resultNew[i]);
      // const card = defaultCard(result[i]);
      createdContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching and displaying listings:", error);
  }
}

(async () => {
  await displayListings();
})();
