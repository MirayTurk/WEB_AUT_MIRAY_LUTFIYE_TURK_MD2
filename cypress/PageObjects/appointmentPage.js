import { BasePage } from "./BasePage";

export class AppointmentPage extends BasePage {
  
    static get facilitySelect() {
      return cy.get("#combo_facility");
    }

    static get readmissionCheck() {
      return cy.get("#chk_hospotal_readmission");
    }

    static get medicaidRadio() {
      return cy.get("#radio_program_medicaid");
    }

    static get dateInput() {
      return cy.get("#txt_visit_date");
    }

    static get datePickerDay() {
      return cy.get(".datepicker-days .day");
    }

    static get commentInput() {
      return cy.get("#txt_comment");
    }

    static get bookBtn() {
      return cy.get("#btn-book-appointment");
    }
    
    static get navigationMenu() {
      return cy.get("#menu-toggle");
    }

    static get sideWrapper() {
      return cy.get("#sidebar-wrapper"); 
    }

    static get historyTab() {
      return cy.contains("History");
    }

    static get validationHeader() {
      return cy.get("h2");
    }

    static get verifyFacility() {
      return cy.get("#facility");
    }

    static get verifyReadmission() {
      return cy.get("#hospital_readmission");
    }

    static get verifyProgram() {
      return cy.get("#program");
    }

    static get verifyDate() {
      return cy.get("#visit_date");
    }

    static get verifyComment() {
      return cy.get("#comment");
    }

    static get emptyHistoryAlert() {
      return cy.contains("No appointment");
    }

    static submitAppointmentDetails(facility, readmission, dateDay, comment) {
      this.facilitySelect.select(facility);
      if (readmission) this.readmissionCheck.check();
      this.medicaidRadio.click();
    
      this.dateInput.click();
    
      this.datePickerDay.not(".old").not(".new").contains(dateDay).click();
    
      this.commentInput.type(comment, { force: true });

      this.bookBtn.click();
}
}
