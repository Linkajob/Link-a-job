const certificates = {
    "la001j": {
        name: "Bishal Gaire",
        workPeriod: "February 2023 - September 2024",
        entryDate: "2023-02-01",
        image: "images/bishal.png",
        verifiedAccount: true,
        post: "Receptionist",
        issuer: {
            name: "Link A Job.",
            link: "https://www.linkajob.com"
        },
        reasonForLeave: "To Pursue Higher Education, Under good terms",
        award: "Employee of the Year 2023"
    },
    "la0w02j": {
        name: "Bishal Gaire",
        workPeriod: "February 2023 - September 2024",
        entryDate: "2023-02-05",
        image: "images/bishal.png",
        verifiedAccount: true,
        post: "Social Media Manager",
        issuer: {
            name: "Link A Job",
            link: "https://www.linkajob.com/"
        },
        reasonForLeave: "Personal Reasons",
        award: "Employee of the Year 2023"
    },
    "la007g8j": {
        name: "Janak Panthi",
        volunteerPeriod: "January 2024 - November 2024",  
        entryDate: "2024-01-01",
        image: "images/janak.png",
        verifiedAccount: true,
        post: "Volunteer",
        issuer: {
            name: "Link A Job.",
            link: "https://www.linkajob.com"
        },
        reasonForLeave: "To Pursue Higher Education, Under good terms",
        award: "Youth Changemaker Award"
    }
};

// Function to validate and display certificate details
function validateCertificate(code) {
    const resultDiv = document.getElementById("result");

    const certificateKeys = Object.keys(certificates); // Get all certificate keys
    const lowerCaseKeys = certificateKeys.map(key => key.toLowerCase());

    if (code === "") {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter a certificate code.</p>";
    } else if (lowerCaseKeys.includes(code)) {
        // Find the original certificate key corresponding to the lowercase input
        const certKey = certificateKeys[lowerCaseKeys.indexOf(code)];
        const cert = certificates[certKey];

        // Determine which period to display
        const period = cert.volunteerPeriod || cert.workPeriod; // Use volunteerPeriod if available, else fallback to workPeriod

        resultDiv.innerHTML = `
            <div>
                <img src="${cert.image}" alt="${cert.name}'s photo" width="100" height="100">
                <h2>${cert.name}</h2>
                <p style="font-size: 0.8em; color: #777;">${cert.verifiedAccount ? '✔ Verified Account' : ''}</p>
                <p><strong>Work Period:</strong> ${period}</p> <!-- Display the appropriate period -->
                <p><strong>Entry Date:</strong> ${cert.entryDate}</p>
                <p><strong>Post:</strong> ${cert.post}</p>
                <p><strong>Issuer:</strong> <a href="${cert.issuer.link}" target="_blank">${cert.issuer.name}</a></p>
                <p><strong>Reason for Leave:</strong> ${cert.reasonForLeave}</p>
                <p><strong>Award:</strong> ${cert.award}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = "<p style='color: red;'>Invalid certificate code.</p>";
    }
}

// Function to get the certificate code from URL query parameters
function getCertificateCodeFromURL() {
    const urlParams = new URLSearchParams(window.location.search); // Get the query string
    const code = urlParams.get('code'); // Get the 'code' parameter
    if (code) {
        validateCertificate(code.toLowerCase()); // Automatically validate the certificate from URL
    }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", function() {
    getCertificateCodeFromURL(); // Extract and validate certificate code from the URL

    // Add event listener for manual entry button
    const validateButton = document.getElementById("validateButton");
    if (validateButton) {
        validateButton.addEventListener("click", function() {
            const codeInput = document.getElementById("certificateCode").value.trim().toLowerCase();
            validateCertificate(codeInput); // Validate the manually entered code
        });
    }
});
