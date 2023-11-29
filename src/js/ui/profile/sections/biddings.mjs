export function biddingsWon(profile) {
  const profileContainer = document.querySelector("#profile_content");

  const biddingsSection = document.createElement("section");
  const biddingsTitle = document.createElement("h2");
  const biddingsList = document.createElement("div");
  const biddingsListTitle = document.createElement("h3");
  const biddingsListItems = document.createElement("div");
  const biddingsListItemsTitle = document.createElement("h4");
  const biddingsListItemsList = document.createElement("div");
  const biddingsListItemsListItem = document.createElement("div");
  const biddingsListItemsListItemMedia = document.createElement("div");
  const biddingsListItemsListItemMediaImg = document.createElement("img");
  const biddingsListItemsListItemInfo = document.createElement("div");
  const biddingsListItemsListItemInfoTitle = document.createElement("h5");
  const biddingsListItemsListItemInfoBid = document.createElement("p");
  const biddingsListItemsListItemInfoTime = document.createElement("p");
  const biddingsListItemsListItemActions = document.createElement("div");
  const biddingsListItemsListItemActionsEdit = document.createElement("button");
  const biddingsListItemsListItemActionsDelete =
    document.createElement("button");
  const biddingsListItemsListItemActionsView = document.createElement("button");

  // Add classes
  biddingsSection.classList.add("flex", "flex-col", "gap-4");
  biddingsTitle.classList.add("text-2xl", "font-bold");
  biddingsList.classList.add("flex", "flex-col", "gap-4");
  biddingsListTitle.classList.add("text-xl", "font-bold");
  biddingsListItems.classList.add("flex", "flex-col", "gap-4");
  biddingsListItemsTitle.classList.add("text-xl", "font-bold");
  biddingsListItemsList.classList.add("flex", "flex-col", "gap-4");
  biddingsListItemsListItem.classList.add("flex", "flex-col", "gap-4");
  biddingsListItemsListItemMedia.classList.add("flex", "flex-col", "gap-4");
  biddingsListItemsListItemMediaImg.classList.add("h-20", "w-20");
  biddingsListItemsListItemInfo.classList.add("flex", "flex-col", "gap-4");
  biddingsListItemsListItemInfoTitle.classList.add("text-xl", "font-bold");
  biddingsListItemsListItemInfoBid.classList.add("text-xl");
  biddingsListItemsListItemInfoTime.classList.add("text-xl");
  biddingsListItemsListItemActions.classList.add("flex", "flex-col", "gap-4");
  biddingsListItemsListItemActionsEdit.classList.add(
    "p-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark"
  );
  biddingsListItemsListItemActionsDelete.classList.add(
    "p-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark"
  );
  biddingsListItemsListItemActionsView.classList.add(
    "p-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark"
  );

  // Add content
  biddingsTitle.textContent = "Biddings";
  biddingsListTitle.textContent = "Active";
  biddingsListItemsTitle.textContent = "Won";
  biddingsListItemsListItemInfoTitle.textContent = "Bidding title";
  biddingsListItemsListItemInfoBid.textContent = "Latest bid";
  biddingsListItemsListItemInfoTime.textContent = "Time left";
  biddingsListItemsListItemActionsEdit.textContent = "Edit";
  biddingsListItemsListItemActionsDelete.textContent = "Delete";
  biddingsListItemsListItemActionsView.textContent = "View";

  // Append
  profileContainer.appendChild(biddingsSection);
  biddingsSection.appendChild(biddingsTitle);
  biddingsSection.appendChild(biddingsList);
  biddingsList.appendChild(biddingsListTitle);
  biddingsList.appendChild(biddingsListItems);
  biddingsListItems.appendChild(biddingsListItemsTitle);
  biddingsListItems.appendChild(biddingsListItemsList);
  biddingsListItemsList.appendChild(biddingsListItemsListItem);
  biddingsListItemsListItem.appendChild(biddingsListItemsListItemMedia);
  biddingsListItemsListItem.appendChild(biddingsListItemsListItemInfo);
  biddingsListItemsListItem.appendChild(biddingsListItemsListItemActions);
  biddingsListItemsListItemMedia.appendChild(biddingsListItemsListItemMediaImg);
  biddingsListItemsListItemInfo.appendChild(biddingsListItemsListItemInfoTitle);
  biddingsListItemsListItemInfo.appendChild(biddingsListItemsListItemInfoBid);
  biddingsListItemsListItemInfo.appendChild(biddingsListItemsListItemInfoTime);
  biddingsListItemsListItemActions.appendChild(
    biddingsListItemsListItemActionsEdit
  );
  biddingsListItemsListItemActions.appendChild(
    biddingsListItemsListItemActionsDelete
  );
  biddingsListItemsListItemActions.appendChild(
    biddingsListItemsListItemActionsView
  );

  return biddingsSection;
}

// Your own listings

export function profileListings(profile) {
  const profileContainer = document.querySelector("#profile_content");
  const listingsSection = document.createElement("section");
  const listingsTitle = document.createElement("h2");
  const listingsList = document.createElement("div");
  const listingsListTitle = document.createElement("h3");
  const listingsListItems = document.createElement("div");
  const listingsListItemsTitle = document.createElement("h4");
  const listingsListItemsList = document.createElement("div");
  const listingsListItemsListItem = document.createElement("div");
  const listingsListItemsListItemMedia = document.createElement("div");
  const listingsListItemsListItemMediaImg = document.createElement("img");
  const listingsListItemsListItemInfo = document.createElement("div");
  const listingsListItemsListItemInfoTitle = document.createElement("h5");
  const listingsListItemsListItemInfoBid = document.createElement("p");
  const listingsListItemsListItemInfoTime = document.createElement("p");
  const listingsListItemsListItemActions = document.createElement("div");
  const listingsListItemsListItemActionsEdit = document.createElement("button");
  const listingsListItemsListItemActionsDelete =
    document.createElement("button");
  const listingsListItemsListItemActionsView = document.createElement("button");

  // Add classes
  listingsSection.classList.add("flex", "flex-col", "gap-4");
  listingsTitle.classList.add("text-2xl", "font-bold");
  listingsList.classList.add("flex", "flex-col", "gap-4");
  listingsListTitle.classList.add("text-xl", "font-bold");
  listingsListItems.classList.add(
    "flex",
    "flex-row",

    "rounded-xl",
    "p-4",
    "bg-brand-light"
  );
  listingsListItemsTitle.classList.add("text-xl", "font-bold");
  listingsListItemsList.classList.add("flex", "flex-row", "gap-4");
  listingsListItemsListItem.classList.add("bg-yellow-400");
  listingsListItemsListItemMedia.classList.add("border-2", "border-brand-dark");
  listingsListItemsListItemMediaImg.classList.add(
    "h-20",
    "w-20",
    "aspect-square",
    "object-cover",
    "rounded-xl"
  );
  listingsListItemsListItemInfo.classList.add("flex", "flex-col", "gap-4");
  listingsListItemsListItemInfoTitle.classList.add("text-xl", "font-bold");
  listingsListItemsListItemInfoBid.classList.add("text-xl");
  listingsListItemsListItemInfoTime.classList.add("text-xl");
  listingsListItemsListItemActions.classList.add("flex", "flex-row", "gap-4");
  listingsListItemsListItemActionsEdit.classList.add(
    "p-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark"
  );
  listingsListItemsListItemActionsDelete.classList.add(
    "p-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark"
  );
  listingsListItemsListItemActionsView.classList.add(
    "p-2",
    "rounded-xl",
    "text-white",
    "bg-brand-dark"
  );

  // Add content
  listingsTitle.textContent = "Your own listings";
  listingsListTitle.textContent = "Active bids";
  listingsListItemsListItemMediaImg.src = profile.listings[0].media;
  listingsListItemsListItemInfoTitle.textContent = `${profile.listings[0].title}`;
  listingsListItemsListItemInfoBid.textContent = "Latest bid";
  //   console.log("Latest bid", profile.listings[0].bids[0].amount);
  console.log("Latest bid", profile.listings[0]);
  listingsListItemsListItemInfoTime.textContent = "Time left";
  listingsListItemsListItemActionsEdit.textContent = "Edit";
  listingsListItemsListItemActionsDelete.textContent = "Delete";
  listingsListItemsListItemActionsView.textContent = "View";

  // Append
  profileContainer.appendChild(listingsSection);
  listingsSection.appendChild(listingsTitle);
  listingsSection.appendChild(listingsList);
  listingsList.appendChild(listingsListTitle);
  listingsList.appendChild(listingsListItems);
  listingsListItems.appendChild(listingsListItemsList);
  listingsListItemsList.appendChild(listingsListItemsListItem);
  listingsListItemsListItem.appendChild(listingsListItemsListItemMedia);
  listingsListItemsListItem.appendChild(listingsListItemsListItemInfo);
  listingsListItemsListItem.appendChild(listingsListItemsListItemActions);
  listingsListItemsListItemMedia.appendChild(listingsListItemsListItemMediaImg);
  listingsListItemsListItemInfo.appendChild(listingsListItemsListItemInfoTitle);
  listingsListItemsListItemInfo.appendChild(listingsListItemsListItemInfoBid);
  listingsListItemsListItemInfo.appendChild(listingsListItemsListItemInfoTime);
  listingsListItemsListItemActions.appendChild(
    listingsListItemsListItemActionsEdit
  );
  listingsListItemsListItemActions.appendChild(
    listingsListItemsListItemActionsDelete
  );
  listingsListItemsListItemActions.appendChild(
    listingsListItemsListItemActionsView
  );

  return listingsSection;
}
