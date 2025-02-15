class KerbinTime {

    static MAX_SECONDS = 60;
    static MAX_MINUTES = 60;
    static MAX_HOURS = 6;
    static MAX_DAYS = 426;
    static MINUTE_IN_SECONDS = KerbinTime.MAX_SECONDS;
    static HOUR_IN_SECONDS = KerbinTime.MINUTE_IN_SECONDS * KerbinTime.MAX_MINUTES;
    static DAY_IN_SECONDS = KerbinTime.HOUR_IN_SECONDS * KerbinTime.MAX_HOURS;
    static YEAR_IN_SECONDS = KerbinTime.DAY_IN_SECONDS * KerbinTime.MAX_DAYS;

    #nbSeconds = 0;

    constructor(...args) {
        if ((args.length < 0) || (args.length > 4)) {
            throw new Error("Incorrect number of argument");
        }
        for (const arg of args) {
            if (isNaN(arg)) {
                throw new TypeError("All args must be a number");
            }
        }
    }

    toString() {
        return `KerbinTime(${this.#nbSeconds})`;
    }

    valueOf() {
        return this.#nbSeconds;
    }
}

export default KerbinTime;