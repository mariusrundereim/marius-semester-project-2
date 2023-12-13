import { getAllListings } from "../../api/listings/listings.js";
import { defaultCard } from "../../components/card/card.js";
// import { formatEndsAt } from "../../utils/formatting/formatEndsAt.js";

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

    for (let i = 0; i < resultNew.length; i++) {
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
