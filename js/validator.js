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

document.getElementById("validateButton").addEventListener("click", function () {
    const code = document.getElementById("certificateCode").value.trim();
    const resultDiv = document.getElementById("result");

    if (code === "") {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter a certificate code.</p>";
    } else if (certificates.hasOwnProperty(code)) {
        const cert = certificates[code];
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
});
