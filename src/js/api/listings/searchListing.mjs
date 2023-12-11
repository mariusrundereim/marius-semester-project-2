import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";
// import { displayListings } from "../../listeners/listings/displayListings.mjs";

let recordArray = []; // Declared as global variable
export async function searchListings() {
  for (let offset = 0; offset < 1000; offset += 100) {
    // console.log(offset);

    try {
      const getListingData = {
        method: "GET",
        headers: headers("application/json"),
        body: JSON.stringify(),
      };

      const response = await fetch(
        `${api_listings}?offset=${offset}&_seller=true&_bids=true&_active=true`,
        getListingData
      );
      if (!response.ok) {
        document.querySelector("body").innerHTML = "Error";
        throw new Error("Som error with search");
      }
      const result = await response.json();

      recordArray.push(...result); // Add fetched data to recordArray

      // console.log("My array", recordArray);
      // console.log("API response:", result);
    } catch (error) {
      console.log(error);
    }
  }
  return recordArray; // Return array
}
// console.log("New array:", recordArray);
