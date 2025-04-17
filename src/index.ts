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

function compose<A, B, C>(f: (a: A) => B, g: (b: B) => C): (a: A) => C {
  return (input: A) => g(f(input));
}

async function main() {
  const prompt =
    "Choose a Command: Move (F)orward, Move (B)ackward, Turn (L)eft, Turn (R)ight, or (Q)uit\n";

  let rover = createRover();
  let command: Command = "Unknown";

  while (command != "Quit") {
    console.clear();
    displayRover(rover);

    const inputToAction = compose(
      convertStringToCommand,
      convertCommandToAction
    );

    const userInput = await getInputFromUser(prompt);
    command = convertStringToCommand(userInput);

    const action = inputToAction(userInput);
    rover = action(rover);
  }
}

main();

const square = (a: number) => a * a;
const negate = (a: number) => -a;

const negatedSquared = compose(square, negate);
