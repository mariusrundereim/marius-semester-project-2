import { baseURL } from "../../api/env/env.mjs";
import { viewListingDetails } from "../../ui/listings/singleListing.mjs";
import { bidHistory } from "../../listeners/listings/bidHistory.mjs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const listingId = urlParams.get("id");

export async function getListingById(id, options = {}) {
  try {
    const queryParams = new URLSearchParams(options);
    const response = await fetch(`${baseURL}listings/${id}?${queryParams}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error fetching listing: ${response.statusText}`);
    }

    const result = await response.json();
    //console.log("Result:", result);

    viewListingDetails(result);
    bidHistory(result);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

if (listingId) {
  const options = {
    _seller: true,
    _bids: true,
  };

  getListingById(listingId, options);
} else {
  console.log("Listing ID is missing");
}
