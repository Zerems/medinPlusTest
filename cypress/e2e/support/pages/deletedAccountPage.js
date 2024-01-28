class deletedAccountPage {
    getConfirmationMessage() {
        return cy.get('[data-qa="account-deleted"]');
    }
    clickContinueButton() {
        return cy.get('[data-qa="continue-button"]').click();
    }
}
export default new deletedAccountPage();