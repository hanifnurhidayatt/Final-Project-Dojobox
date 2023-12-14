const LoginPage = require('../support/pages/LoginPage')
const UserData = require('../support/data/UserData')

describe('user should be able to login', () => {
  it('with valid data', () => { 
    LoginPage.visit()
    LoginPage.fillUsername(UserData.username)
    LoginPage.fillPassword(UserData.password)
    LoginPage.clickLogin()
    cy.xpath('//*[@class="rounded-circle header-profile-user"]').click()
    cy.xpath('//*[@class="bx bx-power-off font-size-16 align-middle me-1 text-danger"]').click()
  })
})