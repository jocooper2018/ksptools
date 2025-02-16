export function isInt(value) {
    return !isNaN(value) && parseInt(value) === value;
}

export function roundToN(value, n) {
    if (isNaN(value)) {
        throw new TypeError("value must be a number");
    }
    if (!isInt(n)) {
        throw new TypeError("n must be a number");
    }
    return parseFloat(value.toFixed(n));
}