import { getAllListings } from "../../api/listings/listings.mjs";
import { defaultCard } from "../../components/card/card.mjs";

export async function displayListings() {
  //catch and handle the error
  const cardWrapper = document.querySelector("#listing_cards");
  cardWrapper.innerHTML = "";
  const result = await getAllListings();

  // Sort the listings by date
  result.sort((a, b) => {
    return new Date(b.created) - new Date(a.created);
  });

  result.forEach((listing) => {
    const card = defaultCard(listing);
    cardWrapper.appendChild(card);
  });
}

(async () => {
  await displayListings();
})();
