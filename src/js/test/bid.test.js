import { bidOnListing } from "../listeners/listings/bidList.js";

describe("bidOnListing", () => {
  test("should be a function", () => {
    expect(typeof bidOnListing).toBe("function");
  });
});
