// import { viewActiveBids } from "../../../listeners/profile/activeBids.mjs";
// import { profileCard } from "../../components/card/profileCard.mjs";
import { profileCard } from "../../components/card/profileCard.mjs";
// import { viewActiveBids } from "../../../listeners/profile/activeBids.mjs";

export function biddingSection(profile) {
  //
  console.log("Hei");

  const profileContainer = document.querySelector("#profile_content");
  const biddingSection = document.createElement("section");
  const biddingTopDiv = document.createElement("div");
  const bidTitle = document.createElement("h2");
  const bidList = document.createElement("div");

  // Classes
  biddingSection.classList.add("flex", "flex-col", "gap-4");
  biddingTopDiv.classList.add("flex", "flex-col", "gap-4");
  bidTitle.classList.add("text-2xl", "font-bold");
  bidList.classList.add("flex", "flex-col", "gap-4");

  // Content
  bidTitle.textContent = "Bids";

  // Append
  biddingSection.appendChild(biddingTopDiv);
  biddingTopDiv.appendChild(bidTitle);
  biddingTopDiv.appendChild(bidList);

  // Display active bids using profileCard
  profile.listings.forEach((listing) => {
    const card = profileCard(
      listing.media,
      listing.title,
      listing.bids,
      listing.endsAt,
      listing.id
    );
    bidList.appendChild(card);
  });

  profileContainer.appendChild(biddingSection);
  return biddingSection;
}

// export function biddingsWon(profile) {
//   const profileContainer = document.querySelector("#profile_content");

//   const biddingsSection = document.createElement("section");
//   const biddingsTitle = document.createElement("h2");
//   const biddingsList = document.createElement("div");
//   const biddingsListTitle = document.createElement("h3");
//   const biddingsListItems = document.createElement("div");
//   const biddingsListItemsTitle = document.createElement("h4");
//   const biddingsListItemsList = document.createElement("div");
//   const biddingsListItemsListItem = document.createElement("div");
//   const biddingsListItemsListItemMedia = document.createElement("div");
//   const biddingsListItemsListItemMediaImg = document.createElement("img");
//   const biddingsListItemsListItemInfo = document.createElement("div");
//   const biddingsListItemsListItemInfoTitle = document.createElement("h5");
//   const biddingsListItemsListItemInfoBid = document.createElement("p");
//   const biddingsListItemsListItemInfoTime = document.createElement("p");
//   const biddingsListItemsListItemActions = document.createElement("div");
//   const biddingsListItemsListItemActionsEdit = document.createElement("button");
//   const biddingsListItemsListItemActionsDelete =
//     document.createElement("button");
//   const biddingsListItemsListItemActionsView = document.createElement("button");

//   // Add classes
//   biddingsSection.classList.add("flex", "flex-col", "gap-4");
//   biddingsTitle.classList.add("text-2xl", "font-bold");
//   biddingsList.classList.add("flex", "flex-col", "gap-4");
//   biddingsListTitle.classList.add("text-xl", "font-bold");
//   biddingsListItems.classList.add("flex", "flex-col", "gap-4");
//   biddingsListItemsTitle.classList.add("text-xl", "font-bold");
//   biddingsListItemsList.classList.add("flex", "flex-col", "gap-4");
//   biddingsListItemsListItem.classList.add("flex", "flex-col", "gap-4");
//   biddingsListItemsListItemMedia.classList.add("flex", "flex-col", "gap-4");
//   biddingsListItemsListItemMediaImg.classList.add("h-20", "w-20");
//   biddingsListItemsListItemInfo.classList.add("flex", "flex-col", "gap-4");
//   biddingsListItemsListItemInfoTitle.classList.add("text-xl", "font-bold");
//   biddingsListItemsListItemInfoBid.classList.add("text-xl");
//   biddingsListItemsListItemInfoTime.classList.add("text-xl");
//   biddingsListItemsListItemActions.classList.add("flex", "flex-col", "gap-4");
//   biddingsListItemsListItemActionsEdit.classList.add(
//     "p-2",
//     "rounded-xl",
//     "text-white",
//     "bg-brand-dark"
//   );
//   biddingsListItemsListItemActionsDelete.classList.add(
//     "p-2",
//     "rounded-xl",
//     "text-white",
//     "bg-brand-dark"
//   );
//   biddingsListItemsListItemActionsView.classList.add(
//     "p-2",
//     "rounded-xl",
//     "text-white",
//     "bg-brand-dark"
//   );

//   // Add content
//   biddingsTitle.textContent = "Biddings";
//   biddingsListTitle.textContent = "Active";
//   biddingsListItemsTitle.textContent = "Won";
//   biddingsListItemsListItemInfoTitle.textContent = "Bidding title";
//   biddingsListItemsListItemInfoBid.textContent = "Latest bid";
//   biddingsListItemsListItemInfoTime.textContent = "Time left";
//   biddingsListItemsListItemActionsEdit.textContent = "Edit";
//   biddingsListItemsListItemActionsDelete.textContent = "Delete";
//   biddingsListItemsListItemActionsView.textContent = "View";

//   // Append
//   profileContainer.appendChild(biddingsSection);
//   biddingsSection.appendChild(biddingsTitle);
//   biddingsSection.appendChild(biddingsList);
//   biddingsList.appendChild(biddingsListTitle);
//   biddingsList.appendChild(biddingsListItems);
//   biddingsListItems.appendChild(biddingsListItemsTitle);
//   biddingsListItems.appendChild(biddingsListItemsList);
//   biddingsListItemsList.appendChild(biddingsListItemsListItem);
//   biddingsListItemsListItem.appendChild(biddingsListItemsListItemMedia);
//   biddingsListItemsListItem.appendChild(biddingsListItemsListItemInfo);
//   biddingsListItemsListItem.appendChild(biddingsListItemsListItemActions);
//   biddingsListItemsListItemMedia.appendChild(biddingsListItemsListItemMediaImg);
//   biddingsListItemsListItemInfo.appendChild(biddingsListItemsListItemInfoTitle);
//   biddingsListItemsListItemInfo.appendChild(biddingsListItemsListItemInfoBid);
//   biddingsListItemsListItemInfo.appendChild(biddingsListItemsListItemInfoTime);
//   biddingsListItemsListItemActions.appendChild(
//     biddingsListItemsListItemActionsEdit
//   );
//   biddingsListItemsListItemActions.appendChild(
//     biddingsListItemsListItemActionsDelete
//   );
//   biddingsListItemsListItemActions.appendChild(
//     biddingsListItemsListItemActionsView
//   );

//   return biddingsSection;
// }
