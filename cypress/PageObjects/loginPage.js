import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    static get url() {
        return "/#/login";
    }
    
    static get makeAppointmentBtn() {
        return cy.get("#btn-make-appointment"); 
    }
    
    static get usernameField() {
        return cy.get("#txt-username");
    }
    
    static get passwordField() {
        return cy.get("#txt-password");
    }
   
    static get loginBtn() {
        return cy.get("#btn-login");
    }
    
    static login(user, pass) {
        this.makeAppointmentBtn.click();
        this.usernameField.type(user);
        this.passwordField.type(pass);
        this.loginBtn.click();
    }
}