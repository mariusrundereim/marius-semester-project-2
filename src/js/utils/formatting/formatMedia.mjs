export function formatMediaUrl(mediaArray) {
  console.log("Media Array:", mediaArray);

  if (Array.isArray(mediaArray) && mediaArray.length > 0) {
    return mediaArray[0];
  } else {
    return "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
}
