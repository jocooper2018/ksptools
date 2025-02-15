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

test('Value of KerbinTime(2, 0, 0, 0) === 0', () => {
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

