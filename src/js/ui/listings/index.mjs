export function renderListing(listing) {
  console.log("Hello");
  const listContainer = document.querySelector("#listing_container");
  //listContainer.innerHTML = "";
  if (listing) {
    listContainer.innerHTML = `
    <section class="p-2 border border-1 border-brand-light rounded-xl">
        <p>Seller by <span class="font-medium">RandomUser8</span></p>
        <h1 class="text-2xl font-bold">Gul stol${listing.title}</h1>
        <p>${listing.description}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          ratione voluptatem qui adipisci aperiam ea nulla quisquam rem iure?
          Doloribus.
        </p>
      </section>
    `;
  }
}
