import { formatMediaUrl } from "../../utils/formatting/formatMedia.mjs";
import { formatEndsAt } from "../../utils/formatting/formatEndsAt.mjs";

export function profileCard({ media, title, description, endsAt, id }) {
  const firstMedia = formatMediaUrl(media);
  const endsAtFormatted = formatEndsAt(endsAt);
  const cardElement = document.createElement("div");
  cardElement.id = "profileCard_item";
  cardElement.innerHTML = `
  <div class="p-1 bg-white flex flex-row justify-between items-center  rounded-xl">
            <div class="flex flex-col md:flex-row items-center">
              <img
                class="h-40 md:h-10 md:me-4 object-cover rounded-lg"
                src="${firstMedia}"
                alt=""
                />
            </div>
            <div class="flex flex-col justify-between w-full items-center md:flex-row gap-2">
              <h3 class="text-xl font-medium">${title}</h3>
              <p>${description}</p>
              <p>Ends: <span>${endsAtFormatted}</span></p>
            </div>
            <div>
              <button
                type="button"
                class="p-2 px-4 rounded-xl text-white bg-black">
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
