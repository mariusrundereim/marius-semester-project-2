// import { baseURL } from "../env/env.mjs";
import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";
import { bidOnListing } from "../../listeners/listings/bidList.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `${api_listings}/${id}/bids`;

export async function bidListing(id, amount) {
  try {
    const bidListingData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify({ amount: amount }),
    };

    const response = await fetch(`${url}`, bidListingData);
    if (!response.ok) {
      throw new Error("This is oing to have to change or something");
    }
    if (response.ok) {
      location.reload();
    }
    const result = await response.json();
    console.log(result);
    // bidOnListing(result);

    return result;
  } catch (error) {
    console.log(error);
    // throw error(error);
  }
}
