
// This command logs you in as either a GP (General Participant), PF (Participating Family) or Admin
// ** Right now just logs you in as an example user **
Cypress.Commands.add("login", () => {
    const user = {
        email: 'user@example.com',
        password: 'secret'
    }

    cy.visit('/login');

    cy.get('input[placeholder="Email Address"]').type(user.email);
    cy.get('input[placeholder="Password"]').type(user.password);
    
    cy.get('.auth-container > button').click();

    cy.wait(2000);

});
