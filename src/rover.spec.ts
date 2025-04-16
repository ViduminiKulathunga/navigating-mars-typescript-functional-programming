import { createRover, Rover, Direction, moveForward } from "./rover";

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

    function createRoverFacing(direction: Direction): Rover {
      return { x: 0, y: 0, direction };
    }
  });
});
