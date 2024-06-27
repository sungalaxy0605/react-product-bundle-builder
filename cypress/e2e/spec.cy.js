describe("Bundle Builder Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("macbook-15");
  });

  it("Should visit", () => {});

  it("Should cart button disabled", () => {
    cy.viewport("macbook-15");

    cy.get(".bundle-tracker button").should("have.prop", "disabled", true);
  });

  it("Should add to or remove from bundle", () => {
    cy.get(".pack-list .product").should("have.length", 20);

    cy.get(".pack-list .product").eq(0).find(".add-product").click();

    cy.get(".pack-list .product")
      .eq(0)
      .find(".count-in-bundle")
      .should("have.text", 1);

    cy.get(".pack-list .product").eq(0).find(".remove-product").click();

    cy.get(".pack-list .product")
      .eq(0)
      .find(".count-in-bundle")
      .should("have.text", 0);
  });

  it("Should be correct total", () => {
    cy.get(".pack-list .product").eq(2).find(".add-product").click();
    cy.get(".pack-list .product").eq(10).find(".add-product").click();
    cy.get(".pack-list .product").eq(17).find(".add-product").click();
    cy.get(".bundle-tracker .bundle-total-price").should("have.text", "$99.97");
  });

  it("Should add only 3 products", () => {
    cy.get(".pack-list .product").eq(0).find(".add-product").click();
    cy.get(".pack-list .product").eq(1).find(".add-product").click();
    cy.get(".pack-list .product").eq(18).find(".add-product").click();
    cy.get(".pack-list .product").eq(19).find(".add-product").click();
    cy.get(".pack-list .product")
      .eq(19)
      .find(".count-in-bundle")
      .should("have.text", 0);
  });
});
