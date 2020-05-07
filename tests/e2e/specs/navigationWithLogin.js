


describe('Testing Navigation WITH Login', () => {

    beforeEach(() => {
        cy.login();
    });
    
    it('Test that urls take you to correct page', () => {
      //landing page
      cy.visit('/');
      cy.contains('p', 'HOME');
  
      //events
      cy.visit('/events');
      cy.contains('span', 'Page 1');
  
      //checkout
      cy.visit('/checkout');
      cy.contains('h1', 'My Cart');

      //profile
      cy.visit('/profile');
      cy.contains('h1', 'My Profile');

      //registrations
      cy.visit('/my-events');
      cy.contains('h1', 'My Events');
      
    });
    
    it('Visits all pages from landing page', () => {
      cy.visit('/');
  
      //connection to events
      cy.contains('Events').click();
      cy.url().should('include', '/events');
  
      //reset
      cy.visit('/');
  
      //connection to checkout
      cy.contains('Checkout').click();
      cy.url().should('include', '/checkout');

      //reset
      cy.visit('/');
  
      //connection to registrations
      cy.contains('Registrations').click();
      cy.url().should('include', '/my-events');

      //reset
      cy.visit('/');
  
      //connection to profile
      cy.contains('Profile').click();
      cy.url().should('include', '/profile');

    });
  
    it('Visits all pages from Events', () => {
      cy.visit('/events');
  
      cy.get('.title').first().click();
      cy.url().should('eq', 'http://localhost:8080/');
  
      //reset
      cy.visit('/events');
  
      //connection to checkout
      cy.contains('Checkout').click();
      cy.url().should('include', '/checkout');

      //reset
      cy.visit('/events');
  
      //connection to registrations
      cy.contains('Registrations').click();
      cy.url().should('include', '/my-events');

      //reset
      cy.visit('/events');
  
      //connection to profile
      cy.contains('Profile').click();
      cy.url().should('include', '/profile');
  
    });
  
    it('Visits all pages from checkout', () => {
      cy.visit('/checkout');
  
      //connection to landing page
      cy.get('.title').click();
      cy.url().should('eq', 'http://localhost:8080/');
  
      //reset
      cy.visit('/checkout');
  
      //connection to events
      cy.contains('Events').click();
      cy.url().should('include', '/events');

      //reset
      cy.visit('/checkout');
  
      //connection to registrations
      cy.contains('Registrations').click();
      cy.url().should('include', '/my-events');

      //reset
      cy.visit('/checkout');
  
      //connection to profile
      cy.contains('Profile').click();
      cy.url().should('include', '/profile');
  
    });

    it('Visits all pages from registrations', () => {
        cy.visit('/my-events');
    
        //connection to landing page
        cy.get('.title').click();
        cy.url().should('eq', 'http://localhost:8080/');
    
        //reset
        cy.visit('/my-events');
    
        //connection to events
        cy.contains('Events').click();
        cy.url().should('include', '/events');
  
        //reset
        cy.visit('/my-events');
    
        //connection to checkout
        cy.contains('Checkout').click();
        cy.url().should('include', '/checkout');
  
        //reset
        cy.visit('/my-events');
    
        //connection to profile
        cy.contains('Profile').click();
        cy.url().should('include', '/profile');
    
      });
      
      it('Visits all pages from profile', () => {
        cy.visit('/profile');
    
        //connection to landing page
        cy.get('.title').first().click();
        cy.url().should('eq', 'http://localhost:8080/');
    
        //reset
        cy.visit('/profile');
    
        //connection to events
        cy.contains('Events').click();
        cy.url().should('include', '/events');
  
        //reset
        cy.visit('/profile');
    
        //connection to registrations
        cy.contains('Registrations').click();
        cy.url().should('include', '/my-events');
  
        //reset
        cy.visit('/profile');
    
        //connection to checkout
        cy.contains('Checkout').click();
        cy.url().should('include', '/checkout');
    
      });
    
  
  });
  