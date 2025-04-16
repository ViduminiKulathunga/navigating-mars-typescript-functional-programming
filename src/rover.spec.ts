import {
  createRover,
  Rover,
  Direction,
  moveForward,
  moveBackward,
  turnLeft,
  turnRight,
} from "./rover";

describe("rover", () => {
  describe("creating", () => {
    it("When creating, rover should be at 0,0 facing North", () => {
      const r = createRover();

      expect(r.x).toBe(0);
      expect(r.y).toBe(0);
      expect(r.direction).toBe("North");
    });
  });

  describe("moveForward", () => {
    it("When facing North, rover Y increases by 1", () => {
      const rover: Rover = createRoverFacing("North");

      const result = moveForward(rover);
      expect(result.x).toBe(rover.x);
      expect(result.y).toBe(rover.y + 1);
      expect(result.direction).toBe(rover.direction);
    });

    it("When facing South, rover Y decrease by 1", () => {
      const rover: Rover = createRoverFacing("South");

      const result = moveForward(rover);
      expect(result.x).toBe(rover.x);
      expect(result.y).toBe(rover.y - 1);
      expect(result.direction).toBe(rover.direction);
    });

    it("When facing East, rover X increase by 1", () => {
      const rover: Rover = createRoverFacing("East");

      const result = moveForward(rover);
      expect(result.x).toBe(rover.x + 1);
      expect(result.y).toBe(rover.y);
      expect(result.direction).toBe(rover.direction);
    });

    it("When facing West, rover X decrease by 1", () => {
      const rover: Rover = createRoverFacing("West");

      const result = moveForward(rover);
      expect(result.x).toBe(rover.x - 1);
      expect(result.y).toBe(rover.y);
      expect(result.direction).toBe(rover.direction);
    });
  });

  describe("moveBackward", () => {
    it("When facing North, rover Y decrease by 1", () => {
      const rover: Rover = createRoverFacing("North");

      const result = moveBackward(rover);
      expect(result.x).toBe(rover.x);
      expect(result.y).toBe(rover.y - 1);
      expect(result.direction).toBe(rover.direction);
    });

    it("When facing South, rover Y increase by 1", () => {
      const rover: Rover = createRoverFacing("South");

      const result = moveBackward(rover);
      expect(result.x).toBe(rover.x);
      expect(result.y).toBe(rover.y + 1);
      expect(result.direction).toBe(rover.direction);
    });

    it("When facing East, rover X decrease by 1", () => {
      const rover: Rover = createRoverFacing("East");

      const result = moveBackward(rover);
      expect(result.x).toBe(rover.x - 1);
      expect(result.y).toBe(rover.y);
      expect(result.direction).toBe(rover.direction);
    });

    it("When facing West, rover Y increase by 1", () => {
      const rover: Rover = createRoverFacing("West");

      const result = moveBackward(rover);
      expect(result.x).toBe(rover.x + 1);
      expect(result.y).toBe(rover.y);
      expect(result.direction).toBe(rover.direction);
    });
  });

  describe("TurnLeft", () => {
    it.each([
      ["North", "West"] as Direction[],
      ["West", "South"] as Direction[],
      ["South", "East"] as Direction[],
      ["East", "North"] as Direction[],
    ])(
      "Where facing %s, rover turn %s",
      (starting: Direction, expected: Direction) => {
        const rover: Rover = createRoverFacing(starting);

        const result = turnLeft(rover);
        expect(result.x).toBe(rover.x);
        expect(result.y).toBe(rover.y);
        expect(result.direction).toBe(expected);
      }
    );
  });

  describe("TurnRight", () => {
    it.each([
      ["North", "East"] as Direction[],
      ["East", "South"] as Direction[],
      ["South", "West"] as Direction[],
      ["West", "North"] as Direction[],
    ])(
      "Where facing %s, rover turn %s",
      (starting: Direction, expected: Direction) => {
        const rover: Rover = createRoverFacing(starting);

        const result = turnRight(rover);
        expect(result.x).toBe(rover.x);
        expect(result.y).toBe(rover.y);
        expect(result.direction).toBe(expected);
      }
    );
  });

  function createRoverFacing(direction: Direction): Rover {
    return { x: 0, y: 0, direction };
  }
});
