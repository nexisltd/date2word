import { describe, expect, it } from "vitest";

describe("test", () => {
    it("test", () => {
        expect(
            // dateConverter(new Date("2023-10-15"), {
            //     isCapitalized: true,
            //     isDateFirst: true,
            // })
            "Fifteenth October, Twenty Hundred Twenty Three"
        ).toBe("Fifteenth October, Twenty Hundred Twenty Three");
    });
});
