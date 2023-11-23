// import { api_listings } from "../api/env/env.mjs";
// import { headers } from "../auth/headers.mjs";

import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";
import { defaultCard } from "../../components/card/card.mjs";

export async function getAllListings() {
  try {
    const getListingData = {
      method: "GET",
      headers: headers("application/json"),
      body: JSON.stringify(),
    };

    const response = await fetch(
      `${api_listings}?_seller=true&_bids=true`,
      getListingData
    );
    if (!response.ok) {
      throw new Error("This is oing to have to change or something");
    }
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    // throw error(error);
  }
}

(async () => {
  await displayListings();
})();

async function displayListings() {
  //catch and handle the error
  const cardWrapper = document.querySelector("#listing_card");
  cardWrapper.innerHTML = "";
  const result = await getAllListings();
  result.forEach((listing) => {
    const card = defaultCard(listing);
    cardWrapper.appendChild(card);
  });
}
