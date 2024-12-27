const calculateTotalPrice = () => {
  // Get all elements with the class "prices"
  const priceElements = document.querySelectorAll('.prices');

  // Calculate the total price
  let totalPrice = 0;
  priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent) || 0; // Convert text to number and handle invalid entries
  });

  // Create a new row for the total price
  const table = document.querySelector('table'); // Get the table element
  const totalRow = document.createElement('tr'); // Create a new row
  const totalCell = document.createElement('td'); // Create a new cell
  totalCell.setAttribute('colspan', '2'); // Span the cell across all columns
  totalCell.textContent = `Total Price: ${totalPrice.toFixed(2)}`; // Display total price
  totalRow.appendChild(totalCell); // Append the cell to the row

  // Add the total row to the table
  table.appendChild(totalRow);
};

// Call the function to calculate and display the total price
calculateTotalPrice();
