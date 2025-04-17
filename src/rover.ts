//Directions = North, South, East, West
export type Direction = "North" | "South" | "East" | "West";

//Commands = Move Forward or Move Backward or Turn Left or Turn Right or Quit
export type Command =
  | "MoveForward"
  | "MoveBackward"
  | "TurnLeft"
  | "TurnRight"
  | "Quit"
  | "Unknown";

//Rover = has an X and Y and a Direction
export type Rover = {
  x: number;
  y: number;
  direction: Direction;
};

export function createRover(): Rover {
  return { x: 0, y: 0, direction: "North" };
}

export function moveForward(r: Rover): Rover {
  switch (r.direction) {
    case "North":
      return { ...r, y: r.y + 1 };
    case "South":
      return { ...r, y: r.y - 1 };
    case "East":
      return { ...r, x: r.x + 1 };
    case "West":
      return { ...r, x: r.x - 1 };
  }
}

export function moveBackward(r: Rover): Rover {
  switch (r.direction) {
    case "North":
      return { ...r, y: r.y - 1 };
    case "South":
      return { ...r, y: r.y + 1 };
    case "East":
      return { ...r, x: r.x - 1 };
    case "West":
      return { ...r, x: r.x + 1 };
  }
}

export function turnLeft(r: Rover): Rover {
  switch (r.direction) {
    case "North":
      return { ...r, direction: "West" };
    case "West":
      return { ...r, direction: "South" };
    case "South":
      return { ...r, direction: "East" };
    case "East":
      return { ...r, direction: "North" };
  }
}

export function turnRight(r: Rover): Rover {
  switch (r.direction) {
    case "North":
      return { ...r, direction: "East" };
    case "East":
      return { ...r, direction: "South" };
    case "South":
      return { ...r, direction: "West" };
    case "West":
      return { ...r, direction: "North" };
  }
}

export function doNothing(r: Rover): Rover {
  return r;
}

export function formatRover(r: Rover): string {
  return `Rover is at (${r.x}, ${r.y}) facing ${r.direction}`;
}
