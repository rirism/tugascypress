/// <reference types="cypress" />

describe('Fitur Login', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
  })

  it('Test Using Correct Username and Password', () => {
    const username = 'John Doe'
    const password = 'ThisIsNotAPassword'
    cy.get('#txt-username').type(`${username}`)
    cy.get('#txt-password').type(`${password}{enter}`)
    cy.get('#appointment > div > div > div > h2').should('have.text', 'Make Appointment')
  })

  it('Testing Using an Unregistered Username', () => {
    const username = 'John'
    const password = 'ThisIsNotAPassword'
    cy.get('#txt-username').type(`${username}`)
    cy.get('#txt-password').type(`${password}{enter}`)
    cy.get('#login > div > div > div.col-sm-12.text-center > p.lead.text-danger').should('have.text', 'Login failed! Please ensure the username and password are valid.')
  })

  it('Testing Using a Wrong Password', () => {
    const username = 'John Doe'
    const password = 'ThisIsAPassword'
    cy.get('#txt-username').type(`${username}`)
    cy.get('#txt-password').type(`${password}{enter}`)
    cy.get('#login > div > div > div.col-sm-12.text-center > p.lead.text-danger').should('have.text', 'Login failed! Please ensure the username and password are valid.')
  })
})
