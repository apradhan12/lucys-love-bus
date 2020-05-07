
describe('Testing Navigation WITHOUT Login', () => {
  it('Test that urls take you to correct page', () => {
    //landing page
    cy.visit('/');
    cy.contains('p', 'HOME');

    //about us
    cy.visit('/about-us');
    cy.contains('p', 'About Us');
  
    //login
    cy.visit('/login');
    cy.contains('span', 'Sign in to your account');

    //sign up
    cy.visit('/sign-up');
    cy.contains('h4','Join the Sajni Center!');

  });
  
  it('Visits all pages from landing page', () => {
    cy.visit('/');

    //connection to about us
    cy.contains('About Us').click();
    cy.url().should('include', '/about-us');

    //reset
    cy.visit('/');

    //connection to Log In
    cy.contains('Log In').click();
    cy.url().should('include', '/login');
  });

  it('Visits all pages from About Us', () => {
    cy.visit('/about-us');

    //connection to landing page
    cy.get('.title').click();
    cy.url().should('eq', 'http://localhost:8080/');

    //reset
    cy.visit('/about-us');

    //connection to Log In
    cy.contains('Log In').click();
    cy.url().should('include', '/login');
  });

  it('Visits all pages from login', () => {
    cy.visit('/login');

    //connection to landing page
    cy.get('.title').click();
    cy.url().should('eq', 'http://localhost:8080/');

    //reset
    cy.visit('/login');

    //connection to about us
    cy.contains('About Us').click();
    cy.url().should('include', '/about-us');

    //reset
    cy.visit('/login');

    //connection to sign up
    cy.contains("Don't have an account? Sign up here!").click();
    cy.url().should('include', '/sign-up');

  });

  it('Visits all pages from sign up', () => {
    cy.visit('/sign-up');

    //connection to landing page
    cy.get('.title').click();
    cy.url().should('eq', 'http://localhost:8080/');

    //reset
    cy.visit('/sign-up');

    //connection to Log In
    cy.contains('Log In').click();
    cy.url().should('include', '/login');

    //reset
    cy.visit('/sign-up');

    //connection to Log In
    cy.get('.left-tab').click();
    cy.url().should('include', '/login');

    //reset
    cy.visit('/sign-up');

    //connection to Log In
    cy.contains('Already have an account? Log in here!').click();
    cy.url().should('include', '/login');

    //reset
    cy.visit('/sign-up');

    //connection to about us
    cy.contains('About Us').click();
    cy.url().should('include', '/about-us');
  });
  

});
