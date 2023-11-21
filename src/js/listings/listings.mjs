import { api_listings } from "../api/env/env.mjs";
import { headers } from "../auth/headers.mjs";

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
  } catch (error) {
    console.log(error);
  }
}
getAllListings();
