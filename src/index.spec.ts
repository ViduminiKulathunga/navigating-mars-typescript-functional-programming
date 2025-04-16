import { add } from ".";

describe("checking if addition works", () => {
  it("2+2 does equal 4", () => {
    expect(add(2, 2)).toBe(4);
  });
});
