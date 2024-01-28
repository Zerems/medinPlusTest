class signUpPage {
    getTittleSignUp() {
        return cy.get('.signup-form');
    }
    getName(data) {
        return cy.get('[data-qa="signup-name"]').type(data);
    }
    getEmail(data) {
        return cy.get('[data-qa="signup-email"]').type(data);
    }
    clickSignupButton() {
        return cy.get('[data-qa="signup-button"]').click();
    }

}
export default new signUpPage();