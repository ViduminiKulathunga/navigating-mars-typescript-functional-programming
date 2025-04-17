import {
  Command,
  moveBackward,
  moveForward,
  Rover,
  turnLeft,
  turnRight,
  doNothing,
} from "./rover";

export function convertStringToCommand(s: string): Command {
  switch (s?.toLowerCase().trim()) {
    case "f":
      return "MoveForward";
    case "b":
      return "MoveBackward";
    case "l":
      return "TurnLeft";
    case "r":
      return "TurnRight";
    case "q":
      return "Quit";
    default:
      return "Unknown";
  }
}
type Action = (r: Rover) => Rover;
export function convertCommandToAction(c: Command): Action {
  switch (c) {
    case "MoveForward":
      return moveForward;
    case "MoveBackward":
      return moveBackward;
    case "TurnLeft":
      return turnLeft;
    case "TurnRight":
      return turnRight;
    case "Quit":
      return doNothing;
    case "Unknown":
      return doNothing;
  }
}
