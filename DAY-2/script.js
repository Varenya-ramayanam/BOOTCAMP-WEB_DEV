// Temperature Converter using Functions, Scope, and Closures
function createTemperatureConverter(unitFrom) {
    return function (temperature, unitTo) {
        if (unitFrom === "Celsius" && unitTo === "Fahrenheit") {
            return (temperature * 9 / 5) + 32;
        } else if (unitFrom === "Celsius" && unitTo === "Kelvin") {
            return temperature + 273.15;
        } else if (unitFrom === "Fahrenheit" && unitTo === "Celsius") {
            return (temperature - 32) * 5 / 9;
        } else if (unitFrom === "Fahrenheit" && unitTo === "Kelvin") {
            return ((temperature - 32) * 5 / 9) + 273.15;
        } else if (unitFrom === "Kelvin" && unitTo === "Celsius") {
            return temperature - 273.15;
        } else if (unitFrom === "Kelvin" && unitTo === "Fahrenheit") {
            return ((temperature - 273.15) * 9 / 5) + 32;
        } else if (unitFrom === unitTo) {
            return temperature;
        } else {
            throw new Error("Unsupported unit conversion");
        }
    };
}


const celsiusConverter = createTemperatureConverter("Celsius");
const fahrenheitConverter = createTemperatureConverter("Fahrenheit");
const kelvinConverter = createTemperatureConverter("Kelvin");

document.getElementById("convertButton").addEventListener("click", () => {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;

    let result;
    try {
        if (isNaN(temperatureInput)) {
            throw new Error("Please enter a valid temperature");
        }
        if (unitFrom === "Celsius") {
            result = celsiusConverter(temperatureInput, unitTo);
        } else if (unitFrom === "Fahrenheit") {
            result = fahrenheitConverter(temperatureInput, unitTo);
        } else if (unitFrom === "Kelvin") {
            result = kelvinConverter(temperatureInput, unitTo);
        }
        document.getElementById("resultValue").textContent = `${result.toFixed(2)} ${unitTo}`;
    } catch (error) {
        document.getElementById("resultValue").textContent = error.message;
    }
});
