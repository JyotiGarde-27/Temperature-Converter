// Degree Celsius to Fahrenheit
const changeCelDegToFahrenheit = () => {
    const degValue = document.getElementById('celciusDeg').value;
    
    // T(°F) = T(°C) × 9/5 + 32
    let newFahrenheitDeg = (degValue) * 9/5 + 32;
    document.getElementById('fahrenheitDeg').value = newFahrenheitDeg;
}

// Fahrenheit to Degree Celsius
const changeFahrenheitDegToCel = () => {
    const fahrenheitValue = document.getElementById("fahrenheitDegree").value;
    
    // T(°C) = (T(°F) - 32) × 5/9
    let newCelciusDeg = (fahrenheitValue - 32) * 5/9;
    document.getElementById('celciusDegree').value = newCelciusDeg;
}
