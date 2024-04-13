// submitc.js

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Prepare form data
    var formData = new FormData();
    formData.append('entry.1967489372', document.getElementById('fullname_input').value);
    formData.append('entry.1206673248', document.getElementById('age_input').value);
    formData.append('entry.1661748775', document.getElementById('phone_input').value);
    formData.append('entry.1177357165', document.getElementById('email_input').value);
    formData.append('entry.1422659575', document.getElementById('location_input').value);
    formData.append('entry.1921901938', document.getElementById('job_type_input').value);

    // Perform form submission
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLScRj4K-kSC-RlmoUiIFHGgZQ7H6Ld-TyIfAhudPa_icV5AA2Q/formResponse", true);
    xhr.send(new URLSearchParams(formData).toString());

    // Display thank-you message
    document.getElementById("myForm").reset(); // Reset form fields
    document.getElementById("thankYouMessage").style.display = "block";
}

// Attach the submitForm function to the form's submit event
document.getElementById("myForm").addEventListener("submit", submitForm);
