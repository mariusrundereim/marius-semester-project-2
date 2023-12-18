import { formatMediaUrl } from "../../utils/formatting/formatMedia.js";
import { formatEndsAt } from "../../utils/formatting/formatEndsAt.js";

export function profileCard({ media, title, description, endsAt, id }) {
  const firstMedia = formatMediaUrl(media);
  const endsAtFormatted = formatEndsAt(endsAt);

  // Create the main container div
  const cardElement = document.createElement("div");
  cardElement.id = "profileCard_item";
  cardElement.classList.add(
    "flex",
    "flex-col",
    "md:flex-row",
    "justify-between",
    "rounded-xl",
    "bg-white",
    "p-2",
    "gap-6"
  );

  // Create the first inner div with an image
  const firstInnerDiv = document.createElement("div");

  const image = document.createElement("img");
  image.classList.add(
    "object-cover",
    "w-full",
    "md:h-10",
    "md:me-4",
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
    "md:flex-row",
    "content-center",
    "w-full",
    "justify-between",
    "align-center",
    "space-x-2",
    "col-span-4"
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

  cardElement.addEventListener("click", () => {
    window.location.href = `listingSpecific.html?id=${id}`;
  });

  return cardElement;
  // return cardElement;
}
