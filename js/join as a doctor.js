
// validation join as Dr with loginpopup

document.addEventListener("DOMContentLoaded", function() {
  const registrationForm = document.getElementById("doctorRegistrationForm");
  const errorAlert = document.getElementById("errorAlert");
  const errorMessage = errorAlert.querySelector(".error-message");

  registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Perform validation
    let isValid = true;
    let messages = [];
    
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const emailAddress = document.getElementById("emailAddress").value.trim();
    const homeAddress = document.getElementById("homeAddress").value.trim();
    const specialization = document.getElementById("specialization").value;
    const experience = document.getElementById("experience").value;
    const licenseNumber = document.getElementById("licenseNumber").value.trim();
    const photoUpload = document.getElementById("photoUpload").files.length > 0;

    if (!firstName) {
      isValid = false;
      messages.push("First Name is required.");
    }

    if (!lastName) {
      isValid = false;
      messages.push("Last Name is required.");
    }

    if (!password) {
      isValid = false;
      messages.push("Password is required.");
    } else if (password !== confirmPassword) {
      isValid = false;
      messages.push("Passwords do not match.");
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)) {
      isValid = false;
      messages.push("Password does not meet the requirements.");
    }

    if (!phoneNumber) {
      isValid = false;
      messages.push("Phone Number is required.");
    }

    if (!emailAddress) {
      isValid = false;
      messages.push("Email Address is required.");
    }

    if (!homeAddress) {
      isValid = false;
      messages.push("Home Address is required.");
    }

    if (!specialization) {
      isValid = false;
      messages.push("Specialization is required.");
    }

    if (!experience) {
      isValid = false;
      messages.push("Experience is required.");
    }

    if (!licenseNumber) {
      isValid = false;
      messages.push("Medical License Number is required.");
    }

    if (!photoUpload) {
      isValid = false;
      messages.push("Photo upload is required.");
    }

    if (isValid) {
      // Hide error alert
      errorAlert.style.display = "none";
      // Submit the form data (Here you can handle the form submission, e.g., sending it to a server)
      // For now, we'll just display the login popup
      const loginPopup = new bootstrap.Modal(document.getElementById("loginPopup"));
      loginPopup.show();
    } else {
      // Show error messages
      errorMessage.innerHTML = messages.join("<br>");
      errorAlert.style.display = "block";
    }
  });

  // Close the error alert
  const closeBtn = errorAlert.querySelector(".close-btn");
  closeBtn.addEventListener("click", function() {
    errorAlert.style.display = "none";
  });
});


