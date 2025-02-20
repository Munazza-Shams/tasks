
//contact us

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');
    
    // Check if all fields are filled out
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required.";
        formMessage.style.color = "red";
        return false;
    }

    // Check if the email is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return false;
    }

    // If everything is fine
    formMessage.textContent = "Thank you for contacting us! We will get back to you soon.";
    formMessage.style.color = "green";
    document.getElementById('contact-form').reset();  // Reset form
    return false;  // Prevent actual form submission (for demo purposes)
}
// 

//admin block 
// Show Content for each section
function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
  
  // Functions for adding new students, courses, and staff (demo)
  function addStudent() {
    alert("Add a new student here.");
  }
  
  function addCourse() {
    alert("Add a new course here.");
  }
  
  function addStaff() {
    alert("Add a new staff member here.");
  }
  