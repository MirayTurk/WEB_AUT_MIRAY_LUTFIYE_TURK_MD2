import { LoginPage } from "../PageObjects/loginPage";
import { AppointmentPage } from "../PageObjects/appointmentPage";

describe('CURA Healthcare Service Scenarios', () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  
  it("Make an Appointment", () => {
    // Click - Make Appointment
    // Set username and password fields with the demo account credentials
    // Click - Login
    LoginPage.login("John Doe", "ThisIsNotAPassword");
    
    // Setting the values
    AppointmentPage.fillAppointment(
      "Seoul CURA Healthcare Center",
      true,
      "30",
      "CURA Healthcare Service"
    );

    // Validate that previously set values are correct
    AppointmentPage.confirmationText.should("have.text", "Appointment Confirmation");
    // Facility - Seoul CURA Healthcare Center
    AppointmentPage.facilityValue.should("have.text", "Seoul CURA Healthcare Center");
    // Check - Apply for hospital readmission
    AppointmentPage.readmissionValue.should("have.text", "Yes");
    AppointmentPage.programValue.should("have.text", "Medicaid");
    // Set Date value by using the widget - 30
    AppointmentPage.dateValue.should("have.text", "30/04/2026");
    // Set comment - CURA Healthcare Service
    AppointmentPage.commentValue.should("have.text", "CURA Healthcare Service");
  });
  
  it.only("Appointment history empty", () => {
    LoginPage.login("John Doe", "ThisIsNotAPassword");
    
    // Click - Menu/Stack/Burger icon
    AppointmentPage.menuBtn.click();
    // Validate that the sidebar is active
    AppointmentPage.sidebar.should("have.class", "active");
    // Click - History
    AppointmentPage.historyLink.click();
    // Validate that - No appointment - is visible
    AppointmentPage.noAppointmentMsg.should("be.visible");
  });
});