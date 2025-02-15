export function isInt(value) {
    return !isNaN(value) && parseInt(value) === value;
}