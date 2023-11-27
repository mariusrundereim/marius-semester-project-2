import { baseURL } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";
import { bidOnListing } from "../../listeners/listings/bidList.mjs";

export async function bidListing(id, amount) {
  try {
    const bidListingData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify({ amount: amount }),
    };

    const response = await fetch(
      `${baseURL}listings/${id}/bids`,
      bidListingData
    );
    if (!response.ok) {
      throw new Error("This is oing to have to change or something");
    }
    const result = await response.json();
    console.log(result);
    bidOnListing(result);

    return result;
  } catch (error) {
    console.log(error);
    // throw error(error);
  }
}
