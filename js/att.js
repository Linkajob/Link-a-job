// formSubmission.js

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Prepare form data
    var formData = new FormData();
    formData.append('entry.292968777', document.getElementById('name_input').value);
    formData.append('entry.2010175589', document.getElementById('age_input').value);
    formData.append('entry.775396678', document.getElementById('contact_input').value);
    formData.append('entry.1408469120', document.getElementById('email_input').value);
    formData.append('entry.1253649837', document.getElementById('permanent_address_input').value);
    formData.append('entry.1011077798', document.getElementById('current_address_input').value);
    formData.append('entry.1659501321', document.getElementById('worked_before_input').value);
    formData.append('entry.2020974035', document.getElementById('currently_working_input').value);
    formData.append('entry.1188174776', document.getElementById('training_input').value);
    formData.append('entry.274539895', document.getElementById('job_searching_input').value);

    // Perform form submission
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLScCrOMXwIK61PiTX3wB4s0MKHC2Hm0ICkQhnx4hdTqlRpzXPg/formResponse", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(new URLSearchParams(formData).toString());

    // Display thank-you message
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            document.getElementById("myForm").reset(); // Reset form fields
            document.getElementById("myForm").style.display = "none";
            document.getElementById("thankYouMessage").style.display = "block";
        }
    };
}

}