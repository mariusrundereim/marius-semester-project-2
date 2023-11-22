export function formatMediaUrl(mediaArray) {
  if (Array.isArray(mediaArray) && mediaArray.length > 0) {
    // If mediaArray is an array and has at least one element
    return mediaArray[0];
  } else {
    // If mediaArray is not an array or has no elements
    return ""; // or you can return a default URL or handle it according to your requirements
  }
}
