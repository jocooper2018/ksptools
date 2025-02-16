import KerbinTime from "../www/modules/KerbinTime";

test("Value of KerbinTime() === 0", () => {
    let kerbinTime = new KerbinTime();
    expect(kerbinTime.valueOf()).toBe(0);
});

test("Value of KerbinTime(0) === 0", () => {
    let kerbinTime = new KerbinTime(0);
    expect(kerbinTime.valueOf()).toBe(0);
});

test("Value of KerbinTime(1) === 1", () => {
    let kerbinTime = new KerbinTime(1);
    expect(kerbinTime.valueOf()).toBe(1);
});

test("Value of KerbinTime(30) === 30", () => {
    let kerbinTime = new KerbinTime(30);
    expect(kerbinTime.valueOf()).toBe(30);
});

test("Value of KerbinTime(60) === 60", () => {
    let kerbinTime = new KerbinTime(60);
    expect(kerbinTime.valueOf()).toBe(60);
});

test("Value of KerbinTime(200) === 200", () => {
    let kerbinTime = new KerbinTime(200);
    expect(kerbinTime.valueOf()).toBe(200);
});

test("Value of KerbinTime(1, 0) === 60", () => {
    let kerbinTime = new KerbinTime(1, 0);
    expect(kerbinTime.valueOf()).toBe(60);
});

test("Value of KerbinTime(1, 30) === 90", () => {
    let kerbinTime = new KerbinTime(1, 30);
    expect(kerbinTime.valueOf()).toBe(90);
});

test("Value of KerbinTime(0.5, 0) === 30", () => {
    let kerbinTime = new KerbinTime(0.5, 0);
    expect(kerbinTime.valueOf()).toBe(30);
});

test("Value of KerbinTime(1.5, 0) === 90", () => {
    let kerbinTime = new KerbinTime(1.5, 0);
    expect(kerbinTime.valueOf()).toBe(90);
});

test("Value of KerbinTime() === 0", () => {
    let kerbinTime = new KerbinTime(2, 0);
    expect(kerbinTime.valueOf()).toBe(120);
});

test("Value of KerbinTime(1, 0, 0) === 3600", () => {
    let kerbinTime = new KerbinTime(1, 0, 0);
    expect(kerbinTime.valueOf()).toBe(3600);
});

test("Value of KerbinTime(2, 0, 0) === 7200", () => {
    let kerbinTime = new KerbinTime(2, 0, 0);
    expect(kerbinTime.valueOf()).toBe(7200);
});

test("Value of KerbinTime(1, 1, 1) === 3661", () => {
    let kerbinTime = new KerbinTime(1, 1, 1);
    expect(kerbinTime.valueOf()).toBe(3661);
});

test("Value of KerbinTime(1, 2, 3) === 3723", () => {
    let kerbinTime = new KerbinTime(1, 2, 3);
    expect(kerbinTime.valueOf()).toBe(3723);
});

test("Value of KerbinTime(0.5, 0, 0) === 1800", () => {
    let kerbinTime = new KerbinTime(0.5, 0, 0);
    expect(kerbinTime.valueOf()).toBe(1800);
});

test("Value of KerbinTime(1.5, 0, 0) === 5400", () => {
    let kerbinTime = new KerbinTime(1.5, 0, 0);
    expect(kerbinTime.valueOf()).toBe(5400);
});

test("Value of KerbinTime(1, 0, 0, 0) === 21600", () => {
    let kerbinTime = new KerbinTime(1, 0, 0, 0);
    expect(kerbinTime.valueOf()).toBe(21600);
});

test("Value of KerbinTime(2, 0, 0, 0) === 43200", () => {
    let kerbinTime = new KerbinTime(2, 0, 0, 0);
    expect(kerbinTime.valueOf()).toBe(43200);
});

test("Value of KerbinTime(2, 3, 4, 5) === 54245", () => {
    let kerbinTime = new KerbinTime(2, 3, 4, 5);
    expect(kerbinTime.valueOf()).toBe(54245);
});

test("Value of KerbinTime(1, 0, 0, 0, 0) === 9201600", () => {
    let kerbinTime = new KerbinTime(1, 0, 0, 0, 0);
    expect(kerbinTime.valueOf()).toBe(9201600);
});


test("toString of KerbinTime() must be \"0y, 0d, 0h, 0m, 0s\"", () => {
    let kerbinTime = new KerbinTime();
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 0m, 0s");
});

test("toString of KerbinTime(0) must be \"0y, 0d, 0h, 0m, 0s\"", () => {
    let kerbinTime = new KerbinTime(0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 0m, 0s");
});

test("toString of KerbinTime(1) must be \"0y, 0d, 0h, 0m, 1s\"", () => {
    let kerbinTime = new KerbinTime(1);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 0m, 1s");
});

test("toString of KerbinTime(30) must be \"0y, 0d, 0h, 0m, 30s\"", () => {
    let kerbinTime = new KerbinTime(30);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 0m, 30s");
});

test("toString of KerbinTime(60) must be \"0y, 0d, 0h, 1m, 0s\"", () => {
    let kerbinTime = new KerbinTime(60);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 1m, 0s");
});

test("toString of KerbinTime(200) must be \"0y, 0d, 0h, 3m, 20s\"", () => {
    let kerbinTime = new KerbinTime(200);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 3m, 20s");
});

test("toString of KerbinTime(1, 0) must be \"0y, 0d, 0h, 1m, 0s\"", () => {
    let kerbinTime = new KerbinTime(1, 0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 1m, 0s");
});

test("toString of KerbinTime(1, 30) must be \"0y, 0d, 0h, 1m, 30s\"", () => {
    let kerbinTime = new KerbinTime(1, 30);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 1m, 30s");
});

test("toString of KerbinTime(90) must be \"0y, 0d, 0h, 1m, 30s\"", () => {
    let kerbinTime = new KerbinTime(90);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 1m, 30s");
});

test("toString of KerbinTime(2, 0) must be \"0y, 0d, 0h, 2m, 0s\"", () => {
    let kerbinTime = new KerbinTime(2, 0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 2m, 0s");
});

test("toString of KerbinTime(0.5, 0) must be \"0y, 0d, 0h, 0m, 30s\"", () => {
    let kerbinTime = new KerbinTime(0.5, 0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 0m, 30s");
});

test("toString of KerbinTime(1.5, 0) must be \"0y, 0d, 0h, 1m, 30s\"", () => {
    let kerbinTime = new KerbinTime(1.5, 0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 0h, 1m, 30s");
});

test("toString of KerbinTime(1, 0, 0) must be \"0y, 0d, 1h, 0m, 0s\"", () => {
    let kerbinTime = new KerbinTime(1, 0, 0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 0m, 0s");
});

test("toString of KerbinTime(3600) must be \"0y, 0d, 1h, 0m, 0s\"", () => {
    let kerbinTime = new KerbinTime(3600);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 0m, 0s");
});

test("toString of KerbinTime(2, 0, 0) must be \"0y, 0d, 2h, 0m, 0s\"", () => {
    let kerbinTime = new KerbinTime(2, 0, 0);
    expect(kerbinTime.toString()).toBe("0y, 0d, 2h, 0m, 0s");
});

test("toString of KerbinTime(7200) must be \"0y, 0d, 2h, 0m, 0s\"", () => {
    let kerbinTime = new KerbinTime(7200);
    expect(kerbinTime.toString()).toBe("0y, 0d, 2h, 0m, 0s");
});

test("toString of KerbinTime(1, 1, 1) must be \"0y, 0d, 1h, 1m, 1s\"", () => {
    let kerbinTime = new KerbinTime(1, 1, 1);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 1m, 1s");
});

test("toString of KerbinTime(3661) must be \"0y, 0d, 1h, 1m, 1s\"", () => {
    let kerbinTime = new KerbinTime(3661);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 1m, 1s");
});

test("toString of KerbinTime(1, 2, 3) must be \"0y, 0d, 1h, 2m, 3s\"", () => {
    let kerbinTime = new KerbinTime(1, 2, 3);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 2m, 3s");
});

test("toString of KerbinTime(3723) must be \"0y, 0d, 1h, 2m, 3s\"", () => {
    let kerbinTime = new KerbinTime(3723);
    expect(kerbinTime.toString()).toBe("0y, 0d, 1h, 2m, 3s");
});

test("toString of KerbinTime(1, 0, 0, 0) must be \"0y, 1d, 0h, 0m, 0s\"", () => {
    let kerbinTime = new KerbinTime(1, 0, 0, 0);
    expect(kerbinTime.toString()).toBe("0y, 1d, 0h, 0m, 0s");
});

test("toString of KerbinTime(2, 0, 0, 0) must be \"0y, 2d, 0h, 0m, 0s\"", () => {
    let kerbinTime = new KerbinTime(2, 0, 0, 0);
    expect(kerbinTime.toString()).toBe("0y, 2d, 0h, 0m, 0s");
});

test("toString of KerbinTime(2, 3, 4, 5) must be \"0y, 2d, 3h, 4m, 5s\"", () => {
    let kerbinTime = new KerbinTime(2, 3, 4, 5);
    expect(kerbinTime.toString()).toBe("0y, 2d, 3h, 4m, 5s");
});

test("toString of KerbinTime(1, 0, 0, 0, 0) must be \"1y, 0d, 0h, 0m, 0s\"", () => {
    let kerbinTime = new KerbinTime(1, 0, 0, 0, 0);
    expect(kerbinTime.toString()).toBe("1y, 0d, 0h, 0m, 0s");
});

test("toString of kerbisynchronous must be \"0y, 0d, 5h, 59m, 9.425s\"", () => {
    let kerbinTime = KerbinTime.kerbisynchronous();
    expect(kerbinTime.toString()).toBe("0y, 0d, 5h, 59m, 9.425s");
});


test("relayDeploymentPeriod value with n = 3 and KerbinTime(3) must be 2", () => {
    let kerbinTime = new KerbinTime(3);
    let n = 3;
    let result = kerbinTime.relayDeploymentPeriod(n);
    expect(result.valueOf()).toBe(2)
});

test("relayDeploymentPeriod toString with n = 3 and KerbinTime(3) must be \"0y, 0d, 0h, 0m, 2s\"", () => {
    let kerbinTime = new KerbinTime(3);
    let n = 3;
    let result = kerbinTime.relayDeploymentPeriod(n);
    expect(result.toString()).toBe("0y, 0d, 0h, 0m, 2s")
});



test("kerbisynchronous relayDeploymentPeriod value with n = 3 must be 14366.283", () => {
    const kerbinTime = KerbinTime.kerbisynchronous();
    const n = 3;
    const result = kerbinTime.relayDeploymentPeriod(n);
    expect(result.valueOf()).toBeCloseTo(14366.283, 3)
});

test("kerbisynchronous relayDeploymentPeriod toString with n = 3 must be \"0y, 0d, 3h, 59m, 26.283s\"", () => {
    const kerbinTime = KerbinTime.kerbisynchronous();
    const n = 3;
    const result = kerbinTime.relayDeploymentPeriod(n);
    expect(result.toString()).toBe("0y, 0d, 3h, 59m, 26.283s", 3)
});


test("relayDeploymentPeriod value with n = 4 and KerbinTime(4) must be 3", () => {
    let kerbinTime = new KerbinTime(4);
    let n = 4;
    let result = kerbinTime.relayDeploymentPeriod(n);
    expect(result.valueOf()).toBe(3)
});

test("relayDeploymentPeriod toString with n = 4 and KerbinTime(4) must be 2", () => {
    let kerbinTime = new KerbinTime(4);
    let n = 4;
    let result = kerbinTime.relayDeploymentPeriod(n);
    expect(result.toString()).toBe("0y, 0d, 0h, 0m, 3s")
});



test("kerbisynchronous value relayDeploymentPeriod with n = 4 must be 16162.069", () => {
    const kerbinTime = KerbinTime.kerbisynchronous();
    const n = 4;
    const result = kerbinTime.relayDeploymentPeriod(n);
    expect(result.valueOf()).toBeCloseTo(16162.069, 3)
});

test("kerbisynchronous toString relayDeploymentPeriod with n = 4 must be \"0y, 0d, 4h, 29m, 22.069s\"", () => {
    const kerbinTime = KerbinTime.kerbisynchronous();
    const n = 4;
    const result = kerbinTime.relayDeploymentPeriod(n);
    expect(result.toString()).toBe("0y, 0d, 4h, 29m, 22.069s")
});


test("kerbisynchronous is kerbisynchronous", () => {
    const kerbinTime = KerbinTime.kerbisynchronous();
    expect(kerbinTime.isKerbisynchronous()).toBe(true);
});

test("KerbinTime() is not kerbisynchronous", () => {
    const kerbinTime = new KerbinTime();
    expect(kerbinTime.isKerbisynchronous()).toBe(false);
});

test("KerbinTime(1, 2, 3, 4) is not kerbisynchronous", () => {
    const kerbinTime = new KerbinTime(1, 2, 3, 4);
    expect(kerbinTime.isKerbisynchronous()).toBe(false);
});

