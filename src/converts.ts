import { Command } from "./rover";

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
