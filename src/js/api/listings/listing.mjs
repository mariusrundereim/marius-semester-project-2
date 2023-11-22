// import { api_listings } from "../api/env/env.mjs";
// import { headers } from "../auth/headers.mjs";

import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";
import { renderListing } from "../../ui/listings/index.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

let url;

if (!id) {
  console.log("ID missing");
} else {
  const url = new URL(`${api_listings}/${id}`);
  url.searchParams.append("_seller", "true");
}

export async function getListing() {
  try {
    if (!url) {
      // Handle the case where url is not defined, e.g., redirect or show an error message
      return;
    }

    const getListingData = {
      method: "GET",
      headers: headers("application/json"),
      // body: JSON.stringify(), // No need to provide an empty body for a GET request
    };

    const response = await fetch(url, getListingData);
    const json = await response.json();
    // _seller=true&_bids=true

    if (response.ok) {
      renderListing(json);
    } else {
      alert("Pending error");
    }
  } catch (error) {
    console.log(error);
  }
}

getListing();
