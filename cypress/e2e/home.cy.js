///<reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should have the heading text inside of it', () => {
    cy.get('[data-testid="home-title"]')
    .should("exist")
    .should('have.text','Your guided path to programming enlightnment')
  })

  it('renders columns on the screen', () => {
    cy.get('.col.s12.m4')
      .should('exist')
      .should('have.length', 3)
  })

  it('should take users to the quiz page when begin journey button is clicked', () => {
    cy.get('[data-testid="home-btn"]').click()
    cy.url().should('include', '/quiz')
  });
})