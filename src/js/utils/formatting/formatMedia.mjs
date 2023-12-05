export function formatMediaUrl(mediaArray) {
  if (Array.isArray(mediaArray) && mediaArray.length > 0) {
    return mediaArray[0];
  } else {
    // const imageDiv = document.createElement("img");
    // const imagePath = "src/assets/images/NoImage.png";
    // imageDiv.src = imagePath;
    // return imageDiv;

    return "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
}
