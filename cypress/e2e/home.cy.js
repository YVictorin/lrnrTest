///<reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should take users to the quiz page when BEGIN JOURNEY button is clicked on', () => {
    cy.get('[data-testid="home-btn"]')
      .click()
      .url()
      .should('include', '/quizGen')
  });

  it('should have the heading text inside of it', () => {
    cy.get('[data-testid="home-title"]')
      .should("exist")
      .should('have.text','Your guided path to programming enlightnment')
  })

  it('should render three columns on the screen', () => {
    cy.get('.col.s12.m4')
      .should('exist')
      .should('have.length', 3)
  })

  it('should render the hero image in its container', () => {
      cy.get('img')
        .should('exist')
        .should('be.visible')
  });

  it('should render the footer in its container', () => {
    cy.get('footer')
      .should('exist')
  });

  it('should allow the footer to be visible on scroll', () => {
    cy.get('footer')
    .scrollIntoView()
    .should('be.visible')
  });

})