// Predefined list of valid certificates with details
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
        verifiedAccount: false,
        post: "Social Media Manager",
        issuer: {
            name: "Link A Job",
            link: "https://www.linkajob.com/"
        },
        reasonForLeave: "Personal Reasons",
        award: "Employee of the Year 2023"
    }
};

// Function to validate and display certificate details
function validateCertificate() {
    const code = document.getElementById("certificateCode").value.trim().toLowerCase(); // Convert input to lowercase
    const resultDiv = document.getElementById("result");

    const certificateKeys = Object.keys(certificates); // Get all certificate keys

    // Convert all keys to lowercase for comparison
    const lowerCaseKeys = certificateKeys.map(key => key.toLowerCase());

    if (code === "") {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter a certificate code.</p>";
    } else if (lowerCaseKeys.includes(code)) {
        // Find the original certificate key corresponding to the lowercase input
        const certKey = certificateKeys[lowerCaseKeys.indexOf(code)];
        const cert = certificates[certKey];

        resultDiv.innerHTML = `
            <div>
                <img src="${cert.image}" alt="${cert.name}'s photo" width="100" height="100">
                <h2>${cert.name}</h2>
                <p style="font-size: 0.8em; color: #777;">verified account</p> <!-- Small text for verified account -->
                <p><strong>Work Period:</strong> ${cert.workPeriod}</p>
                <p><strong>Entry Date:</strong> ${cert.entryDate}</p>
                <p><strong>Post:</strong> ${cert.post}</p>
                <p><strong>Issuer:</strong> <a href="${cert.issuer.link}" target="_blank">${cert.issuer.name}</a></p>
                <p><strong>Reason for Leave:</strong> ${cert.reasonForLeave}</p> <!-- Display reason for leave -->
                <p><strong>Award:</strong> ${cert.award}</p> <!-- Display award -->
            </div>
        `;
    } else {
        resultDiv.innerHTML = "<p style='color: red;'>Invalid certificate code.</p>";
    }
}

// Event listener for the "Validate" button click
document.getElementById("validateButton").addEventListener("click", validateCertificate);

// Event listener for the "Enter" key press (key code 13)
document.getElementById("certificateCode").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if the "Enter" key is pressed
        validateCertificate(); // Trigger the certificate validation
    }
});
