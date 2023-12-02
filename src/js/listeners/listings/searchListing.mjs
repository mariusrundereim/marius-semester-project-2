// Use the form to search for listings
// Display the listing card with defaultCard
// Search for all in recordArray

import { searchListings } from "../../api/listings/searchListing.mjs";
import { defaultCard } from "../../components/card/card.mjs";
// import { searchForm } from "../../ui/listings/searchForm.mjs";

export async function displaySearchListing() {
  try {
    const cardContainer = document.querySelector("#search_results");
    const result = await searchListings();
    const flatResult = result.flat();

    // Clear the card container
    cardContainer.innerHTML = "";

    // Get the search input value
    const searchInput = document.querySelector("#search_listings_input");

    // Find the first listing that exactly matches the search input value
    const foundListing = flatResult.find((listing) => {
      return listing.title.toLowerCase() === searchInput;
    });

    // Display the search result if found
    if (foundListing) {
      const card = defaultCard(foundListing);
      cardContainer.appendChild(card);
    } else {
      // Display a message if no matching listing is found
      cardContainer.innerHTML = "No matching listing found.";
    }
  } catch (error) {
    console.error("Error displaying searched listings:", error);
  }
}

// Attach an event listener to the search button

document
  .querySelector("#search_listings_button")
  .addEventListener("click", (e) => {
    e.preventDefault();
    displaySearchListing();
  });

(async () => {
  await displaySearchListing();
})();
