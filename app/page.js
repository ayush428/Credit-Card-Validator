"use client"; // Client component directive for Next.js

import { useState } from "react";
export default function Home() {
  const [cardNumber, setCardNumber] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  // Luhn Algorithm for credit card validation
  const validateCardNumber = (number) => {
    let sum = 0;
    let shouldDouble = false;

    // Loop through the card number digits from right to left
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number[i]);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  const handleValidation = () => {
    const sanitizedCardNumber = cardNumber.replace(/\s+/g, ""); // Remove any spaces

    if (sanitizedCardNumber.length < 13 || sanitizedCardNumber.length > 19) {
      setValidationMessage("Card number must be between 13 and 19 digits long.");
    } else if (validateCardNumber(sanitizedCardNumber)) {
      setValidationMessage("Credit card number is valid!");
    } else {
      setValidationMessage("Invalid credit card number. Please check again.");
    }
  };

  return (
    <div>
      <div>
        <h1>Instant Credit Card Validation</h1>
        <p>
          Easily verify the authenticity of any credit card number with our secure
          and accurate credit card validator tool. Simply enter the card number
          below, and our system will instantly check its validity.
        </p>

        <div>
          <input
            type="text"
            placeholder="Enter credit card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="19" // Limit input to a maximum of 19 digits
          
          />
          <button onClick={handleValidation}>
            Check
          </button>
        </div>

        {/* Display validation message */}
        {validationMessage && (
          <p>{validationMessage}</p>
        )}
      </div>
      <h1>How It Works</h1>
      <p>
Our validator checks the card number using advanced algorithms to confirm if it follows the correct format, without storing or processing sensitive data. It’s a quick and reliable solution to ensure your transactions are safe.</p>
<h1>Why use a credit card validator</h1>
<p>
Prevent Fraud: Validate card numbers before processing transactions to avoid fraud.
Save Time: Instantly check card authenticity and reduce payment errors.
Easy to Use: Simple, fast, and user-friendly interface.
Safe & Secure
Your privacy is our priority. We ensure that no personal or sensitive card data is stored or shared. Our system only checks the number structure for accuracy.

</p>
<h1>Safe & Secure
</h1>
<p>
Your privacy is our priority. We ensure that no personal or sensitive card data is stored or shared. Our system only checks the number structure for accuracy.</p>
    </div>
  );
}
