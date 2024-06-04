 // Define the URL for the API endpoint where the image will be uploaded
        let url = "https://script.google.com/macros/s/AKfycbwem1w_5Pdlkf4aHwZUezc6Mf5SH3i9ZCCSQW4Q8VoD4IhjwiZMWkg3bWgwThjv3r1lRg/exec";
        // Get a reference to the file input element
        let file = document.querySelector("input");
        // Get a reference to the image element for preview
        let img = document.querySelector("img");
        
        // Add an event listener to the file input element for the "change" event
        file.addEventListener('change', () => {
            // Create a new FileReader object
            let fr = new FileReader();
            
            // Add an event listener to the FileReader object for the "loadend" event
            fr.addEventListener('loadend', () => {
                // Get the result of the FileReader object
                let res = fr.result;
                // Set the source attribute of the image element to the result
                img.src = res;
                // Split the result into an array using "base64," as the separator and get the second element
                let spt = res.split("base64,")[1];
                // Create an object with properties for base64 data, file type, and file name
                let obj = {
                    base64: spt,
                    type: file.files[0].type,
                    name: file.files[0].name
                };
                
                // Send a POST request to the specified URL with the object as the request body
                fetch(url, {
                    method: "POST",
                    body: JSON.stringify(obj)
                })
                // Wait for the response and convert it to text
                .then(r => r.text())
                // Log the response data to the console
                .then(data => console.log(data));
            });
            
            // Read the selected file as a data URL
            fr.readAsDataURL(file.files[0]);
        });