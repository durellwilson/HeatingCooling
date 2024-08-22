let actualTemp = 75;
let desiredTemp = 72;

if (actualTemp > desiredTemp) {
    console.log("Run A/C");
} else if (actualTemp < desiredTemp) {
    console.log("Run heat");
} else {
    console.log("Standby");
}

let tempCelsius = 25;
let targetUnit = "F";

switch (targetUnit) {
    case "C":
        console.log(tempCelsius);
        break;
    case "F":
        console.log((tempCelsius * 9/5) + 32);
        break;
    case "K":
        console.log(tempCelsius + 273.15);
        break;
    default:
        console.log("Invalid unit specified.");
}