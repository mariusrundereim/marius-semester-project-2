import { api_listings } from "../env/env.js";
import { headers } from "../../auth/headers.js";
export async function createListing(newListing) {
  try {
    const postData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify(newListing),
    };

    const response = await fetch(`${api_listings}`, postData);
    if (!response.ok) {
      throw new Error("Not ok. Insert correct on Listing post");
    }
    const result = await response.json();
    console.log("New object", result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
