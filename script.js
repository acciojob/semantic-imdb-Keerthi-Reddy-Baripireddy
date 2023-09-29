//your code here
cy.visit(baseUrl + "/main.html");
cy.get('section#summary').then(ans => {
    expect(ans.text().trim().length).to.gt(0);
});

