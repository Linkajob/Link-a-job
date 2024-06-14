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
        const code = document.getElementById('certificateCode').value.trim().toLowerCase().replace(/\s+/g, ''); // Trim, convert to lowercase, and remove spaces
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
                    <button class="validator-button" onclick="showShareOptions('${cert.certificate}', '${cert.name}', '${cert.course}', '${cert.completionDate}', '${cert.issuer}')">Share Certificate</button>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `<p>Certificate not found. Please try again.</p>`;
        }
    }

    // Function to show share options
    function showShareOptions(certificateUrl, name, course, completionDate, issuer) {
        const shareData = {
            title: 'Certificate of Completion',
            text: `Check out this certificate of ${name} for completing the ${course} on ${completionDate}, issued by ${issuer}.`,
            url: certificateUrl
        };

        let shareLinks = `
            <div class="share-buttons">
                <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text)}%20${encodeURIComponent(shareData.url)}" target="_blank">Share on WhatsApp</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}&quote=${encodeURIComponent(shareData.text)}" target="_blank">Share on Facebook</a>
                <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}%20${encodeURIComponent(shareData.url)}" target="_blank">Share on Twitter</a>
                <a href="mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodeURIComponent(shareData.text)}%20${encodeURIComponent(shareData.url)}">Share via Email</a>
                <a href="sms:?body=${encodeURIComponent(shareData.text)}%20${encodeURIComponent(shareData.url)}">Share via SMS</a>
            </div>
        `;

        // Display the share links in a modal
        const modalContent = `
            <div id="shareModal" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center;">
                <div style="background:#fff; padding:20px; border-radius:10px; text-align:center;">
                    <h2>Share Certificate</h2>
                    ${shareLinks}
                    <button onclick="document.getElementById('shareModal').remove()">Close</button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalContent);
    }

    // Attach event listener to the Validate button
    document.addEventListener('DOMContentLoaded', function() {
        const validateButton = document.getElementById('validateButton');
        validateButton.addEventListener('click', validateCertificate);
    });

})();
