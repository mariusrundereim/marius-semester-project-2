import { searchListings } from "../../api/listings/searchListing.mjs";
import { defaultCard } from "../../components/card/card.mjs";
// import { searchForm } from "../../ui/listings/searchForm.mjs";

export async function displaySearchListing() {
  try {
    const cardContainer = document.querySelector("#search_results");
    const result = await searchListings();
    const flatResult = result.flat();

    console.log("Complete array:", result);
    // Clear the card container
    cardContainer.innerHTML = "";

    // Get the search input value
    const searchInput = document
      .querySelector("#search_listings_input")
      .value.toLowerCase();

    console.log("Search input:", searchInput);

    // Find the first listing that exactly matches the search input value
    const foundListing = flatResult.find((listing) => {
      // Access the nested 'title' property
      const title = listing.title.toLowerCase().trim();
      // Log each nested listing title to check for matches
      //   console.log("Listing Title:", title);
      //   console.log("Comparison Result:", title === searchInput);
      return title === searchInput;
    });

    // Log the foundListing to check its value
    console.log("Found Listing:", foundListing);

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
// Attach an event listener to the search button

// (async () => {
//   await displaySearchListing();
// })();

// displaySearchListing()
