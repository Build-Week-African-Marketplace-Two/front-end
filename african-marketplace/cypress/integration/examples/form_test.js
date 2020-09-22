describe("African Marketplace testing", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/register");
    });

    it("User first name", () => {
        cy.get('#firstName')
            .type("Sathya")
            .should("have.value", "Sathya")
    });

    it("User last name", () => {
        cy.get('#lastName')
            .type("Ganesan")
            .should("have.value", "Ganesan")
    });

    it("User email address", () => { 
        cy.get('#email')
            .type("sathya@gmail.com")
        .should("have.value", "sathya@gmail.com")
    });

    it("User password", () => { 
        cy.get('#password')
            .type("Password123")
            .should("have.value", "Password123")
    });

    it("User Confirm Paddword", () => { 
        cy.get('#conPassword')
            .type("Password123")
        .should("have.value", "Password123")
    });
});