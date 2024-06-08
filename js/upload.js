
    // Define the URL for the API endpoint where the CV will be uploaded
    let cvUploadUrl = "https://script.google.com/macros/s/AKfycbwem1w_5Pdlkf4aHwZUezc6Mf5SH3i9ZCCSQW4Q8VoD4IhjwiZMWkg3bWgwThjv3r1lRg/exec";

    // Get a reference to the CV upload input element
    let cvInput = document.getElementById('cv_upload');
    // Get a reference to the CV preview image element
    let cvPreview = document.getElementById('cv_preview');

    // Add an event listener to the CV upload input for the "change" event
    cvInput.addEventListener('change', () => {
        // Check if any file is selected
        if (cvInput.files && cvInput.files[0]) {
            // Create a new FileReader object
            let reader = new FileReader();

            // Set up the FileReader to display the CV preview
            reader.onload = function (e) {
                cvPreview.style.display = 'block';
                cvPreview.src = e.target.result;
            }

            // Read the selected file as a data URL
            reader.readAsDataURL(cvInput.files[0]);
        }
    });

    // Function to upload CV data
    function uploadCV() {
        // Get the selected CV file
        let cvFile = cvInput.files[0];
        // Check if a file is selected
        if (cvFile) {
            // Create a FormData object to send CV data
            let formData = new FormData();
            formData.append('cv', cvFile);

            // Send a POST request to upload the CV
            fetch(cvUploadUrl, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Handle successful CV upload
                    console.log('CV uploaded successfully.');
                    // After successful upload, submit the form
                    document.getElementById('contactform2').submit();
                } else {
                    // Handle CV upload errors
                    console.error('CV upload failed.');
                }
            })
            .catch(error => {
                console.error('Error uploading CV:', error);
            });
        }
    }

