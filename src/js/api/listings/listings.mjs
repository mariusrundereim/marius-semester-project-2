// import { api_listings } from "../api/env/env.mjs";
// import { headers } from "../auth/headers.mjs";

import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";
import { defaultCard } from "../../components/card/card.mjs";
import { formatMediaUrl } from "../../utils/formatting/formatMedia.mjs";

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
    const result = await response.json();

    console.log(result);
    const cardWrapper = document.querySelector("#listing_card");
    cardWrapper.innerHTML = "";
    result.forEach((listing) => {
      const { image, seller, title, endsAt, highestBid } = listing;
      console.log("image", image);

      // const formattedEndDate = formatEndDate(endsAt);
      // const firstMedia = formatMediaUrl(image);

      const card = defaultCard(image, seller, title, endsAt, highestBid);
      cardWrapper.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}
getAllListings();
