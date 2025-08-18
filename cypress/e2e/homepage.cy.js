describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the homepage successfully', () => {
    cy.get('h1').should('contain', 'Osmar Petry');
    cy.get('.hero-subtitle').should('contain', 'Senior Software Engineer');
  });

  it('should not display Latest Articles section', () => {
    cy.get('.latest-posts').should('not.exist');
    cy.contains('Latest Articles').should('not.exist');
    cy.contains('No posts yet').should('not.exist');
    cy.contains('View All Articles').should('not.exist');
  });

  it('should display hero buttons', () => {
    cy.get('.hero-buttons').should('exist');
    cy.get('.hero-buttons .btn').should('have.length', 4);
    cy.contains('Contact Me').should('exist');
    cy.contains('Download CV').should('exist');
    cy.contains('GitHub').should('exist');
    cy.contains('LinkedIn').should('exist');
  });

  it('should display experience highlights from resume', () => {
    cy.get('.experience').should('exist');
    cy.get('.experience h2').should('contain', 'Experience Highlights');
    cy.get('.experience-item').should('have.length.at.least', 1);
    
    // Check if experience is extracted from resume
    cy.get('.experience-item').first().within(() => {
      cy.get('h3').should('not.be.empty');
      cy.get('.company').should('not.be.empty');
    });
  });

  it('should have theme switcher button', () => {
    cy.get('#theme-toggle').should('exist');
    cy.get('.theme-icon').should('exist');
  });

  it('should toggle theme when clicking theme switcher', () => {
    // Check initial state
    cy.get('html').should('not.have.class', 'dark');
    cy.get('.theme-icon').should('contain', '🌙');
    
    // Click theme toggle
    cy.get('#theme-toggle').click();
    
    // Check dark mode is applied
    cy.get('html').should('have.class', 'dark');
    cy.get('.theme-icon').should('contain', '☀️');
    
    // Click again to toggle back
    cy.get('#theme-toggle').click();
    
    // Check light mode is restored
    cy.get('html').should('not.have.class', 'dark');
    cy.get('.theme-icon').should('contain', '🌙');
  });

  it('should have footer at bottom', () => {
    cy.get('footer').should('exist');
    cy.get('body').should('have.css', 'min-height');
    cy.get('.wrap').should('have.css', 'display', 'flex');
  });
});
