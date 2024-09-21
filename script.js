var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profileImageInput = document.getElementById('profileimage');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profileImageInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profileImageFile = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profileimageURL = profileImageFile ? URL.createObjectURL(profileImageFile) : '';
        var resumeOutput = "\n    <h2>Resume</h2>\n    ".concat(profileimageURL ? "<img src=\"".concat(profileimageURL, "\" alt=\"Profile Image\" class=\"profileimage\" ") : "", ";\n    <p><strong>Name:</strong>").concat(name_1, "</p>\n    <p><strong>Email:</strong>").concat(email, "</p>\n    <p><strong>Phone Number:</strong>").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n    ");
        var rersumeOutputElement = document.getElementById('resumeOutput');
        if (rersumeOutputElement) {
            rersumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The Resume elements are missing.!");
        }
    }
    else {
        console.error("One or more resume elements are missing.!");
    }
});
