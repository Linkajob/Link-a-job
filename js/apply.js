function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Prepare form data
    var formData = new FormData();
    formData.append('entry.109278719', document.getElementById('fullname_input').value);
    formData.append('entry.211305011', document.getElementById('age_input').value);
    formData.append('entry.353576013', document.getElementById('email_input').value);
    formData.append('entry.325486052', document.getElementById('contact_input').value);
    formData.append('entry.1170473186', document.getElementById('location_input').value);
    formData.append('entry.1227201062', document.getElementById('jobcode_input').value);

    // Perform form submission
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLScJlO0q0I3kn_2oeZcOYBxXk6XnTahoG88xA_TFzdoKq_JBKg/formResponse", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(new URLSearchParams(formData).toString());

    // Display thank-you message
    document.getElementById("contactform2").reset(); // Reset form fields
    document.getElementById("contactform2").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
}
