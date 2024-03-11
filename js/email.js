  function submitForm() {
            // Get the form data
            var email = document.querySelector('.email-field').value;

            // Your Google Forms URL
            var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSewLnYukXxg28a8nheBA1e9EgkZfd4A2ZpauhW7jHMFh2BwJQ/formResponse";

            // Build the form data
            var formData = new FormData();
            formData.append("entry.1387919267", email);

            // Make an asynchronous POST request using Fetch API
            fetch(formUrl, {
                method: 'POST',
                body: formData,
                mode: 'no-cors', // Set mode to 'no-cors' to prevent CORS issues
            })
            .then(response => {
                // Handle the response as needed (optional)
                console.log(response);
            })
            .catch(error => {
                // Handle errors (optional)
                console.error('Error submitting the form:', error);
            });

            // Prevent the default form submission
            return false;
        }