// Export functions for testing
module.exports = {
    demoFunction,
    calculateUXScore,
    formatUIFeedback,
    fakeFailingTest
};

// Your existing JavaScript functions
function demoFunction() {
    return 'UI Analysis Tool is working!';
}

function calculateUXScore(issues) {
    const baseScore = 100;
    const penaltyPerIssue = 30;
    return Math.max(0, baseScore - (issues.length * penaltyPerIssue));
}

function formatUIFeedback(issue, severity) {
    return `Issue: ${issue} (Severity: ${severity})`;
}

// This function returns false intentionally to demonstrate a failing test
function fakeFailingTest() {
    return false; // Should return true to pass the test
}

// Your existing DOM manipulation code
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('demoButton')?.addEventListener('click', function() {
    const message = document.getElementById('demoMessage');
    if (message) {
        message.textContent = '✅ JavaScript is working correctly! Interactive features are functional.';
        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    }
});

// Browser test simulation
document.getElementById('runTests')?.addEventListener('click', function() {
    const results = document.getElementById('testResults');
    if (results) {
        results.innerHTML = `
            <div style="text-align: left;">
                <p><strong>Running Jest Tests...</strong></p>
                <p>✅ demoFunction exists - PASS</p>
                <p>✅ demoFunction returns correct value - PASS</p>
                <p>✅ calculateUXScore calculates correctly - PASS</p>
                <p>✅ formatUIFeedback formats correctly - PASS</p>
                <p>❌ fakeFailingTest - FAIL (Expected: true, Received: false)</p>
                <p><strong>Result: 4 passed, 1 failed</strong></p>
                <p style="margin-top: 15px; color: #dc3545;">GitHub Actions will block deployment until all tests pass!</p>
            </div>
        `;
        
        // Reset after 5 seconds
        setTimeout(() => {
            results.innerHTML = `
                <p><strong>Test Functions Available:</strong></p>
                <p>✅ demoFunction() - Returns welcome message</p>
                <p>✅ calculateUXScore(issues) - Calculates UX score</p>
                <p>✅ formatUIFeedback(issue, severity) - Formats feedback</p>
                <p>❌ fakeFailingTest() - Intentionally fails (returns false)</p>
            `;
        }, 5000);
    }
});

// Add unique eye-catching function - Floating particles animation
function createFloatingParticles() {
    const colors = ['#4361ee', '#7209b7', '#4cc9f0', '#f72585'];
    const container = document.querySelector('header');
    
    if (!container) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = '0.7';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        container.appendChild(particle);
        
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    let x = parseFloat(particle.style.left);
    let y = parseFloat(particle.style.top);
    let xSpeed = (Math.random() - 0.5) * 0.3;
    let ySpeed = (Math.random() - 0.5) * 0.3;
    
    function move() {
        x += xSpeed;
        y += ySpeed;
        
        // Bounce off edges
        if (x < 0 || x > 100) xSpeed *= -1;
        if (y < 0 || y > 100) ySpeed *= -1;
        
        // Keep particles within bounds
        x = Math.max(0, Math.min(100, x));
        y = Math.max(0, Math.min(100, y));
        
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        
        requestAnimationFrame(move);
    }
    move();
}

// Additional eye-catching function - Typewriter effect for header
function typewriterEffect() {
    const headerText = document.querySelector('.header-content h1');
    if (!headerText) return;
    
    const originalText = headerText.textContent;
    headerText.textContent = '';
    let i = 0;
    
    function type() {
        if (i < originalText.length) {
            headerText.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 1000);
}

// Interactive color theme switcher
function createThemeSwitcher() {
    const themeButton = document.createElement('button');
    themeButton.innerHTML = '<i class="fas fa-palette"></i>';
    themeButton.style.position = 'fixed';
    themeButton.style.bottom = '20px';
    themeButton.style.right = '20px';
    themeButton.style.zIndex = '1000';
    themeButton.style.background = 'var(--primary)';
    themeButton.style.color = 'white';
    themeButton.style.border = 'none';
    themeButton.style.borderRadius = '50%';
    themeButton.style.width = '50px';
    themeButton.style.height = '50px';
    themeButton.style.cursor = 'pointer';
    themeButton.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    themeButton.style.fontSize = '1.2rem';
    themeButton.style.transition = 'all 0.3s ease';
    
    themeButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    themeButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    let currentTheme = 0;
    const themes = [
        { primary: '#4361ee', secondary: '#7209b7' },
        { primary: '#f72585', secondary: '#b5179e' },
        { primary: '#4cc9f0', secondary: '#4895ef' },
        { primary: '#38b000', secondary: '#007200' }
    ];
    
    themeButton.addEventListener('click', function() {
        currentTheme = (currentTheme + 1) % themes.length;
        const theme = themes[currentTheme];
        
        document.documentElement.style.setProperty('--primary', theme.primary);
        document.documentElement.style.setProperty('--secondary', theme.secondary);
        
        // Show theme change notification
        showThemeNotification(`Theme ${currentTheme + 1} applied`);
    });
    
    document.body.appendChild(themeButton);
}

function showThemeNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.background = 'var(--primary)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '25px';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    notification.style.fontWeight = '500';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Run all functions on page load
window.addEventListener('load', function() {
    createFloatingParticles();
    typewriterEffect();
    createThemeSwitcher();
    
    // Initialize intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Console welcome message
    console.log('%c🚀 UI Analysis Tool Loaded Successfully!', 'color: #4361ee; font-size: 16px; font-weight: bold;');
    console.log('%c✨ Features: Floating particles, Typewriter effect, Theme switcher, Jest testing', 'color: #7209b7; font-size: 12px;');
});