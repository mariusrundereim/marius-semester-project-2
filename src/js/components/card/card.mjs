import { formatMediaUrl } from "../../utils/formatting/formatMedia.mjs";
import { formatEndsAt } from "../../utils/formatting/formatEndsAt.mjs";
import { handleHighestBidder } from "../../utils/helper/lastBid.mjs";

export function defaultCard({ media, seller, title, endsAt, bids, id }) {
  const firstMedia = formatMediaUrl(media);
  const endsAtFormatted = formatEndsAt(endsAt);
  const highestBid = handleHighestBidder(bids);
  const cardElement = document.createElement("div");
  cardElement.id = "card_item";

  cardElement.innerHTML = `

  <div class="bg-white rounded-xl flex flex-col min-w-[10rem] min-h-[25rem] hover:shadow-lg">
          <!--Image-->
          <div >
          <img class="w-full h-52 rounded-t-lg object-cover" src="${firstMedia}" alt=""></div>
          <!-- Body -->
          <div class="p-2">
            <div class="mb-4">
              <p>by <span>${seller.name}</span></p>
              <h2 class="text-xl font-semibold">${title}</h2>
            </div>

            <div class="flex flex-col gap-2 mb-3">
              <div class="flex inline-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p>${endsAtFormatted}</p>
              </div>
              <div class="flex inline-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>

                <p>${
                  highestBid
                    ? `${highestBid.amount} from ${highestBid.bidderName}`
                    : "No bids yet"
                }</p>
              </div>
            </div>
            <button
              class="w-full text-brand-dark bg-brand-color font-semibold p-2 px-4 rounded-lg"
            >
              Bid!
            </button>
          </div>
        </div>
  `;

  cardElement.addEventListener("click", () => {
    window.location.href = `listingSpecific.html?id=${id}`;
  });

  return cardElement;
}
