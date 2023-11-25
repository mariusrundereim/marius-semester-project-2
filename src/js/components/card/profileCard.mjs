export function profileCard(media, title, bids, endsAt) {
  const cardElement = document.createElement("div");
  cardElement.id = "profileCard_item";
  cardElement.innerHTML = `<div>${title}</div>`;
  return cardElement;
}
