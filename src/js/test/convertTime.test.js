import { formatEndsAt } from "../utils/formatting/formatEndsAt";

describe("Convert endtime from ISO to locale date and time string", () => {
  test("should return a string", () => {
    const endsAt = new Date().toISOString();
    const result = formatEndsAt(endsAt);
    expect(typeof result).toBe("string");
  });

  test("should return a string with the correct format", () => {
    const endsAt = new Date().toISOString();
    const result = formatEndsAt(endsAt);
    expect(result).toMatch(/\d+d \d+h \d+m \d+s/);
  });
});
