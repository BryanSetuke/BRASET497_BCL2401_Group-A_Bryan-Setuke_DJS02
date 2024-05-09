const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = entries.get("dividend");
  const divider = entries.get("divider");

  // Validate input as whole numbers
  if (isNaN(dividend) || isNaN(divider) || dividend % 1 !== 0 || divider % 1 !== 0) {
    result.innerText = "Error: Please enter whole numbers only.";
    return;
  }

  // Limit dividend to a maximum of 6 digits
  if (dividend.toString().length > 6) {
    result.innerText = "Error: Dividend cannot exceed 6 digits.";
    return;
  }

  // Calculate whole number division with remainder
  const quotient = Math.floor(dividend / divider);
  const remainder = dividend % divider;
  const repeatingDecimal = remainder ? `.${'0'.repeat(divider.toString().length)}${'1'.repeat(remainder.toString().length)}` : '';

  // Display the result
  result.innerText = `${quotient} ${remainder ? `with remainder ${remainder} (${repeatingDecimal})` : ''}`;
});