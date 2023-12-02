// Use the form to search for listings
// Display the listing card with defaultCard
// Search for all in recordArray

import { searchListings } from "../../api/listings/searchListing.mjs";
import { defaultCard } from "../../components/card/card.mjs";
import { searchForm } from "../../ui/listings/searchForm.mjs";

export async function displaySearchListing() {
  try {
    const cardContainer = document.querySelector("#listing_cards");
    const result = await searchListings();
    const flatResult = result.flat();

    // Clear the card container
    cardContainer.innerHTML = "";

    // Get the search input value
    const searchInput = document.querySelector("#search_listings_input");

    // Filter the search input value
    const filteredResult = flatResult.filter((listing) => {
      return listing.title.toLowerCase().includes(searchInput.value);
    });

    // Display the search results
    for (let i = 0; i < filteredResult.length; i++) {
      const card = defaultCard(filteredResult[i]);
      cardContainer.appendChild(card);
      //   console.log("Flat:", flatResult[i]);
    }
  } catch (error) {
    console.error("Error displaying searched listings:", error);
  }
}

(async () => {
  // Attach an event listener to the search button
  document
    .querySelector("#search_listings_button")
    .addEventListener("click", (event) => {
      event.preventDefault();
      displaySearchListing();
    });
  await displaySearchListing();
})();
