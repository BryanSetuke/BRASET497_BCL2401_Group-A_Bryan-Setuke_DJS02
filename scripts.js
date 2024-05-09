const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = entries.get("dividend");
  const divider = entries.get("divider");

  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  if (parseInt(divider) === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Division by zero error: ", new Error().stack);
    return; 
  }
  
  if (isNaN(dividend) || isNaN(divider)){
    console.error("Error: Invalid number provided",new Error().stack)
    document.write( "Something critical went wrong. Please reload the page");
    return;
  }

  // Validate input as whole numbers
  if (isNaN(dividend) || isNaN(divider) || dividend % 1 !== 0 || divider % 1 !== 0) {
    result.innerText = "Error: Please enter whole numbers only.";
    return;// Stop the function from running
  }

  // Limit dividend to a maximum of 6 digits
  if (dividend.toString().length > 6) {
    result.innerText = "Error: Dividend cannot exceed 6 digits.";
    return;
  }

  // Display the result
  result.innerText = Math.floor(dividend / divider);
});