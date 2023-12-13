import { getProfile } from "../api/profile/profile.js";
import { checkLoggedIn } from "../auth/state.js";
import * as storage from "../storage/storage.js";

// Mock localStorage
jest.mock("../storage/storage.js", () => ({ loadToken: jest.fn() }));

describe("checkLoggedIn", () => {
  // Should return true if user is logged in
  it("return true if user is logged in", () => {
    storage.loadToken.mockReturnValue({ name: getProfile().name });

    const result = checkLoggedIn();

    expect(result).toBe(true);
    expect(storage.loadToken).toHaveBeenCalledWith("profile");
  });

  // Should return false if user is not logged in
  it("return false if user is not logged in", () => {
    storage.loadToken.mockReturnValue(null);

    const result = checkLoggedIn();

    expect(result).toBe(false);
    expect(storage.loadToken).toHaveBeenCalledWith("profile");
  });

  // Should return false if user profile is undefined
  it("return false if user profile is undefined", () => {
    storage.loadToken.mockReturnValue(undefined);

    const result = checkLoggedIn();

    expect(result).toBe(false);
    expect(storage.loadToken).toHaveBeenCalledWith("profile");
  });
});
