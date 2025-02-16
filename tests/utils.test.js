import { isInt, roundToN } from "../docs/modules/utils";


test("1 is an int", () => {
    expect(isInt(1)).toBe(true);
});

test("1.1 is not an int", () => {
    expect(isInt(1.1)).toBe(false);
});

test("\"azerty\" is not an int", () => {
    expect(isInt("azerty")).toBe(false);
});

test("-1 is an int", () => {
    expect(isInt(-1)).toBe(true);
});

test("\"1\" is not an int", () => {
    expect(isInt("1")).toBe(false);
});

test("null is not an int", () => {
    expect(isInt(null)).toBe(false);
});

test("undefined is not an int", () => {
    expect(isInt(undefined)).toBe(false);
});


test("roundToN on value = 1 and n = 3 must return 1", () => {
    expect(roundToN(1, 3)).toBe(1);
});

test("roundToN on value = 1.00000000001 and n = 3 must return 1", () => {
    expect(roundToN(1.00000000001, 3)).toBe(1);
});

test("roundToN on value = 9.4249999 and n = 3 must return 9.425", () => {
    expect(roundToN(9.4249999, 3)).toBe(9.425);
});

test("roundToN on value = 123.4 and n = 3 must return 123.4", () => {
    expect(roundToN(123.4, 3)).toBe(123.4);
});