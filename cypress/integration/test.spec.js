/// <reference types='cypress'/>

it('Method 1', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth', {
        failOnStatusCode: false
    })
})

it('Method 2', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
        auth: {
            user: 'admin',
            pass: 'admin'
        }
    })
})

it('Method 3', () => {
    cy.request({
        method: 'GET',
        url: 'https://the-internet.herokuapp.com/basic_auth',
        auth: {
            user: 'admin',
            pass: 'admin'
        }
    }).its('requestHeaders.authorization').then(token => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: token
            }
        })
    })
})