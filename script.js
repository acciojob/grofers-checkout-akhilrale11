describe('Form Submission Test', () => {
    const baseUrl = 'http://localhost:3000'; // Replace with the actual base URL of your app

    it('Submits the form and checks the alert for "John Doe"', () => {
        cy.visit(baseUrl);
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[type="submit"]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('John Doe');
        });
    });

    it('Submits the form and checks the alert for "John Mark Doe"', () => {
        cy.visit(baseUrl);
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Mark Doe');
        cy.get('input[type="submit"]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('John Mark Doe');
        });
    });
});
