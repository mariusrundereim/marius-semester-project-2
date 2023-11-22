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

    const response = await fetch(`${api_listings}`, getListingData);
    const result = await response.json();

    const cardWrapper = document.querySelector("#listing_card");
    result.forEach((listing) => {
      // Extract relevant information from the listing
      const { title, endsAt, date, image } = listing;

      // Create a card element using defaultCard function
      const card = defaultCard(title, endsAt, date, image);

      // Append the card to the cardWrapper
      cardWrapper.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}
getAllListings();
