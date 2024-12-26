let displayValue = ''; // Keeps track of the display value

// Function to append numbers and operators to the display
function appendNumber(value) {
  displayValue += value; // Append the value to the display string
  updateDisplay(displayValue); // Update the display with the new value
}

// Function to set the operator
function setOperator(op) {
  if (displayValue === '') return; // Do nothing if display is empty
  displayValue += ` ${op} `; // Append the operator with spaces for clarity
  updateDisplay(displayValue); // Update the display
}

// Function to evaluate the expression
function calculate() {
  try {
    // Evaluate the mathematical expression in the display
    const result = eval(displayValue.replace('÷', '/').replace('×', '*'));
    displayValue = result.toString(); // Update the displayValue with the result
    updateDisplay(displayValue); // Update the display
  } catch (error) {
    updateDisplay('Error'); // Display error for invalid expressions
    displayValue = ''; // Clear the displayValue
  }
}

// Function to clear the display
function clearDisplay() {
  displayValue = ''; // Reset the display value
  updateDisplay('0'); // Set the display to 0
}

// Function to update the display
function updateDisplay(value) {
  const display = document.getElementById('display');
  display.textContent = value; // Set the display's text content to the value
}
