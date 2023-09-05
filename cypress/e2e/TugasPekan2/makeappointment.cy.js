/// <reference types="cypress" />

describe('Fitur Login', () => {
    beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        const username = 'John Doe'
        const password = 'ThisIsNotAPassword'
        cy.get('#txt-username').type(`${username}`)
        cy.get('#txt-password').type(`${password}{enter}`)
    })
  
    it('Test Apply For Hongkong CURA Healthcare Center', () => {
        const date = '23/09/2023'
        const comment = 'This is a comment'
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#txt_visit_date').type(`${date}`)
        cy.get('body').click();
        cy.get('#txt_comment').type(`${comment}`);
        cy.contains('Book Appointment').click()
        cy.get('#facility').should('have.text', 'Hongkong CURA Healthcare Center')
    })

    it('Test Apply For Tokyo CURA Healthcare Center', () => {
        const date = '23/09/2023'
        const comment = 'This is a comment'
        cy.get('#combo_facility').select('Tokyo CURA Healthcare Center')
        cy.get('#txt_visit_date').type(`${date}`)
        cy.get('body').click();
        cy.get('#txt_comment').type(`${comment}`);
        cy.contains('Book Appointment').click()
        cy.get('#facility').should('have.text', 'Tokyo CURA Healthcare Center')
    })

    it('Test Apply For Seoul CURA Healthcare Center', () => {
        const date = '23/09/2023'
        const comment = 'This is a comment'
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
        cy.get('#txt_visit_date').type(`${date}`)
        cy.get('body').click();
        cy.get('#txt_comment').type(`${comment}`);
        cy.contains('Book Appointment').click()
        cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center')
    })

    it('Test Apply For Hotel Readmission Unchecked', () => {
        const date = '23/09/2023'
        const comment = 'This is a comment'
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#txt_visit_date').type(`${date}`)
        cy.get('body').click();
        cy.get('#txt_comment').type(`${comment}`);
        cy.contains('Book Appointment').click()
        cy.get('#hospital_readmission').should('have.text', 'No')
    })

    it('Test Apply For Hotel Readmission Checked', () => {
        const date = '23/09/2023'
        const comment = 'This is a comment'
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#txt_visit_date').type(`${date}`)
        cy.get('body').click();
        cy.get('#txt_comment').type(`${comment}`);
        cy.contains('Book Appointment').click()
        cy.get('#hospital_readmission').should('have.text', 'Yes')
    })

    it('Test Apply For Hotel Healthcare Program Medicare', () => {
        const date = '23/09/2023'
        const comment = 'This is a comment'
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicare').check();
        cy.get('#txt_visit_date').type(`${date}`)
        cy.get('body').click();
        cy.get('#txt_comment').type(`${comment}`);
        cy.contains('Book Appointment').click()
        cy.get('#program').should('have.text', 'Medicare')
    })

    it('Test Apply For Hotel Healthcare Program Medicaid', () => {
        const date = '23/09/2023'
        const comment = 'This is a comment'
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();
        cy.get('#txt_visit_date').type(`${date}`)
        cy.get('body').click();
        cy.get('#txt_comment').type(`${comment}`);
        cy.contains('Book Appointment').click()
        cy.get('#program').should('have.text', 'Medicaid')
    })

    it('Test Apply For Hotel Healthcare Program None', () => {
        const date = '23/09/2023'
        const comment = 'This is a comment'
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_none').check();
        cy.get('#txt_visit_date').type(`${date}`)
        cy.get('body').click();
        cy.get('#txt_comment').type(`${comment}`);
        cy.contains('Book Appointment').click()
        cy.get('#program').should('have.text', 'None')
    })

    it('Test No Input on Visit Date (Required)', () => {
        const comment = 'This is a comment'
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_none').check();
        cy.get('body').click();
        cy.get('#txt_comment').type(`${comment}`);
        cy.contains('Book Appointment').click()
        cy.on('window:alert', (message) => {
            // Assert the alert message or take actions based on it
            expect(message).to.equal('Please fill out this field.');
          });
    })

  })
  