import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";
// import { displayListings } from "../../listeners/listings/displayListings.mjs";

let recordArray = []; // Declared as global variable
export async function searchListings(pOffset) {
  for (let i = 0; i < 1000; i += 200) {
    console.log(i);

    try {
      const getListingData = {
        method: "GET",
        headers: headers("application/json"),
        body: JSON.stringify(),
      };

      const response = await fetch(
        `${api_listings}?offset=${i}&_seller=true&_bids=true&_active=true`,
        getListingData
      );
      if (!response.ok) {
        document.querySelector("body").innerHTML = "Error";
        throw new Error("Som error with search");
      }
      const result = await response.json();

      recordArray.push(result); // Add fetched data to recordArray

      console.log(recordArray);
    } catch (error) {
      console.log(error);
    }
  }
  return recordArray; // Return array
}
console.log("New array:", recordArray);
