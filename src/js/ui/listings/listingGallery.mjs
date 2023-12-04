import { createImageElement } from "../../utils/helper/imageElement.mjs";
import { handleThumbnailClick } from "../../listeners/listings/imageGallery.mjs";

export function imageGallery(listing) {
  const gallerySection = document.createElement("section");
  gallerySection.classList.add("flex", "flex-col", "gap-4"); // Create the first media item

  const coverImage = createImageElement(
    listing.media[0],
    "aspect-video object-cover rounded-md cover-image"
  );
  gallerySection.appendChild(coverImage); // Create a container for the rest of the media items

  if (listing.media.length > 1) {
    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.classList.add(
      "py-2",
      "flex",
      "flex-wrap",
      "gap-1",
      "justify-center",
      "items-center"
    );
    gallerySection.appendChild(thumbnailContainer);

    listing.media.slice(0).forEach((mediaUrl, index) => {
      const thumbnailImage = createImageElement(
        mediaUrl,
        "h-10 md:h-20 aspect-square object-cover rounded-md brightness-50"
      );
      thumbnailImage.addEventListener("click", () => {
        // Reset brightness for all thumbnails
        thumbnailContainer.querySelectorAll("img").forEach((img) => {
          img.classList.remove("brightness-100");
          img.classList.add("brightness-50");
        });

        // Handle the click event on thumbnail images
        handleThumbnailClick(index, listing.media, thumbnailImage);

        // Update the brightness class of the clicked thumbnail
        thumbnailImage.classList.remove("brightness-50");
        thumbnailImage.classList.add("brightness-100");
      });
      thumbnailContainer.appendChild(thumbnailImage);
    });
  }

  return gallerySection;
}
