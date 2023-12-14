const locator = require('../locators/LoginLocator')
class LoginPage {
    async visit() {
        cy.visit('https://appstaging.viseetor.id/login')
    }
    
    async fillUsername(username) {
        cy.xpath(locator.datatestid.username_field).type(username)
    }

    async fillPassword(password) {
        cy.xpath(locator.datatestid.password_field).type(password)
    }

    async clickLogin() {
        cy.xpath(locator.datatestid.login_btn).click()
    }
}

module.exports = new LoginPage()