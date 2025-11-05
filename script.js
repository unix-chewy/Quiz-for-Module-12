// Export functions for testing (only for Jest - won't run in browser)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        demoFunction,
        calculateUXScore,
        formatUIFeedback,
        fakeFailingTest
    };
}

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

function fakeFailingTest() {
    return false;
}

// ==================== SIMPLE VISUAL EFFECTS ====================

// 1. Add a rainbow gradient to the header text
function rainbowHeader() {
    const header = document.querySelector('.header-content h1');
    if (header) {
        header.style.background = 'linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF)';
        header.style.webkitBackgroundClip = 'text';
        header.style.webkitTextFillColor = 'transparent';
        header.style.backgroundSize = '400% 400%';
        header.style.animation = 'rainbow 3s ease infinite';
        
        // Add the animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { background-position: 0% 50% }
                50% { background-position: 100% 50% }
                100% { background-position: 0% 50% }
            }
        `;
        document.head.appendChild(style);
        
        console.log('🌈 Rainbow header applied!');
    }
}

// 2. Add floating animation to cards
function floatCards() {
    const cards = document.querySelectorAll('.critique-card, .demo-card');
    cards.forEach((card, index) => {
        card.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🎈 Floating cards applied!');
}

// 3. Add click effects to buttons
function addButtonEffects() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.6);
                transform: scale(0);
                animation: ripple 600ms linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('🌊 Button ripple effects applied!');
}

// 4. Add typewriter effect to header
function typewriterEffect() {
    const header = document.querySelector('.header-content h1');
    if (!header) return;
    
    const text = header.textContent;
    header.textContent = '';
    header.style.borderRight = '2px solid white';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            header.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            header.style.borderRight = 'none';
        }
    }
    setTimeout(type, 1000);
    
    console.log('⌨️ Typewriter effect applied!');
}

// 5. Add scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.filter = 'blur(0px)';
            }
        });
    }, { threshold: 0.1 });
    
    // Add initial styles for animated elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.filter = 'blur(5px)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
    });
    
    console.log('📜 Scroll animations applied!');
}

// 6. Add background particles (simple version)
function addParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    const colors = ['#4361ee', '#7209b7', '#4cc9f0', '#f72585', '#38b000'];
    
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 10 + 10;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            opacity: 0.3;
            animation: float-particle ${duration}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.4;
            }
            90% {
                opacity: 0.4;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(particlesContainer);
    
    console.log('✨ Background particles applied!');
}

// 7. Add interactive cursor trail
function addCursorTrail() {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, var(--primary), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        mix-blend-mode: difference;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    document.body.appendChild(trail);
    
    document.addEventListener('mousemove', (e) => {
        trail.style.left = (e.clientX - 10) + 'px';
        trail.style.top = (e.clientY - 10) + 'px';
        trail.style.opacity = '0.6';
    });
    
    document.addEventListener('mouseleave', () => {
        trail.style.opacity = '0';
    });
    
    console.log('🖱️ Cursor trail applied!');
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 JavaScript loaded successfully! Starting effects...');
    
    // Run all effects with a small delay to ensure DOM is ready
    setTimeout(() => {
        rainbowHeader();
        floatCards();
        addButtonEffects();
        typewriterEffect();
        initScrollAnimations();
        addParticles();
        addCursorTrail();
        
        console.log('🎉 All visual effects initialized!');
    }, 100);
    
    // Your existing demo button functionality
    const demoButton = document.getElementById('demoButton');
    if (demoButton) {
        demoButton.addEventListener('click', function() {
            const message = document.getElementById('demoMessage');
            if (message) {
                message.textContent = '✅ All JavaScript effects are working perfectly!';
                message.style.color = '#38b000';
                message.style.fontWeight = 'bold';
                
                // Add celebration effect
                document.body.style.animation = 'celebrate 0.5s ease';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 500);
                
                setTimeout(() => {
                    message.textContent = '';
                }, 3000);
            }
        });
    }
    
    // Add celebration animation
    const celebrationStyle = document.createElement('style');
    celebrationStyle.textContent = `
        @keyframes celebrate {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
    `;
    document.head.appendChild(celebrationStyle);
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
});

// Global error handler
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    console.log('Error details:', e);
});