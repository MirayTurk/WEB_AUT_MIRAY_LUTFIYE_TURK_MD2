import { LoginPage } from "../PageObjects/loginPage";
import { AppointmentPage } from "../PageObjects/appointmentPage";

describe('CURA Healthcare Service - Booking and History Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  
  it("Should successfully book a new medical appointment", () => {
    // Click - Make Appointment
    // Set username and password fields with the demo account credentials
    // Click - Login
    LoginPage.performLogin("John Doe", "ThisIsNotAPassword");
    // Setting the values
    AppointmentPage.submitAppointmentDetails(
      "Seoul CURA Healthcare Center",
      true,
      "30",
      "CURA Healthcare Service"
    );
    // Validate that previously set values are correct
    AppointmentPage.validationHeader.should("have.text", "Appointment Confirmation");
    // Facility - Seoul CURA Healthcare Center
    AppointmentPage.verifyFacility.should("have.text", "Seoul CURA Healthcare Center");
    // Check - Apply for hospital readmission
    AppointmentPage.verifyReadmission.should("have.text", "Yes");
    AppointmentPage.verifyProgram.should("have.text", "Medicaid");
    // Set Date value by using the widget - 30
    AppointmentPage.verifyDate.should("have.text", "30/04/2026");
    // Set comment - CURA Healthcare Service
    AppointmentPage.verifyComment.should("have.text", "CURA Healthcare Service");
  });
  it("Should display empty appointment history for new logins", () => {
    LoginPage.performLogin("John Doe", "ThisIsNotAPassword");
    
    // Click - Menu/Stack/Burger icon
    AppointmentPage.navigationMenu.click();
    // Validate that the sidebar is active
    AppointmentPage.sideWrapper.should("have.class", "active");
    // Click - History
    AppointmentPage.historyTab.click();
    // Validate that - No appointment - is visible
    AppointmentPage.emptyHistoryAlert.should("be.visible");
  });
});
