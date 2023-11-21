// import { api_listings } from "../api/env/env.mjs";
// import { headers } from "../auth/headers.mjs";

import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = new URL(`${api_listings}/${id}`);

export async function getListing() {
  try {
    const getListingData = {
      method: "GET",
      headers: headers("application/json"),
      body: JSON.stringify(),
    };

    const response = await fetch(
      `${url}_seller=true&_bids=true`,
      getListingData
    );

    const result = await response.json();
    //console.log(result);
  } catch (error) {
    console.log(error);
  }
}
getListing();
