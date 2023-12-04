export function handleThumbnailClick(index, mediaArray) {
  // Handle the click event on thumbnail images
  const coverImage = document.querySelector(".cover-image");
  if (coverImage) {
    coverImage.src = mediaArray[index];
  }
}
