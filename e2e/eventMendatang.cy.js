const LoginPage = require('../support/pages/LoginPage')
const UserData = require('../support/data/UserData')

describe('user should be able to login', () => {
  it('with valid data', () => { 
    LoginPage.visit()
    LoginPage.fillUsername(UserData.username)
    LoginPage.fillPassword(UserData.password)
    LoginPage.clickLogin()
    cy.xpath('//*[@key="t-event"]').click()
    cy.xpath('//*[@key="t-event-upcoming"]').click()
    cy.xpath('//*[@class="page-title-right"]').should('be.visible')
  })
})