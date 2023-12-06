// export function formatMediaUrl(mediaArray) {
//   return Array.isArray(mediaArray) && mediaArray.length > 0
//     ? mediaArray[0]
//     : createPlaceholderImage();
// }

export function formatMediaUrl(mediaArray) {
  if (Array.isArray(mediaArray) && mediaArray.length > 0) {
    return mediaArray[0];
  } else {
    // const image = document.createElement("img");
    // image.classList.add("bg-no-image", "h-full", "w-full");
    // return image;
    return "https://raw.githubusercontent.com/mariusrundereim/marius-semester-project-2/main/src/assets/images/NoImage.png";
  }
}
