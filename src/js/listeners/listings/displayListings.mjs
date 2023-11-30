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

    // Ends soon
    // const endSoonListings = JSON.parse(JSON.stringify(result)); // Deep Copy
    const endSoonListings = [...result];
    endSoonListings.sort((a, b) => {
      a = Date.parse(a.endsAt);
      b = Date.parse(b.endsAt);
      // console.log(a - b);
      return a - b;
    });

    // const newListingListings = JSON.parse(JSON.stringify(result));
    const newListingListings = [...result];
    newListingListings.sort((a, b) => {
      a = Date.parse(a.created);
      b = Date.parse(b.created);
      // console.log(a - b);
      return b - a;
    });
    // console.log("New:", newListingListings);

    // Display 10 listings in a for loop
    for (let i = 0; i < 4; i++) {
      const card = defaultCard(endSoonListings[i]);
      cardWrapper.appendChild(card);
    }

    for (let i = 0; i < 20; i++) {
      const card = defaultCard(newListingListings[i]);
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
