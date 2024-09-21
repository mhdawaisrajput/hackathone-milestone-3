document.getElementById(`resumeForm`)?.addEventListener(`submit`, function(event){
    event.preventDefault();
    
    const profileImageInput = document.getElementById('profileimage') as HTMLInputElement;

    const nameElement = document.getElementById(`name`) as HTMLInputElement
    const emailElement = document.getElementById(`email`) as HTMLInputElement
    const phoneElement = document.getElementById(`phone`) as HTMLInputElement
    const educationElement = document.getElementById(`education`) as HTMLInputElement
    const experienceElement = document.getElementById(`experience`) as HTMLInputElement
    const skillsElement = document.getElementById(`skills`) as HTMLInputElement

    if (profileImageInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        
        const skills = skillsElement.value

        const profileImageFile= profileImageInput.files?.[0];
        const profileimageURL = profileImageFile? URL.createObjectURL(profileImageFile) : '';
    

    const resumeOutput = `
    <h2>Resume</h2>
    ${profileimageURL ? `<img src="${profileimageURL}" alt="Profile Image" class="profileimage" ` : "" };
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone Number:</strong>${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>

    `;

    const rersumeOutputElement = document.getElementById('resumeOutput')
    if (rersumeOutputElement){
        rersumeOutputElement.innerHTML = resumeOutput
    } else {
        console.error(`The Resume elements are missing.!`);
    }   
} else { 
    console.error(`One or more resume elements are missing.!`)
}
});