// Function to validate Firstname and Lastname
function validateName() {
  const fullnameInput = document.getElementById("name");
  const names = fullnameInput.value.trim().split(" ");
  const errorElement = document.getElementById("fullnameError");

  if (names.length !== 2) {
    errorElement.textContent = "Please enter both your Firstname and Lastname.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// Function to validate Student ID
function validateStudentID() {
  const studentIDInput = document.getElementById("stuid");
  const studentIDPattern = /^\d{10}$/;
  const errorElement = document.getElementById("studentIDError");

  if (!studentIDPattern.test(studentIDInput.value)) {
    errorElement.textContent = "Please enter a 10-digit Student ID.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// Function to validate University Email
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailPattern = /^.+@dome\.tu\.ac\.th$/;
  const errorElement = document.getElementById("emailError");

  if (!emailPattern.test(emailInput.value)) {
    errorElement.textContent =
      "Please provide a valid university email in the format 'xxx.yyy@dome.tu.ac.th'.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// Function to validate Dates
function validateDates() {
  const startDateInput = document.getElementById("startdate");
  const endDateInput = document.getElementById("enddate");
  const startDate = new Date(startDateInput.value);
  const endDate = new Date(endDateInput.value);
  const startDateError = document.getElementById("startDateError");
  const endDateError = document.getElementById("endDateError");
  if(startDateInput.value === "" || endDateInput.value === "") {
    startDateError.textContent = "Please enter a start date.";
    endDateError.textContent = "Please enter an end date.";
    return false;
  }
  // Check if the end date is later than the start date
  if (endDate <= startDate) {
    startDateError.textContent = "Start date must be earlier than the end date.";
    endDateError.textContent = "End date must be later than the start date.";
    return false;
  } else {
    startDateError.textContent = "";
    endDateError.textContent = "";
  }
  return true;
}

//Function to validate Description min-max
function validateDescription() {
  const descriptionInput = document.getElementById("description");
  const errorElement = document.getElementById("descriptionError");

  const descriptionValue = descriptionInput.value.trim();
  const minLength = 10; // Minimum length for the description
  const maxLength = 1000; // Maximum length for the description

  if (descriptionValue.length < minLength || descriptionValue.length > maxLength) {
    errorElement.textContent = `Please enter a description between ${minLength} and ${maxLength} characters.`;
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }

  return true;
}

// Function to validate ActivityTitle
function validateActivityTitle() {
  const activityTitleInput = document.getElementById("activity");
  const errorElement = document.getElementById("activityError");

  const activityTitleValue = activityTitleInput.value.trim();
  const minLength = 5; // Minimum length for the activity title

  if (activityTitleValue.length === 0) {
    errorElement.textContent = "Work/Activity Title is required.";
    return false;
  } else if (activityTitleValue.length < minLength) {
    errorElement.textContent = `Please enter a title with a minimum length of ${minLength} characters.`;
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }

  return true;
}

// function to validate Location
function validateLocation() {
  const locationInput = document.getElementById("location");
  const errorElement = document.getElementById("locationError");

  const locationValue = locationInput.value.trim();
  const minLength = 5; // Minimum length for the Location title

  if (locationValue.length === 0) {
    errorElement.textContent = "Location is required.";
    return false;
  } else if (locationValue.length < minLength) {
    errorElement.textContent = `Please enter a title with a minimum length of ${minLength} characters.`;
    return false; 
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }

  return true;
}

// Function to validate Type
function validateType() {
  const typeInput = document.getElementById("type");
  const errorElement = document.getElementById("typeError");

  if (typeInput.value === "") {
    errorElement.textContent = "Please select the Type of Work/Activity.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }

  return true;
}

// Function to validate AcademicYear
function validateAcademicYear() {
  const academicyearInput = document.getElementById("academicyear");
  const errorElement = document.getElementById("academicyearError");

  if (academicyearInput.value === "") {
    errorElement.textContent = "Please select the Academic Year.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }

  return true;
}

// Function to validate Semester
function validateSemester() {
  const semesterInput = document.getElementById("semester");
  const errorElement = document.getElementById("semesterError");

  if (semesterInput.value === "") {
    errorElement.textContent = "Please select the Semester.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }

  return true;
}


// Add event listeners for input events on required fields
const nameInput = document.getElementById("name");
nameInput.addEventListener("input", validateName);

const studentIDInput = document.getElementById("stuid");
studentIDInput.addEventListener("input", validateStudentID);

const emailInput = document.getElementById("email");
emailInput.addEventListener("input", validateEmail);

const startDateInput = document.getElementById("startdate");
startDateInput.addEventListener("input", validateDates);

const endDateInput = document.getElementById("enddate");
endDateInput.addEventListener("input", validateDates);

const activityTitleInput = document.getElementById("activity");
activityTitleInput.addEventListener("input", validateActivityTitle);

const descriptionInput = document.getElementById("description");
descriptionInput.addEventListener("input", validateDescription);

const locationInput = document.getElementById("location");
locationInput.addEventListener("input", validateLocation);

const typeInput = document.getElementById("type");
typeInput.addEventListener("input", validateType);

const semesterInput = document.getElementById("semester");
semesterInput.addEventListener("input", validateSemester);

function submitForm() {
  // Check if all required fields are filled
  if (!validateName() || 
    !validateStudentID() || 
    !validateEmail() || 
    !validateDates()||
    !validateDescription()||
    !validateActivityTitle()||
    !validateLocation()||
    !validateType()||
    !validateAcademicYear()||
    !validateSemester()) {
    alert("Please fill in all required fields.");
    return;
  }

  // Extract form values
  const name = document.getElementById("name").value;
  const stuid = document.getElementById("stuid").value;
  const email = document.getElementById("email").value;
  const activity = document.getElementById("activity").value;
  const type = document.getElementById("type").value;
  const academicyear = document.getElementById("academicyear").value;
  const semester = document.getElementById("semester").value;
  const startdate = document.getElementById("startdate").value;
  const enddate = document.getElementById("enddate").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;
 
 //show output
  const outputHtml = `
  <div class="outputdecoration" class="form-group">
    <h1>This is your data</h1>
    <hr>
    <p><strong>Name:<strong>${name}<p>
    <p><strong>Student ID:<strong>${stuid}<p>
    <p><strong>Email:<strong>${email}<p>
    <p><strong>Work/Activity Title:<strong>${activity}<p>
    <p><strong>Type of Work/Activity:<strong>${type}<p>
    <p><strong>Academic Year:<strong>${academicyear}<p>
    <p><strong>Semester:<strong>${semester}<p>
    <p><strong>Start Date/Time:<strong>${startdate}<p>
    <p><strong>End Date/Time:<strong>${enddate}<p>
    <p><strong>Location:<strong>${location}<p>
    <p><strong>Description:<strong>${description}<p>
    <hr>
  </div>
`;

  // Display output in the output div
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += outputHtml;
}