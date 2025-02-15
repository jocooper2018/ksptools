class KerbinTime {

    static MAX_SECONDS = 60;
    static MAX_MINUTES = 60;
    static MAX_HOURS = 6;
    static MAX_DAYS = 426;
    static MINUTE_IN_SECONDS = KerbinTime.MAX_SECONDS;
    static HOUR_IN_SECONDS = KerbinTime.MINUTE_IN_SECONDS * KerbinTime.MAX_MINUTES;
    static DAY_IN_SECONDS = KerbinTime.HOUR_IN_SECONDS * KerbinTime.MAX_HOURS;
    static YEAR_IN_SECONDS = KerbinTime.DAY_IN_SECONDS * KerbinTime.MAX_DAYS;

    static kerbisynchronous() {
        return new KerbinTime(5, 59, 9.425)
    }

    #nbSeconds = 0;

    constructor(...args) {
        if ((args.length < 0) || (args.length > 5)) {
            throw new Error("Incorrect number of argument");
        }
        for (const arg of args) {
            if (isNaN(arg)) {
                throw new TypeError("All args must be a number");
            }
        }

        for (let index = 1; index <= args.length; index++) {
            const arg = args[args.length - index];
            switch (index) {
                case 1:
                    this.#nbSeconds += arg;
                    break;
                case 2:
                    this.#nbSeconds += arg * KerbinTime.MINUTE_IN_SECONDS;
                    break;
                case 3:
                    this.#nbSeconds += arg * KerbinTime.HOUR_IN_SECONDS;
                    break;
                case 4:
                    this.#nbSeconds += arg * KerbinTime.DAY_IN_SECONDS;
                    break;
                case 5:
                    this.#nbSeconds += arg * KerbinTime.YEAR_IN_SECONDS;
                default:
                    break;
            }
        }
    }

    toString() {
        let nbSeconds = this.#nbSeconds;
        const y = Math.floor(nbSeconds / KerbinTime.YEAR_IN_SECONDS);
        nbSeconds -= y * KerbinTime.YEAR_IN_SECONDS;
        const d = Math.floor(nbSeconds / KerbinTime.DAY_IN_SECONDS);
        nbSeconds -= d * KerbinTime.DAY_IN_SECONDS;
        const h = Math.floor(nbSeconds / KerbinTime.HOUR_IN_SECONDS);
        nbSeconds -= h * KerbinTime.HOUR_IN_SECONDS;
        const m = Math.floor(nbSeconds / KerbinTime.MINUTE_IN_SECONDS);
        nbSeconds -= m * KerbinTime.MINUTE_IN_SECONDS;
        const s = parseFloat(nbSeconds.toFixed(3));
        return `${y}y, ${d}d, ${h}h, ${m}m, ${s}s`;
    }

    valueOf() {
        return this.#nbSeconds;
    }
}

export default KerbinTime;