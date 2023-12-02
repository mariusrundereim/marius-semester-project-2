import { searchListings } from "../../api/listings/searchListing.mjs";
import { searchForm } from "../../ui/listings/searchForm.mjs";
import { displaySearchListing } from "../../listeners/listings/searchListing.mjs";
// import { displaySearchListing } from "../../listeners/listings/searchListing.mjs";
searchListings();
searchForm();
displaySearchListing();
// displaySearchListing();
