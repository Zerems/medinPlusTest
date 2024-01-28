class createdAccountPage {
    getConfirmationMessage() {
        return cy.get('[data-qa="account-created"]');
    }
    clickContinueButton() {
        return cy.get('[data-qa="continue-button"]').click();
    }
}
export default new createdAccountPage();