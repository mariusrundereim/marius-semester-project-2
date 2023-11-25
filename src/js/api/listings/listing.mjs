// import { api_listings } from "../env/env.mjs";
// import { headers } from "../../auth/headers.mjs";
// import { renderListing } from "../../ui/listings/index.mjs";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// if (!id) {
//   console.log("ID is missing");
// }
// const url = new URL(`${api_listings}/${id}`);
// url.searchParams.append("_seller", "true");
// url.searchParams.append("_bids", "true");

// export async function getListing() {
//   try {
//     const getData = {
//       method: "GET",
//       headers: headers("application/json"),
//     };
//     const response = await fetch(`${url}`, getData);
//     const json = await response.json();
//     console.log(json);
//     if (response.ok) {
//       renderListing(json);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// getListing();
