export class LoginPage{

    enterUsername(){
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('test@kennect.io')
      
    }

    enterPassword(){
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Qwerty@1234')
    }

    clickLogin(){
        cy.get('.jss9 > .MuiButton-contained > .MuiButton-label').click()
    }

}