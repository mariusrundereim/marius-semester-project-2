export function createImageElement(src, classes) {
  const image = document.createElement("img");
  image.classList.add(...classes.split(" "));
  image.src = src;
  return image;
}
