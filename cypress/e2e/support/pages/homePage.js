class homePage {
    visitHomePage() {
        return cy.visit('http://automationexercise.com');
    }
    getCaroussel() {
        return cy.get('#slider-carousel > .carousel-inner');
    }
}
export default new homePage();