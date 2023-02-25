describe('hstrejoluna-site', () => {
  beforeEach(() => cy.visit('/articles/hs-trejo-luna-dg'));

  it('should render the title of the article', () => {
    cy.get('h1').should('contain', 'HS Trejo Luna DG');
  });

  it('should properly render the embedded Youtube component', () => {
    cy.get('iframe').should('be.visible');
  });
});
