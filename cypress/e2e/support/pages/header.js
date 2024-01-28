class header {
    clickSignLogButton() {
        return cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    }

    getUserLoged() {
        return cy.get(':nth-child(10) > a');
    }
    clickDeletAccountButton() {
        return cy.get('.shop-menu > .nav > :nth-child(5)').click();
    }
}
export default new header();