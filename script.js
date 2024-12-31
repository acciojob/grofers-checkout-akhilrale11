function calculateTotal() {
    const prices = document.querySelectorAll('.price');
    let total = 0;

    prices.forEach(price => {
        const value = parseFloat(price.textContent);
        total += isNaN(value) ? 0 : value;
    });

    // Remove existing total row if it exists
    const existingTotalRow = document.querySelector('#ans');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create and append the new total row
    const table = document.getElementById('grocery-table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');

    totalCell.colSpan = 2;
    totalCell.id = 'ans';
    totalCell.textContent = total;

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
}
