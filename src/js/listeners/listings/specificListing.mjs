import { baseURL } from "../../api/env/env.mjs";
import { renderListing } from "../../ui/listings/index.mjs";

export async function getListingById(id) {
  try {
    const response = await fetch(`${baseURL}listings/${id}`, {
      method: "GET",
    });
    if (response.ok) {
      throw new Error(`Error fetchinig listing: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {}
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const listingId = urlParams.get("id");

if (listingId) {
  getListingById(listingId);
  renderListing();
} else {
  console.log("Listing ID is missing");
}
