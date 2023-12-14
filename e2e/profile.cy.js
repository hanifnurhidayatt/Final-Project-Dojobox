const LoginPage = require('../support/pages/LoginPage')
const UserData = require('../support/data/UserData')

describe('user should be able to login', () => {
  it('with valid data', () => { 
    LoginPage.visit()
    LoginPage.fillUsername(UserData.username)
    LoginPage.fillPassword(UserData.password)
    LoginPage.clickLogin()
    cy.xpath('//*[@class="mdi mdi-arrow-right ms-1"]').click()
    cy.xpath('//*[@class="mb-sm-0 font-size-18"]').should('be.visible')
  })
})