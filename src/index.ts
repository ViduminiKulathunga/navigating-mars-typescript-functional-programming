import { input } from "@inquirer/prompts";
import { createRover, Rover, moveForward, formatRover } from "./rover";

function displayRover(r: Rover): void {
  const format = formatRover(r);
  console.log(format);
}

function getInputFromUser(prompt: string): Promise<string> {
  const result = input({ message: prompt });
  return result;
}

async function main() {
  const prompt =
    "Choose a Command: Move (F)orward, Move (B)ackward, Turn (L)eft, Turn (R)ight, or (Q)uit\n";
  const rover = createRover();

  console.clear();
  displayRover(moveForward(rover));

  const userInput = await getInputFromUser(prompt);
  console.log(userInput);
}

main();
