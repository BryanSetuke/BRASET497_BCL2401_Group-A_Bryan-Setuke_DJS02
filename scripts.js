// Select the form and result elements using attribute selectors
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Event listener for form submission
form.addEventListener("submit", (event) => {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Extract values from form inputs
  const entries = new FormData(event.target);
  const dividend = entries.get("dividend");
  const divider = entries.get("divider");

  // Check if either input is empty
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Check if the divider is zero
  if (parseInt(divider) === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Division by zero error: ", new Error().stack);
    return; 
  }
  
  // Check if either input is not a number
  if (isNaN(dividend) || isNaN(divider)){
    console.error("Error: Invalid number provided",new Error().stack);
    result.innerText = "Something critical went wrong. Please reload the page";
    return;
  }

  // Validate input as whole numbers
  if (dividend % 1 !== 0 || divider % 1 !== 0) {
    result.innerText = "Error: Please enter whole numbers only.";
    return; // Stop the function from running
  }

  // Limit dividend to a maximum of 6 digits
  if (dividend.toString().length > 6) {
    result.innerText = "Error: Dividend cannot exceed 6 digits.";
    return;
  }

  // Perform the division and display the result
  result.innerText = Math.floor(dividend / divider);
});
