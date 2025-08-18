describe('Post Page Tests', () => {
  beforeEach(() => {
    cy.visit('/content/articles/optimizing-react-with-memoization/');
  });

  it('should load post page successfully', () => {
    cy.get('h1').should('contain', 'Optimizing React With Memoization');
    cy.get('article').should('exist');
  });

  it('should have copy buttons on code blocks', () => {
    cy.get('pre').should('exist');
    cy.get('pre').first().parent('.code-block').should('exist');
    cy.get('.copy-btn').should('exist');
  });

  it('should copy code when clicking copy button', () => {
    cy.get('.copy-btn').first().click();
    cy.get('.copy-btn').first().should('contain', 'Copied!');
    
    // Wait for button to reset
    cy.wait(2100);
    cy.get('.copy-btn').first().should('contain', 'Copy');
  });

  it('should have section links on headings', () => {
    cy.get('h2, h3, h4').should('have.length.at.least', 1);
    
    // Hover over heading to show section link
    cy.get('h2').first().trigger('mouseover');
    cy.get('h2').first().find('.section-link').should('exist');
  });

  it('should copy section link when clicked', () => {
    cy.get('h2').first().trigger('mouseover');
    cy.get('h2').first().find('.section-link').click();
    cy.get('h2').first().find('.section-link').should('contain', '✅');
  });

  it('should have syntax highlighting with Dracula theme', () => {
    cy.get('pre').should('have.css', 'background-color', 'rgb(40, 42, 54)'); // Dracula background
    cy.get('.shiki').should('exist');
  });

  it('should have theme switcher working', () => {
    cy.get('#theme-toggle').should('exist');
    cy.get('#theme-toggle').click();
    cy.get('html').should('have.class', 'dark');
  });
});
