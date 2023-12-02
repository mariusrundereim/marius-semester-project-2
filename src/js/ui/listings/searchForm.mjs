export function searchForm() {
  const searchForm = document.querySelector("#search_listing_form");
  const searchInput = document.querySelector("#search_listings_input");
  const searchButton = document.querySelector("#search_listings_button");

  searchForm.addEventListener("keyup", (event) => {
    event.preventDefault();
    console.log(searchInput.value);
  });
  return searchForm;
}
searchForm();
