
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentFormOnline");
  const customAlert = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");
  const customModal = document.getElementById("customModal");
  const modalCloseBtn = document.querySelector(".close-btn");
  const alertCloseBtn = document.querySelector(".close-alert");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alertMessage.innerHTML = ""; // Clear previous error messages
    customAlert.style.display = "none"; // Hide the custom alert

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value.trim();
    const service = document.getElementById("service").value;

    if (!name) {
      isValid = false;
      showAlert("Full Name is required.");
    }

    if (!phone || !validatePhoneNumber(phone)) {
      isValid = false;
      showAlert("Phone Number must be exactly 11 digits long.");
    }

    if (!email || !validateEmail(email)) {
      isValid = false;
      showAlert("Please enter a valid Email Address.");
    }

    if (!date) {
      isValid = false;
      showAlert("Preferred Date is required.");
    }

    if (!service) {
      isValid = false;
      showAlert("Please select a service.");
    }

    if (isValid) {
      // Show success modal
      customModal.style.display = "block";
      // Clear the form data
      form.reset();
    } else {
      customAlert.style.display = "block"; // Show the custom alert
    }
  });

  // Close modal on click
  modalCloseBtn.addEventListener("click", function () {
    customModal.style.display = "none";
  });

  // Close alert on click
  alertCloseBtn.addEventListener("click", function () {
    customAlert.style.display = "none";
  });

  function showAlert(message) {
    const errorElement = document.createElement("div");
    errorElement.textContent = message;
    alertMessage.appendChild(errorElement);
  }

  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }

  function validatePhoneNumber(phone) {
    const phonePattern = /^\d{11}$/;
    return phonePattern.test(phone);
  }
});
