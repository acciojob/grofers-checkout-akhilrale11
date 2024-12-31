document.addEventListener("DOMContentLoaded", () => {
    const prices = document.querySelectorAll('.prices');

    // Make prices editable
    prices.forEach(price => {
        price.setAttribute('contenteditable', 'true');

        // Update the total when content changes
        price.addEventListener('input', calculateTotal);
    });

    calculateTotal();
});

function calculateTotal() {
    const prices = document.querySelectorAll('.prices');
    let total = 0;

    prices.forEach(price => {
        const value = parseFloat(price.textContent);
        total += isNaN(value) ? 0 : value;
    });

    // Remove existing total row if it exists
    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create and append the new total row
    const table = document.getElementById('grocery-table');
    const newRow = document.createElement('tr');
    newRow.classList.add('total-row');

    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;
    totalCell.id = "ans"; // For Cypress test compatibility
    totalCell.classList.add('total');
    totalCell.textContent = `Total Price: ${total}`;

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
}
