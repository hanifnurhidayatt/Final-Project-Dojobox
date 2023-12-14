const LoginPage = require('../support/pages/LoginPage')
const UserData = require('../support/data/UserData')

describe('user should be able to login', () => {
  it('with valid data', () => { 
    LoginPage.visit()
    LoginPage.fillUsername(UserData.username)
    LoginPage.fillPassword(UserData.password)
    LoginPage.clickLogin()
    cy.xpath('//*[@key="t-client"]').click()
    cy.xpath('//*[@href="/client?statusid=2"]').click()
    cy.xpath('//*[@class="card-title mb-1 text-primary"]').should('be.visible')
  })
})