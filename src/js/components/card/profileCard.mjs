import { formatMediaUrl } from "../../utils/formatting/formatMedia.mjs";
import { formatEndsAt } from "../../utils/formatting/formatEndsAt.mjs";

export function profileCard(media, title, bids, endsAt, id) {
  const firstMedia = formatMediaUrl(media);
  const endsAtFormatted = formatEndsAt(endsAt);
  const cardElement = document.createElement("div");
  cardElement.id = "profileCard_item";
  cardElement.innerHTML = `
  <div
            class="p-2 bg-white flex flex-col justify-between items-center md:flex-row min-h-full rounded-2xl"
          >
            <div class="flex flex-col md:flex-row items-center">
              <img
                class="h-40 md:h-10 md:me-4 object-cover rounded-lg"
                src="${firstMedia}"
                alt=""
              />
              <h3 class="text-xl font-medium text-center py-3">Headphones</h3>
            </div>
            <div class="flex flex-col md:flex-row gap-2">
              <p>Your bid: <span>25</span></p>
              <p>Latest bid: <span>25</span></p>
            </div>
            <div>
              <p>Ends: <span>2 days, 12 hours, 3 minutes</span></p>
            </div>
            <div>
              <button
                type="button"
                class="p-2 px-4 rounded-xl text-white bg-black"
              >
                View
              </button>
            </div>
          </div>
  `;
  cardElement.addEventListener("click", () => {
    window.location.href = `listingSpecific.html?id=${id}`;
  });

  return cardElement;
  // return cardElement;
}
