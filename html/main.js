import KerbinTime from "./modules/KerbinTime.js";


document.addEventListener("DOMContentLoaded", function() {

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
        timeText.innerText = new KerbinTime(
            Number(yearsInput.value), 
            Number(daysInput.value), 
            Number(hoursInput.value), 
            Number(minutesInput.value), 
            Number(secondsInput.value)
        ).relayDeploymentPeriod(parseInt(nbSatInput.value)).toString();
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

    function handleInputChange(input1, input2, max) {
        if (input1.value >= max) {
            input2.value = Number(input2.value) + Math.floor(input1.value / max);
            input1.value = input1.value % max;
        } else if (input1.value < 0) {
            if (canBeDowned(input2)) {
                input2.value -= Math.ceil(Math.abs(input1.value) / max);
                input1.value = max - Math.abs(input1.value) % max;
            } else {
                input1.value = 0
            }
        }
        input2.dispatchEvent(new Event("change"));
        updateTimeText();
    }

    secondsInput.addEventListener("change", function() {
        handleInputChange(secondsInput, minutesInput, KerbinTime.MAX_SECONDS);
    });

    minutesInput.addEventListener("change", function() {
        handleInputChange(minutesInput, hoursInput, KerbinTime.MAX_MINUTES);
    });

    hoursInput.addEventListener("change", function() {
        handleInputChange(hoursInput, daysInput, KerbinTime.MAX_HOURS);
    });

    daysInput.addEventListener("change", function() {
        handleInputChange(daysInput, yearsInput, KerbinTime.MAX_DAYS);
    });

    nbSatInput.addEventListener("change", function() {
        updateTimeText();
    });

    updateTimeText();
});