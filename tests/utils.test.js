import { isInt } from "../html/modules/utils";


test("1 is an int", () => {
    expect(isInt(1)).toBe(true);
})

test("1.1 is not an int", () => {
    expect(isInt(1.1)).toBe(false);
})

test("\"azerty\" is not an int", () => {
    expect(isInt("azerty")).toBe(false);
})

test("-1 is an int", () => {
    expect(isInt(-1)).toBe(true);
})

test("\"1\" is not an int", () => {
    expect(isInt("1")).toBe(false);
})

