import { convertStringToCommand } from "./converts";
import { Command } from "./rover";

describe("converts", () => {
  describe("stringCommand", () => {
    it.each([
      ["l", "TurnLeft" as Command],
      ["L", "TurnLeft" as Command],
      ["r", "TurnRight" as Command],
      ["R", "TurnRight" as Command],
      ["f", "MoveForward" as Command],
      ["F", "MoveForward" as Command],
      ["b", "MoveBackward" as Command],
      ["B", "MoveBackward" as Command],
      ["q", "Quit" as Command],
      ["Q", "Quit" as Command],
      ["apples", "Unknown" as Command],
      ["  f   ", "MoveForward" as Command],
      [null, "Unknown" as Command],
    ])("and the input is '%s', the %s is required", (input, expected) => {
      const result = convertStringToCommand(input!);

      expect(result).toBe(expected);
    });
  });
});
