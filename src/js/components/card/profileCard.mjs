import { formatMediaUrl } from "../../utils/formatting/formatMedia.mjs";
import { formatEndsAt } from "../../utils/formatting/formatEndsAt.mjs";

export function profileCard({ media, title, description, endsAt, id }) {
  const firstMedia = formatMediaUrl(media);
  const endsAtFormatted = formatEndsAt(endsAt);

  // Create the main container div
  const cardElement = document.createElement("div");
  cardElement.id = "profileCard_item";
  cardElement.classList.add(
    "p-1",
    "bg-white",
    "flex",
    "flex-row",
    "justify-between",
    "items-center",
    "rounded-xl"
  );

  // Create the first inner div with an image
  const firstInnerDiv = document.createElement("div");
  firstInnerDiv.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "items-center"
  );

  const image = document.createElement("img");
  image.classList.add(
    "h-2",
    "md:h-10",
    "md:me-4",
    "object-cover",
    "rounded-lg"
  );
  image.src = firstMedia;
  image.alt = "";

  firstInnerDiv.appendChild(image);

  // Create the second inner div with text content
  const secondInnerDiv = document.createElement("div");
  secondInnerDiv.classList.add(
    "flex",
    "flex-col",
    "justify-between",
    "w-full",
    "items-center",
    "md:flex-row",
    "gap-2"
  );

  const titleHeading = document.createElement("h3");
  titleHeading.classList.add("text-xl", "font-medium");
  titleHeading.textContent = title;

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = description;

  const endsAtParagraph = document.createElement("p");
  const endsAtSpan = document.createElement("span");
  endsAtSpan.textContent = endsAtFormatted;
  endsAtParagraph.textContent = "Ends: ";
  endsAtParagraph.appendChild(endsAtSpan);

  secondInnerDiv.appendChild(titleHeading);
  secondInnerDiv.appendChild(descriptionParagraph);
  secondInnerDiv.appendChild(endsAtParagraph);

  // Create the third inner div with a button
  const thirdInnerDiv = document.createElement("div");

  const viewButton = document.createElement("button");
  viewButton.type = "button";
  viewButton.classList.add(
    "p-2",
    "px-4",
    "rounded-xl",
    "text-white",
    "bg-black"
  );
  viewButton.textContent = "View";

  thirdInnerDiv.appendChild(viewButton);

  // Append the inner divs to the main container div
  cardElement.appendChild(firstInnerDiv);
  cardElement.appendChild(secondInnerDiv);
  cardElement.appendChild(thirdInnerDiv);

  // Append the main container div to the document body (or another desired parent element)
  // document.body.appendChild(cardElement);

  // const cardElement = document.createElement("div");
  // cardElement.id = "profileCard_item";
  // cardElement.innerHTML = `
  // <div class="p-1 bg-white flex flex-row justify-between items-center  rounded-xl">
  //           <div class="flex flex-col md:flex-row items-center">
  //             <img
  //               class="h-40 md:h-10 md:me-4 object-cover rounded-lg"
  //               src="${firstMedia}"
  //               alt=""
  //               />
  //           </div>
  //           <div class="flex flex-col justify-between w-full items-center md:flex-row gap-2">
  //             <h3 class="text-xl font-medium">${title}</h3>
  //             <p>${description}</p>
  //             <p>Ends: <span>${endsAtFormatted}</span></p>
  //           </div>
  //           <div>
  //             <button
  //               type="button"
  //               class="p-2 px-4 rounded-xl text-white bg-black">
  //               View
  //             </button>
  //           </div>
  //         </div>
  // `;
  cardElement.addEventListener("click", () => {
    window.location.href = `listingSpecific.html?id=${id}`;
  });

  return cardElement;
  // return cardElement;
}
