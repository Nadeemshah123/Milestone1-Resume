// Declare variables once
let toggleButton = document.getElementById('button');
let skills = document.getElementById('skills');

// Handle possible null references
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        console.log('Button clicked');
    });
}

if (skills) {
    skills.classList.add('active');
    // Example usage
    console.log(skills.textContent);
}
