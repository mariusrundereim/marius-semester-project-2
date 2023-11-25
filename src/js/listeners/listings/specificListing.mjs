import { baseURL } from "../../api/env/env.mjs";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let listingId = urlParams.get("id");

export async function specificListing() {
  const result = await baseURL(`listings/${listingId}`, "GET");
  console.log(result);
  return result;
}
