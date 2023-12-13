import { displaySearchListing } from "../../listeners/listings/searchListing.js";

export function searchForm() {
  const searchForm = document.querySelector("#search_listing_form");
  const searchInput = document.querySelector("#search_listings_input");
  const searchButton = document.querySelector("#search_listings_button");

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    displaySearchListing();
  });

  return searchForm;
}
