function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Prepare form data
    var formData = new FormData();
    formData.append('entry.1416021770', document.getElementById('fullname_input').value);
    formData.append('entry.505424185', document.getElementById('phone_input').value);
    formData.append('entry.64164457', document.getElementById('business_name_input').value);
    formData.append('entry.915639808', document.getElementById('business_pan_input').value);
    formData.append('entry.113038457', document.getElementById('job_post_input').value);
    formData.append('entry.1768325548', document.getElementById('gender_input').value);
    formData.append('entry.1191052732', document.getElementById('employees_required_input').value);
    formData.append('entry.1378794811', document.getElementById('salary_range_input').value);
    formData.append('entry.2123240999', document.getElementById('time_duration_input').value);
    formData.append('entry.1812240372', document.getElementById('food_accommodation_input').value);
    formData.append('entry.348049359', document.getElementById('requirements_input').value);

    // Perform form submission
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLSc7oG_fUTsmNgQOkulyJafBPW3WdVli8sT4PFrIY7QtyEY6Rg/formResponse", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(new URLSearchParams(formData).toString());

    // Display thank-you message
    document.getElementById("myForm").reset(); // Reset form fields
    document.getElementById("myForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
}
