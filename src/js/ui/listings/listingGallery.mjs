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
    thumbnailImage.addEventListener("click", () =>
      handleThumbnailClick(index, listing.media)
    );
    thumbnailContainer.appendChild(thumbnailImage);
  });

  return gallerySection;
}

// export function imageGallery(listing) {
//   const gallerySection = document.createElement("section");
//   gallerySection.classList.add("flex", "flex-col", "gap-4"); // Create the first media item

//   const firstMedia = document.createElement("img");
//   firstMedia.classList.add("aspect-video", "object-cover", "rounded-md");
//   firstMedia.src = listing.media[0];
//   firstMedia.alt = listing.title;
//   gallerySection.appendChild(firstMedia); // Create a container for the rest of the media items

//   const nextMediaContainer = document.createElement("div");
//   nextMediaContainer.classList.add(
//     "py-2",
//     "flex",
//     "flex-wrap",
//     "gap-1",
//     "justify-center",
//     "items-center"
//   );
//   gallerySection.appendChild(nextMediaContainer);

//   listing.media.slice(1).forEach((mediaUrl) => {
//     const nextMediaItem = document.createElement("img");
//     nextMediaItem.classList.add(
//       "h-10",
//       "md:h-20",
//       "aspect-square",
//       "object-cover",
//       "rounded-md",
//       "brightness-50"
//     );
//     nextMediaItem.src = mediaUrl;
//     nextMediaItem.alt = listing.title;
//     nextMediaContainer.appendChild(nextMediaItem);
//   });

//   return gallerySection;
// }
