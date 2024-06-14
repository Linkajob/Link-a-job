(function() {
    // Certificate data object
    const certificates = {
        "la001j": {
            name: "Pradip Thapa Chettri",
            image: "la001j.jpg",
            course: "Three-Day Basic Digital Marketing Course",
            certificate: "la001j.pdf",
            completionDate: "May 15, 2024",
            duration: "3 hours (approximately)",
            issuer: "Link A Job",
            verified: true
        },
        "la002j": {
            name: "Ashish Neupane",
            image: "la002j.jpg",
            course: "Three-Day Basic Digital Marketing Course",
            certificate: "la002j.pdf",
            completionDate: "May 15, 2024",
            duration: "3 hours (approximately)",
            issuer: "Link A Job",
            verified: true
        }
        // Add more certificates here following the same format
    };

    // Function to validate certificate
    function validateCertificate() {
        const code = document.getElementById('certificateCode').value.trim(); // Trim to remove extra whitespace
        const resultDiv = document.getElementById('result');

        if (certificates[code]) {
            const cert = certificates[code];
            resultDiv.innerHTML = `
                <div class="validator-profile">
                    <img src="${cert.image}" alt="${cert.name}">
                    <h2>${cert.name}</h2>
                    <p>${cert.verified ? 'Verified Account' : 'Unverified Account'}</p>
                    <p>Completed <strong>${cert.course}</strong></p>
                    <p>Completion Date: ${cert.completionDate}</p>
                    <p>Duration: ${cert.duration}</p>
                    <p>Issuer: ${cert.issuer}</p>
                    <a href="${cert.certificate}" target="_blank">View Certificate</a>
                    <button class="validator-button" onclick="shareCertificate('${cert.certificate}')">Share Certificate</button>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `<p>Certificate not found. Please try again.</p>`;
        }
    }

    // Function to share certificate
    function shareCertificate(certificate) {
        const shareData = {
            title: 'Certificate',
            text: 'Check out this certificate!',
            url: certificate
        };

        try {
            navigator.share(shareData).then(() => {
                console.log('Shared successfully');
            }).catch((error) => {
                console.error('Error sharing', error);
            });
        } catch (error) {
            console.error('Share API not supported', error);
        }
    }

    // Attach event listener to the Validate button
    document.addEventListener('DOMContentLoaded', function() {
        const validateButton = document.getElementById('validateButton');
        validateButton.addEventListener('click', validateCertificate);
    });

})();
