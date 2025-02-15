import KerbinTime from '../html/modules/KerbinTime';

test('Value of KerbinTime() === 0', () => {
    let kerbinTime = new KerbinTime();
    expect(kerbinTime.valueOf()).toBe(0);
});

test('Value of KerbinTime(0) === 0', () => {
    let kerbinTime = new KerbinTime(0);
    expect(kerbinTime.valueOf()).toBe(0);
});

test('Value of KerbinTime(1) === 1', () => {
    let kerbinTime = new KerbinTime(1);
    expect(kerbinTime.valueOf()).toBe(1);
});

test('Value of KerbinTime(30) === 30', () => {
    let kerbinTime = new KerbinTime(30);
    expect(kerbinTime.valueOf()).toBe(30);
});

test('Value of KerbinTime(60) === 60', () => {
    let kerbinTime = new KerbinTime(60);
    expect(kerbinTime.valueOf()).toBe(60);
});

test('Value of KerbinTime(200) === 200', () => {
    let kerbinTime = new KerbinTime(200);
    expect(kerbinTime.valueOf()).toBe(200);
});

test('Value of KerbinTime(1, 0) === 60', () => {
    let kerbinTime = new KerbinTime(1, 0);
    expect(kerbinTime.valueOf()).toBe(60);
});

test('Value of KerbinTime(1, 30) === 90', () => {
    let kerbinTime = new KerbinTime(1, 30);
    expect(kerbinTime.valueOf()).toBe(90);
});

test('Value of KerbinTime() === 0', () => {
    let kerbinTime = new KerbinTime(2, 0);
    expect(kerbinTime.valueOf()).toBe(120);
});

test('Value of KerbinTime(1, 0, 0) === 3600', () => {
    let kerbinTime = new KerbinTime(1, 0, 0);
    expect(kerbinTime.valueOf()).toBe(3600);
});

test('Value of KerbinTime(2, 0, 0) === 7200', () => {
    let kerbinTime = new KerbinTime(2, 0, 0);
    expect(kerbinTime.valueOf()).toBe(7200);
});

test('Value of KerbinTime(1, 1, 1) === 3661', () => {
    let kerbinTime = new KerbinTime(1, 1, 1);
    expect(kerbinTime.valueOf()).toBe(3661);
});

test('Value of KerbinTime(1, 2, 3) === 3723', () => {
    let kerbinTime = new KerbinTime(1, 2, 3);
    expect(kerbinTime.valueOf()).toBe(3723);
});

test('Value of KerbinTime(1, 0, 0, 0) === 21600', () => {
    let kerbinTime = new KerbinTime(1, 0, 0, 0);
    expect(kerbinTime.valueOf()).toBe(21600);
});

test('Value of KerbinTime(2, 0, 0, 0) === 43200', () => {
    let kerbinTime = new KerbinTime(2, 0, 0, 0);
    expect(kerbinTime.valueOf()).toBe(43200);
});

test('Value of KerbinTime(2, 3, 4, 5) === 54245', () => {
    let kerbinTime = new KerbinTime(2, 3, 4, 5);
    expect(kerbinTime.valueOf()).toBe(54245);
});

test('Value of KerbinTime(1, 0, 0, 0, 0) === 9201600', () => {
    let kerbinTime = new KerbinTime(1, 0, 0, 0, 0);
    expect(kerbinTime.valueOf()).toBe(9201600);
});

test('toString of KerbinTime()', () => {
    let kerbinTime = new KerbinTime();
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 0m, 0s");
});

test('toString of KerbinTime(0)', () => {
    let kerbinTime = new KerbinTime(0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 0m, 0s");
});

test('toString of KerbinTime(1)', () => {
    let kerbinTime = new KerbinTime(1);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 0m, 1s");
});

test('toString of KerbinTime(30)', () => {
    let kerbinTime = new KerbinTime(30);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 0m, 30s");
});

test('toString of KerbinTime(60)', () => {
    let kerbinTime = new KerbinTime(60);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 1m, 0s");
});

test('toString of KerbinTime(200)', () => {
    let kerbinTime = new KerbinTime(200);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 3m, 20s");
});

test('toString of KerbinTime(1, 0)', () => {
    let kerbinTime = new KerbinTime(1, 0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 1m, 0s");
});

test('toString of KerbinTime(1, 30)', () => {
    let kerbinTime = new KerbinTime(1, 30);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 1m, 30s");
});

test('toString of KerbinTime(90)', () => {
    let kerbinTime = new KerbinTime(90);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 1m, 30s");
});

test('toString of KerbinTime(2, 0)', () => {
    let kerbinTime = new KerbinTime(2, 0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 2m, 0s");
});

test('toString of KerbinTime(1, 0, 0)', () => {
    let kerbinTime = new KerbinTime(1, 0, 0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 0m, 0s");
});

test('toString of KerbinTime(3600)', () => {
    let kerbinTime = new KerbinTime(3600);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 0m, 0s");
});

test('toString of KerbinTime(2, 0, 0)', () => {
    let kerbinTime = new KerbinTime(2, 0, 0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 2h, 0m, 0s");
});

test('toString of KerbinTime(7200)', () => {
    let kerbinTime = new KerbinTime(7200);
    expect(kerbinTime.toString()).toBe("0y, 0d, 2h, 0m, 0s");
});

test('toString of KerbinTime(1, 1, 1)', () => {
    let kerbinTime = new KerbinTime(1, 1, 1);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 1m, 1s");
});

test('toString of KerbinTime(3661)', () => {
    let kerbinTime = new KerbinTime(3661);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 1m, 1s");
});

test('toString of KerbinTime(1, 2, 3)', () => {
    let kerbinTime = new KerbinTime(1, 2, 3);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 2m, 3s");
});

test('toString of KerbinTime(3723)', () => {
    let kerbinTime = new KerbinTime(3723);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 2m, 3s");
});

test('toString of KerbinTime(1, 0, 0, 0)', () => {
    let kerbinTime = new KerbinTime(1, 0, 0, 0);
    expect(kerbinTime.toString()).toBe("0y, 1d, 0h, 0m, 0s");
});

test('toString of KerbinTime(2, 0, 0, 0)', () => {
    let kerbinTime = new KerbinTime(2, 0, 0, 0);
    expect(kerbinTime.toString()).toBe("0y, 2d, 0h, 0m, 0s");
});

test('toString of KerbinTime(2, 3, 4, 5)', () => {
    let kerbinTime = new KerbinTime(2, 3, 4, 5);
    expect(kerbinTime.toString()).toBe("0y, 2d, 3h, 4m, 5s");
});

test('toString of KerbinTime(1, 0, 0, 0, 0)', () => {
    let kerbinTime = new KerbinTime(1, 0, 0, 0, 0);
    expect(kerbinTime.toString()).toBe("1y, 0d, 0h, 0m, 0s");
});