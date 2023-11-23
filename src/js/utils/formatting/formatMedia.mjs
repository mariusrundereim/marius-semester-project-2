export function formatMediaUrl(mediaArray) {
  if (Array.isArray(mediaArray) && mediaArray.length > 0) {
    return mediaArray[0];
  } else {
    return "";
  }
}
