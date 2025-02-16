import KerbinTime from "./modules/KerbinTime.js";
import { isInt, roundToN } from "./modules/utils.js";


document.addEventListener("DOMContentLoaded", function() {

    const orbitTypeInput = document.getElementById("orbit-type");
    const yearsInput = document.getElementById("years");
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    const timeText = document.getElementById("time");
    const nbSatInput = document.getElementById("nbSat");

    function updateTimeText() {
        if (Number(nbSatInput.value) < 2) {
            timeText.innerText = "-y, -d, -h, -m, -s";
            return;
        }
        try {
            const kerbinTime = new KerbinTime(
                Number(yearsInput.value), 
                Number(daysInput.value), 
                Number(hoursInput.value), 
                Number(minutesInput.value), 
                Number(secondsInput.value)
            );
            timeText.innerText = kerbinTime.relayDeploymentPeriod(parseInt(nbSatInput.value)).toString();
            if (kerbinTime.isKerbisynchronous()) {
                orbitTypeInput.value = "kerbisynchronous";
            } else {
                orbitTypeInput.value = "custom";
            }
        } catch (e) {
            timeText.innerText = "-y, -d, -h, -m, -s";
        }
    }

    function canBeDowned(input) {
        if (input.value > 0) {
            return true;
        }
        switch (input) {
            case minutesInput:
                return canBeDowned(hoursInput);
            case hoursInput:
                return canBeDowned(daysInput);
            case daysInput:
                return canBeDowned(yearsInput);
            default:
                break;
        }
        return false;
    }

    function handleInputChange(input, inputUp, inputDown, max, maxDown) {
        if ((inputDown !== null) && !isInt(input.value)) {
            inputDown.value = Number(inputDown.value) + ((Number(input.value) - parseInt(input.value)) * maxDown);
            input.value = parseInt(input.value);
            inputDown.dispatchEvent(new Event("change"));
        }
        if (input.value >= max) {
            inputUp.value = Number(inputUp.value) + Math.floor(input.value / max);
            input.value = input.value % max;
            inputUp.dispatchEvent(new Event("change"));
        } else if (input.value < 0) {
            if ((inputUp !== null) && canBeDowned(inputUp)) {
                inputUp.value -= Math.ceil(Math.abs(input.value) / max);
                input.value = max - Math.abs(input.value) % max;
                inputUp.dispatchEvent(new Event("change"));
            } else {
                input.value = 0;
            }
        }
        updateTimeText();
    }

    function setKerbisynchronous() {
        yearsInput.value = 0;
        daysInput.value = 0;
        hoursInput.value = 0;
        minutesInput.value = 0;
        secondsInput.value = KerbinTime.kerbisynchronous().valueOf();
        secondsInput.dispatchEvent(new Event("change"));
    }

    orbitTypeInput.addEventListener("change", function() {
        switch (orbitTypeInput.value) {
            case "kerbisynchronous":
                setKerbisynchronous();
                break;
            case "custom":
                break;
            default:
                break;
        }
    });

    secondsInput.addEventListener("change", function() {
        secondsInput.value = roundToN(Number(secondsInput.value), 3);
        handleInputChange(secondsInput, minutesInput, null, KerbinTime.MAX_SECONDS, null);
    });

    minutesInput.addEventListener("change", function() {
        handleInputChange(minutesInput, hoursInput, secondsInput, KerbinTime.MAX_MINUTES, KerbinTime.MAX_SECONDS);
    });

    hoursInput.addEventListener("change", function() {
        handleInputChange(hoursInput, daysInput, minutesInput, KerbinTime.MAX_HOURS, KerbinTime.MAX_MINUTES);
    });

    daysInput.addEventListener("change", function() {
        handleInputChange(daysInput, yearsInput, hoursInput, KerbinTime.MAX_DAYS, KerbinTime.MAX_HOURS);
    });

    yearsInput.addEventListener("change", function() {
        handleInputChange(yearsInput, null, daysInput, Infinity, KerbinTime.MAX_DAYS);
    })

    nbSatInput.addEventListener("change", function() {
        updateTimeText();
    });

    updateTimeText();
});