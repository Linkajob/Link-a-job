// submitContactForm.js

function submitContactForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Prepare form data
    var formData = new FormData();
    formData.append('entry.577860268', document.getElementById('fullname').value);
    formData.append('entry.836599502', document.getElementById('phone').value);
    formData.append('entry.1006859686', document.getElementById('email').value);
    formData.append('entry.747094682', document.getElementById('company_name').value);
    formData.append('entry.2103665221', document.getElementById('comments').value);

    // Perform form submission
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLSfsWm_ADzFHVSlTi3Ms471lpU9F3yq9qkezRIPffRYWk_OHAw/formResponse", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(new URLSearchParams(formData).toString());

    // Display thank-you message
    document.getElementById("contactform2").reset(); // Reset form fields
    document.getElementById("contactform2").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
}
