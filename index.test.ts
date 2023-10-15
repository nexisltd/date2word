import { describe, expect, it } from "vitest";
import dateConverter from "./src";

describe("test", () => {
  it("test", () => {
    expect(
      dateConverter(new Date("2023-10-15"), {
        isCapitalized: true,
        isDateFirst: true,
      })
    ).toBe("Fifteenth October, Twenty Hundred Twenty Three ");
  });
});
