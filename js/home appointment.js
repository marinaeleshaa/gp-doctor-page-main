// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('appointmentFormHome').addEventListener('submit', function (event) {
//     let form = event.target;
//     let isValid = true;
//     let messages = [];

//     // Full Name Validation
//     let name = form.name.value.trim();
//     if (name === "") {
//       isValid = false;
//       messages.push("Full Name is required.");
//     }

//     // Phone Number Validation
//     let phone = form.phone.value.trim();
//     let phonePattern = /^\d{11}$/;
//     if (phone === "") {
//       isValid = false;
//       messages.push("Phone Number is required.");
//     } else if (!phonePattern.test(phone)) {
//       isValid = false;
//       messages.push("Phone Number must be 11 digits.");
//     }

//     // Email Address Validation (optional but if provided, must be valid)
//     let email = form.email.value.trim();
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email !== "" && !emailPattern.test(email)) {
//       isValid = false;
//       messages.push("Email Address is not valid.");
//     }

//     // Home Address Validation
//     let address = form.address.value.trim();
//     if (address === "") {
//       isValid = false;
//       messages.push("Home Address is required.");
//     }

//     // Preferred Date Validation
//     let date = form.date.value.trim();
//     if (date === "") {
//       isValid = false;
//       messages.push("Preferred Date is required.");
//     }

//     // Reason for Visit Validation
//     let reason = form.reason.value.trim();
//     if (reason === "") {
//       isValid = false;
//       messages.push("Reason for Visit is required.");
//     }

//     if (!isValid) {
//       event.preventDefault();
//       alert(messages.join("\n"));
//     }
//   });
// });





// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('appointmentFormHome');
//   const errorAlert = document.getElementById('errorAlert');
//   const errorMessage = document.querySelector('.error-message');
//   const successAlert = document.getElementById('alert-success');
//   const closeErrorAlert = document.querySelector('#errorAlert .close-btn');
//   const closeSuccessAlert = document.querySelector('#alert-success .close-btn');

//   closeErrorAlert.addEventListener('click', () => {
//       errorAlert.style.display = 'none';
//   });

//   closeSuccessAlert.addEventListener('click', () => {
//       successAlert.classList.add('d-none');
//   });

//   form.addEventListener('submit', function(event) {
//       event.preventDefault();
//       let valid = true;
//       let errorMessages = [];

//       // Validate full name
//       const name = document.getElementById('name').value.trim();
//       if (name === '') {
//           valid = false;
//           errorMessages.push('Full Name is required.');
//       }
//  // Validate phone number
//  const phone = form.phone.value.trim();
//  const phonePattern = /^\d{11}$/;
//  if (phone === '') {
//      valid = false;
//      errorMessages.push('Phone Number is required.');
//  } else if (!phonePattern.test(phone)) {
//      valid = false;
//      errorMessages.push('Phone Number must be 11 digits.');
//  }

//       // Validate email (optional but if provided, must be valid)
//       const email = document.getElementById('email').value.trim();
//       if (email !== '') {
//           const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//           if (!emailPattern.test(email)) {
//               valid = false;
//               errorMessages.push('Please enter a valid email address.');
//           }
//       }

//       // Validate home address
//       const address = document.getElementById('address').value.trim();
//       if (address === '') {
//           valid = false;
//           errorMessages.push('Home Address is required.');
//       }

//       // Validate preferred date
//       const date = document.getElementById('date').value.trim();
//       if (date === '') {
//           valid = false;
//           errorMessages.push('Preferred Date is required.');
//       }

//       // Validate reason for visit
//       const reason = document.getElementById('reason').value.trim();
//       if (reason === '') {
//           valid = false;
//           errorMessages.push('Reason for Visit is required.');
//       }

//       // Show error or success messages
//       if (!valid) {
//           errorAlert.style.display = 'block';
//           errorMessage.innerHTML = errorMessages.map(message => `<p>${message}</p>`).join('');
//       } else {
//           errorAlert.style.display = 'none';
//           errorMessage.innerHTML = '';
//           successAlert.classList.remove('d-none');
//           form.reset();
//       }
//   });
// });





document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('appointmentFormHome');
  const errorAlert = document.getElementById('errorAlert');
  const errorMessage = document.querySelector('.error-message');
  const successAlert = document.getElementById('alert-success');
  const closeErrorAlert = document.querySelector('#errorAlert .close-btn');
  const closeSuccessAlert = document.querySelector('#alert-success .close-btn');

  closeErrorAlert.addEventListener('click', () => {
      errorAlert.style.display = 'none';
  });

  closeSuccessAlert.addEventListener('click', () => {
      successAlert.classList.add('d-none');
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      let valid = true;
      let errorMessages = [];

      // Validate full name
      const name = document.getElementById('name').value.trim();
      if (name === '') {
          valid = false;
          errorMessages.push('Full Name is required.');
      }

      // Validate phone number
      const phone = form.phone.value.trim();
      const phonePattern = /^\d{11}$/;
      if (phone === '') {
          valid = false;
          errorMessages.push('Phone Number is required.');
      } else if (!phonePattern.test(phone)) {
          valid = false;
          errorMessages.push('Phone Number must be 11 digits.');
      }

      // Validate email (optional but if provided, must be valid)
      const email = document.getElementById('email').value.trim();
      if (email !== '') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(email)) {
              valid = false;
              errorMessages.push('Please enter a valid email address.');
          }
      }

      // Validate home address
      const address = document.getElementById('address').value.trim();
      if (address === '') {
          valid = false;
          errorMessages.push('Home Address is required.');
      }

      // Validate preferred date
      const date = document.getElementById('date').value.trim();
      if (date === '') {
          valid = false;
          errorMessages.push('Preferred Date is required.');
      }

      // Validate reason for visit
      const reason = document.getElementById('reason').value.trim();
      if (reason === '') {
          valid = false;
          errorMessages.push('Reason for Visit is required.');
      }

      // Show error or success messages
      if (!valid) {
          errorAlert.style.display = 'block';
          errorMessage.innerHTML = errorMessages.map(message => `<p>${message}</p>`).join('');
      } else {
          errorAlert.style.display = 'none';
          errorMessage.innerHTML = '';
          successAlert.classList.remove('d-none');
          form.reset();
      }
  });
});
