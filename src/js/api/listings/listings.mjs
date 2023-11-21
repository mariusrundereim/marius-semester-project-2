// import { api_listings } from "../api/env/env.mjs";
// import { headers } from "../auth/headers.mjs";

import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";

export async function getAllListings() {
  try {
    const getListingData = {
      method: "GET",
      headers: headers("application/json"),
      body: JSON.stringify(),
    };

    const response = await fetch(`${api_listings}`, getListingData);

    const result = await response.json();
    console.log(result);
    result.forEach((listing) => {
      console.log(listing.title);
    });
  } catch (error) {
    console.log(error);
  }
}
getAllListings();
