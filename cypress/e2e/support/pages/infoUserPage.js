class infoUserPage {
    getTittlePage() {
        return cy.get(':nth-child(1) > b');
    }
    selectMaleGender() {
        return cy.get('#uniform-id_gender1').click();
    }
    getPassword(data) {
        return cy.get('[data-qa="password"]').type(data);
    }
    getBirthdate() {
        cy.get('[data-qa="days"]').select("13");
        cy.get('[data-qa="months"]').select("3");
        cy.get('[data-qa="years"]').select("1991");
    }
    subscribNewsLetter(){
        return cy.get('#newsletter').click();
    }
    subscribOffersPartner(){
        return cy.get('#optin').click();
    }
    getFirstName(data) {
        return cy.get('[data-qa="first_name"]').type(data);
    }
    getLastName(data) {
        return cy.get('[data-qa="last_name"]').type(data);
    }
    getCompany(data) {
        return cy.get('[data-qa="company"]').type(data);
    }
    getAdress(data) {
        return cy.get('[data-qa="address"]').type(data);
    }
    getAdress2(data) {
        return cy.get('[data-qa="address2"]').type(data);
    }
    selectCountry() {
       return cy.get('[data-qa="country"]').select("Canada");
    }
    getState(data) {
        return cy.get('[data-qa="state"]').type(data);
    }
    getCity(data) {
        return cy.get('[data-qa="city"]').type(data);
    }
    getZipCode(data) {
        return cy.get('[data-qa="zipcode"]').type(data);
    }
    getMobile(data) {
        return cy.get('[data-qa="mobile_number"]').type(data);
    }
    clickButtonCreate() {
        return cy.get('[data-qa="create-account"]').click();
    }
}
export default new infoUserPage();