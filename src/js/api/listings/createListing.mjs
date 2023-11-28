import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";
export async function createListing(newListing) {
  try {
    const postData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify(newListing),
    };

    const response = await fetch(`${api_listings}`, postData);
    if (response.ok) {
      location.reload();
    } else {
      alert("Not ok. Insert correct on Listing post");
    }
  } catch (error) {
    console.log(error);
  }
}
