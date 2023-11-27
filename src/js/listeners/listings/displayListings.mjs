import { getAllListings } from "../../api/listings/listings.mjs";
import { defaultCard } from "../../components/card/card.mjs";

export async function displayListings() {
  //catch and handle the error
  const cardWrapper = document.querySelector("#listing_cards");
  cardWrapper.innerHTML = "";
  const result = await getAllListings();

  result.forEach((listing) => {
    const card = defaultCard(listing);
    cardWrapper.appendChild(card);
  });
}

(async () => {
  await displayListings();
})();
