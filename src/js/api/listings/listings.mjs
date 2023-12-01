import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";
import { displayListings } from "../../listeners/listings/displayListings.mjs";

export async function getAllListings() {
  try {
    const getListingData = {
      method: "GET",
      headers: headers("application/json"),
      body: JSON.stringify(),
    };

    const response = await fetch(
      `${api_listings}?&_seller=true&_bids=true&_active=true`,
      getListingData
    );
    if (!response.ok) {
      // displayListings(); STRENGT FORBUTT
      document.querySelector("body").innerHTML = "Error";
      throw new Error("This is oing to have to change or something");
    }
    const result = await response.json();

    // console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
}
