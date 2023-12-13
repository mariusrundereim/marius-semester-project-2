// import { baseURL } from "../env/env.mjs";
import { api_listings } from "../env/env.js";
import { headers } from "../../auth/headers.js";
// import { bidOnListing } from "../../listeners/listings/bidList.mjs";
import { updateCredits } from "../../utils/helper/updateCredit.mjs";

export async function bidListing(id, amount) {
  console.log(id, amount);
  amount = parseInt(amount);
  console.log(typeof amount);
  try {
    const bidListingData = {
      method: "POST",
      headers: headers("application/json"),
      body: JSON.stringify({ amount: Number(amount) }),
    };

    const response = await fetch(`${api_listings}/${id}/bids`, bidListingData);
    const result = await response.json();
    console.log(result);

    // bidOnListing(result);
    if (response.ok) {
      location.reload();
    } else {
      throw new Error("This is oing to have to change or something");
    }

    return result;
  } catch (error) {
    console.log(error);
    // throw error(error);
  }
}
