import { input } from "@inquirer/prompts";
import { createRover, Rover, formatRover, Command } from "./rover";
import { convertStringToCommand, convertCommandToAction } from "./converts";

function displayRover(r: Rover): void {
  const format = formatRover(r);
  console.log(format);
}

function getInputFromUser(prompt: string): Promise<string> {
  const result = input({ message: prompt });
  return result;
}

async function loop(rover: Rover, command: Command) {
  const prompt =
    "Choose a Command: Move (F)orward, Move (B)ackward, Turn (L)eft, Turn (R)ight, or (Q)uit\n";

  if (command === "Quit") {
    return;
  }
  console.clear();
  displayRover(rover);
  const userInput = await getInputFromUser(prompt);
  const newCommand = convertStringToCommand(userInput);
  const action = convertCommandToAction(newCommand);
  loop(action(rover), newCommand);
}

async function main() {
  const rover = createRover();
  const initialCommand: Command = "Unknown";
  loop(rover, initialCommand);
}

main();
