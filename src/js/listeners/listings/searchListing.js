import { searchListings } from "../../api/listings/searchListing.js";
import { defaultCard } from "../../components/card/card.js";

export async function displaySearchListing() {
  try {
    const cardContainer = document.querySelector("#search_results");
    const result = await searchListings();
    const flatResult = result.flat();

    // console.log("Complete array:", result);
    // Clear the card container
    cardContainer.innerHTML = "";

    // Get the search input value
    const searchInput = document
      .querySelector("#search_listings_input")
      .value.toLowerCase();

    // console.log("Search input:", searchInput);

    const foundListing = flatResult.filter((listing) => {
      return listing.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    // Log the foundListing to check its value
    // console.log("Found Listing:", foundListing);

    // Display the search result if found
    if (foundListing.length > 0) {
      foundListing.forEach((listing) => {
        const card = defaultCard(listing);
        cardContainer.appendChild(card);
      });
    } else {
      // Display a message if no matching listing is found
      cardContainer.innerHTML = "No matching listing found.";
    }
  } catch (error) {
    console.error("Error displaying searched listings:", error);
  }
}

// displaySearchListing();
