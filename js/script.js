// js/script.js

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initMobileMenu();
    initScrollEffects();
    initSmoothScrolling();
    loadServices();
    loadStats();
    
    // Console log for debugging
    console.log('Atarifix Consulting website loaded successfully!');
    console.log('Using Montserrat font family');
});

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
}

// Header scroll effect
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load services from data
function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    // Check if we have data in websiteData object
    if (typeof websiteData !== 'undefined' && websiteData.services) {
        const services = websiteData.services;
        
        servicesGrid.innerHTML = services.map(service => `
            <div class="service-card">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="#" class="btn" style="margin-top: 20px;">Learn More</a>
            </div>
        `).join('');
    } else {
        // Fallback if data.js isn't loaded
        servicesGrid.innerHTML = `
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-paint-brush"></i>
                </div>
                <h3>Graphic Design</h3>
                <p>Professional design services to create compelling visual content.</p>
                <a href="#" class="btn" style="margin-top: 20px;">Learn More</a>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-bullhorn"></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>Strategic online marketing to increase visibility and generate leads.</p>
                <a href="#" class="btn" style="margin-top: 20px;">Learn More</a>
            </div>
            <div class="service-card">
                <div class="service-icon">
                    <i class="fas fa-cloud"></i>
                </div>
                <h3>Cloud Solutions</h3>
                <p>Secure and scalable cloud infrastructure for business growth.</p>
                <a href="#" class="btn" style="margin-top: 20px;">Learn More</a>
            </div>
        `;
    }
}

// Load stats from data
function loadStats() {
    const statsGrid = document.querySelector('.stats-grid');
    if (!statsGrid) return;
    
    // Check if we have data in websiteData object
    if (typeof websiteData !== 'undefined' && websiteData.stats) {
        const stats = websiteData.stats;
        
        statsGrid.innerHTML = stats.map(stat => `
            <div class="stat-box">
                <div class="stat-number">${stat.number}</div>
                <div class="stat-title">${stat.title}</div>
            </div>
        `).join('');
    } else {
        // Fallback if data.js isn't loaded
        statsGrid.innerHTML = `
            <div class="stat-box">
                <div class="stat-number">18+</div>
                <div class="stat-title">Years Experience</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">10K+</div>
                <div class="stat-title">Happy Customers</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">100%</div>
                <div class="stat-title">Satisfaction</div>
            </div>
            <div class="stat-box">
                <div class="stat-number">24/7</div>
                <div class="stat-title">Support</div>
            </div>
        `;
    }
}

// Animate numbers when in viewport
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const value = parseInt(stat.textContent);
                    if (!stat.classList.contains('animated')) {
                        animateValue(stat, 0, value, 2000);
                        stat.classList.add('animated');
                    }
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
}

// Helper function to animate numbers
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start) + "+";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

setTimeout(() => {
    animateNumbers();
}, 1000);
function initServiceFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (categoryButtons.length === 0) return;
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            // Show/hide services based on category
            serviceCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Call this function after loading services
// Add this line at the end of your loadServices() function:
// setTimeout(initServiceFilter, 100);