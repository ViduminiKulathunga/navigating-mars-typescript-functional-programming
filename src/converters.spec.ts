import { convertStringToCommand, convertCommandToAction } from "./converts";
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
  describe("commandToActions", () => {
    it.each([
      ["MoveForward" as Command, "moveForward"],
      ["MoveBackward" as Command, "moveBackward"],
      ["TurnLeft" as Command, "turnLeft"],
      ["TurnRight" as Command, "turnRight"],
      ["Quit" as Command, "doNothing"],
      ["Unknown" as Command, "doNothing"],
    ])(
      "and command is %s, then function called %s is return",
      (command: Command, expectedFunctionName: string) => {
        const result = convertCommandToAction(command);

        expect(result.name).toBe(expectedFunctionName);
      }
    );
  });
});
