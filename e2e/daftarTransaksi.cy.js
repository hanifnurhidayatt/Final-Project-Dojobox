const LoginPage = require('../support/pages/LoginPage')
const UserData = require('../support/data/UserData')

describe('user should be able to login', () => {
  it('with valid data', () => { 
    LoginPage.visit()
    LoginPage.fillUsername(UserData.username)
    LoginPage.fillPassword(UserData.password)
    LoginPage.clickLogin()
    cy.xpath('//*[@class="bx bx-cart"]').click()
    cy.xpath('//*[@href="/transactions"]').click()
    cy.xpath('//*[@class="card-title mb-1 text-primary"]').should('be.visible')
  })
})