describe('Articles Page Tests', () => {
  beforeEach(() => {
    cy.visit('/articles/');
  });

  it('should load articles page successfully', () => {
    cy.get('h1').should('contain', 'Osmar Petry');
    cy.get('.muted').should('contain', 'Senior Software Engineer — React · TS · Node · AWS/GCP');
  });

  it('should not display navigation buttons in header', () => {
    cy.get('header nav').should('not.exist');
    cy.get('header').within(() => {
      cy.contains('E-mail').should('not.exist');
      cy.contains('GitHub').should('not.exist');
      cy.contains('LinkedIn').should('not.exist');
      cy.contains('Download CV').should('not.exist');
    });
  });

  it('should display collapsible tag filter section', () => {
    cy.get('.tag-filter').should('exist');
    cy.get('.tag-filter-details').should('exist');
    cy.get('.tag-filter-summary h3').should('contain', 'Filter by tag');
    cy.get('.tag-count').should('exist');
  });

  it('should expand and collapse tag filter when clicked', () => {
    cy.get('.tag-filter-details').should('not.have.attr', 'open');
    cy.get('.tag-filter-summary').click();
    cy.get('.tag-filter-details').should('have.attr', 'open');
    cy.get('.tag-list').should('be.visible');
    cy.get('.tag-filter-summary').click();
    cy.get('.tag-filter-details').should('not.have.attr', 'open');
  });

  it('should display articles list', () => {
    cy.get('.posts-list').should('exist');
    cy.get('.post-item').should('have.length.at.least', 1);
  });

  it('should have clickable tag filters', () => {
    cy.get('.tag-filter-summary').click();
    cy.get('.tag-filter-link').should('have.length.at.least', 1);
    cy.get('.tag-filter-link').first().should('have.attr', 'href');
  });

  it('should have theme switcher working', () => {
    cy.get('#theme-toggle').should('exist');
    cy.get('#theme-toggle').click();
    cy.get('html').should('have.class', 'dark');
  });
});
