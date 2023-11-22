// import { api_listings } from "../api/env/env.mjs";
// import { headers } from "../auth/headers.mjs";

import { api_listings } from "../env/env.mjs";
import { headers } from "../../auth/headers.mjs";
import { defaultCard } from "../../components/card/card.mjs";
import { formatEndDate } from "../../utils/formatting/formatDate.mjs";
import { formatMediaUrl } from "../../utils/formatting/formatMedia.mjs";

export async function getAllListings() {
  try {
    const getListingData = {
      method: "GET",
      headers: headers("application/json"),
      body: JSON.stringify(),
    };

    const response = await fetch(`${api_listings}`, getListingData);
    const result = await response.json();

    console.log(result);
    const cardWrapper = document.querySelector("#listing_card");
    cardWrapper.innerHTML = "";
    result.forEach((listing) => {
      const { title, endsAt, date, image } = listing;

      const formattedEndDate = formatEndDate(endsAt);
      const firstMedia = formatMediaUrl(image);

      const card = defaultCard(
        title,
        formattedEndDate,
        date,
        firstMedia,
        "Random22"
      );
      cardWrapper.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}
getAllListings();
