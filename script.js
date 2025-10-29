// This file contains JavaScript for the SCM demo site
// ESLint will check this file for quality issues

document.addEventListener('DOMContentLoaded', function() {
    const demoButton = document.getElementById('demoButton');
    const demoMessage = document.getElementById('demoMessage');
    
    demoButton.addEventListener('click', function() {
        demoMessage.textContent = 'JavaScript is working! ESLint check passed.';
        demoMessage.style.color = '#27ae60';
        
        // Change button text temporarily
        const originalText = demoButton.textContent;
        demoButton.textContent = 'Clicked!';
        
        setTimeout(function() {
            demoButton.textContent = originalText;
        }, 1500);
    });
    
    // Additional demo functionality
    console.log('SCM Demo Site Loaded Successfully');
    
    // This line intentionally has a missing semicolon to test ESLint
    // Remove the semicolon below to break the build:
    const testVariable = 'ESLint test' // Add semicolon here
});

// Function to demonstrate code quality
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

// Display current date in console
const currentDate = new Date();
console.log('Page loaded on:', formatDate(currentDate));