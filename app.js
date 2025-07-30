// Harsh Tyagi Portfolio - JavaScript with Fixed Theme Toggle & Navigation

class HarshPortfolio {
    constructor() {
        this.currentTheme = 'light';
        this.typewriterIndex = 0;
        this.typewriterRoles = [
            'Software Engineer',
            'Full Stack Developer', 
            'Railway Systems Engineer'
        ];
        this.currentRoleIndex = 0;
        this.isTyping = true;
        this.skillsAnimated = false;
        
        this.init();
    }
    
    init() {
        console.log('🚀 Initializing Harsh Tyagi Portfolio with Profile Photo...');
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupAll();
            });
        } else {
            this.setupAll();
        }
    }
    
    setupAll() {
        this.initializeTheme();
        this.setupThemeToggle();
        this.setupNavigation();
        this.setupMobileNavigation();
        this.setupTypewriter();
        this.setupParticles();
        this.setupScrollEffects();
        this.setupSkillsAnimation();
        this.setupContactForm();
        this.setupBackToTop();
        this.setupSmoothScrolling();
        this.setupIntersectionObserver();
        this.setupResponsiveHandling();
        this.setupProfilePhotoEffects();
        
        console.log('✨ Portfolio with profile photo initialized successfully!');
    }
    
    // FIXED: Theme Toggle Implementation
    initializeTheme() {
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('harsh-portfolio-theme') || 'light';
        this.currentTheme = savedTheme;
        this.applyTheme(savedTheme);
        console.log(`🎨 Initial theme set to: ${savedTheme}`);
    }
    
    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) {
            console.error('❌ Theme toggle button not found');
            return;
        }
        
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleTheme();
        });
        
        console.log('🌓 Theme toggle setup complete');
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        console.log(`🌓 Switching from ${this.currentTheme} to ${newTheme}`);
        
        this.currentTheme = newTheme;
        this.applyTheme(newTheme);
        localStorage.setItem('harsh-portfolio-theme', newTheme);
        
        // Force update particles and other theme-dependent elements
        setTimeout(() => {
            this.updateParticlesForTheme(newTheme);
            this.updateScrollEffects();
        }, 100);
        
        console.log(`🌓 Theme switched to: ${newTheme}`);
        
        // Show notification for feedback
        this.showNotification(`Switched to ${newTheme} theme!`, 'success', 2000);
    }
    
    applyTheme(theme) {
        const body = document.body;
        const html = document.documentElement;
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle?.querySelector('i');
        
        console.log(`🎨 Applying ${theme} theme...`);
        
        // Remove existing theme attributes
        body.removeAttribute('data-theme');
        html.removeAttribute('data-theme');
        
        // Apply new theme to both html and body for complete coverage
        body.setAttribute('data-theme', theme);
        html.setAttribute('data-theme', theme);
        
        // Update document root for CSS variables
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update theme toggle icon
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
                icon.style.color = '#FFD700';
            } else {
                icon.className = 'fas fa-moon';
                icon.style.color = '';
            }
        }
        
        // Force reflow to ensure CSS updates
        requestAnimationFrame(() => {
            body.style.transition = 'all 0.3s ease';
            body.offsetHeight; // Trigger reflow
            
            setTimeout(() => {
                body.style.transition = '';
            }, 300);
        });
        
        console.log(`🎨 Applied ${theme} theme successfully`);
    }
    
    updateScrollEffects() {
        const header = document.querySelector('.header');
        const scrolled = window.scrollY > 50;
        
        if (header) {
            if (scrolled) {
                header.style.background = this.currentTheme === 'dark' 
                    ? 'rgba(0, 0, 0, 0.8)' 
                    : 'rgba(255, 255, 255, 0.95)';
            } else {
                header.style.background = this.currentTheme === 'dark' 
                    ? 'rgba(0, 0, 0, 0.5)' 
                    : 'rgba(255, 255, 255, 0.9)';
            }
        }
    }
    
    // Profile Photo Effects
    setupProfilePhotoEffects() {
        const profilePhoto = document.querySelector('.profile-photo');
        const profileContainer = document.querySelector('.profile-photo-container');
        
        if (!profilePhoto || !profileContainer) {
            console.log('📸 Profile photo elements not found');
            return;
        }
        
        // Add error handling for image loading
        profilePhoto.addEventListener('error', (e) => {
            console.error('❌ Profile photo failed to load:', e.target.src);
            // Create a fallback placeholder
            this.createProfilePlaceholder(profileContainer);
        });
        
        profilePhoto.addEventListener('load', () => {
            console.log('📸 Profile photo loaded successfully');
            profileContainer.classList.add('loaded');
        });
        
        // Add intersection observer for profile photo animation
        const profileObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    profileObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        profileObserver.observe(profileContainer);
        
        console.log('📸 Profile photo effects setup complete');
    }
    
    createProfilePlaceholder(container) {
        const placeholder = document.createElement('div');
        placeholder.className = 'profile-placeholder';
        placeholder.innerHTML = `
            <div class="placeholder-icon">
                <i class="fas fa-user"></i>
            </div>
            <div class="placeholder-text">HT</div>
        `;
        
        placeholder.style.cssText = `
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--accent-primary), var(--accent-hover));
            color: white;
            font-weight: bold;
            font-size: 2rem;
        `;
        
        const placeholderIcon = placeholder.querySelector('.placeholder-icon');
        placeholderIcon.style.cssText = `
            font-size: 3rem;
            margin-bottom: 0.5rem;
            opacity: 0.8;
        `;
        
        // Replace the image with placeholder
        const img = container.querySelector('.profile-photo');
        if (img) {
            container.removeChild(img);
        }
        container.appendChild(placeholder);
        
        console.log('📸 Profile placeholder created');
    }
    
    // FIXED: Navigation Management
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Navigation link handlers
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const targetId = link.getAttribute('href');
                console.log(`🔗 Navigation clicked: ${targetId}`);
                
                if (targetId && targetId.startsWith('#')) {
                    this.navigateToSection(targetId, link);
                }
            });
        });
        
        // Update active nav link on scroll
        window.addEventListener('scroll', this.throttle(() => {
            this.updateActiveNavLink();
        }, 100));
        
        this.updateActiveNavLink();
        console.log('🧭 Navigation setup complete');
    }
    
    navigateToSection(targetId, linkElement) {
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = 80;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            console.log(`📍 Navigating to section: ${targetId}, position: ${targetPosition}`);
            
            // Update active link immediately
            document.querySelectorAll('.nav-link').forEach(nl => nl.classList.remove('active'));
            linkElement.classList.add('active');
            
            // Close mobile menu if open
            this.closeMobileMenu();
            
            // Smooth scroll to target
            this.smoothScrollTo(targetPosition, 800);
            
            // Show feedback
            this.showNotification(`Navigated to ${targetId.replace('#', '').toUpperCase()} section`, 'info', 1500);
            
            console.log(`📍 Successfully navigated to: ${targetId}`);
        } else {
            console.error(`❌ Target section not found: ${targetId}`);
        }
    }
    
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 120;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // FIXED: Mobile Navigation
    setupMobileNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMobileMenu();
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            }, true);
            
            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    this.closeMobileMenu();
                }
            });
            
            console.log('📱 Mobile navigation setup complete');
        }
    }
    
    toggleMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (!navToggle || !navMenu) return;
        
        const isActive = navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        if (isActive) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            this.showNotification('Mobile menu opened', 'info', 1000);
        } else {
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
            this.showNotification('Mobile menu closed', 'info', 1000);
        }
        
        console.log(`📱 Mobile menu ${isActive ? 'opened' : 'closed'}`);
    }
    
    closeMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Reset hamburger animation
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    }
    
    // Typewriter Effect
    setupTypewriter() {
        const typewriterElement = document.getElementById('typewriter');
        if (!typewriterElement) return;
        
        this.typewriterLoop();
    }
    
    typewriterLoop() {
        const typewriterElement = document.getElementById('typewriter');
        if (!typewriterElement) return;
        
        const currentRole = this.typewriterRoles[this.currentRoleIndex];
        
        if (this.isTyping) {
            // Typing forward
            if (this.typewriterIndex < currentRole.length) {
                typewriterElement.textContent = currentRole.substring(0, this.typewriterIndex + 1);
                this.typewriterIndex++;
                setTimeout(() => this.typewriterLoop(), 100);
            } else {
                // Pause at end of word
                this.isTyping = false;
                setTimeout(() => this.typewriterLoop(), 2000);
            }
        } else {
            // Deleting backward
            if (this.typewriterIndex > 0) {
                typewriterElement.textContent = currentRole.substring(0, this.typewriterIndex - 1);
                this.typewriterIndex--;
                setTimeout(() => this.typewriterLoop(), 50);
            } else {
                // Move to next role
                this.isTyping = true;
                this.currentRoleIndex = (this.currentRoleIndex + 1) % this.typewriterRoles.length;
                setTimeout(() => this.typewriterLoop(), 500);
            }
        }
    }
    
    // Particle System
    setupParticles() {
        this.createParticles();
    }
    
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        // Clear existing particles
        particlesContainer.innerHTML = '';
        
        const numberOfParticles = 50;
        
        for (let i = 0; i < numberOfParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random size
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            
            particlesContainer.appendChild(particle);
        }
        
        console.log('✨ Particles created');
    }
    
    updateParticlesForTheme(theme) {
        // Particles color is handled by CSS variables, just trigger recreation for better effect
        setTimeout(() => {
            this.createParticles();
        }, 300);
    }
    
    // Scroll Effects
    setupScrollEffects() {
        window.addEventListener('scroll', this.throttle(() => {
            this.handleScrollEffects();
        }, 16));
    }
    
    handleScrollEffects() {
        this.updateScrollEffects();
    }
    
    // CRITICAL: Skills Animation with Progress Bars
    setupSkillsAnimation() {
        this.skillsAnimated = false;
    }
    
    animateSkills() {
        if (this.skillsAnimated) return;
        this.skillsAnimated = true;
        
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                const progressBar = item.querySelector('.skill-progress');
                const percentage = progressBar.getAttribute('data-percentage');
                
                // Set CSS custom property for the width
                progressBar.style.setProperty('--progress-width', percentage + '%');
                
                // Add animation class
                item.classList.add('animate');
                
                // Trigger the animation
                progressBar.style.width = percentage + '%';
                
                console.log(`📊 Animated skill: ${percentage}%`);
            }, index * 200);
        });
        
        this.showNotification('Skills animated!', 'success', 2000);
    }
    
    // FIXED: Contact Form
    setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactSubmit(contactForm);
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });
        
        // Download resume handler
        const downloadBtn = document.getElementById('downloadResume');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showNotification('Resume download would be implemented here!', 'info');
            });
        }
        
        console.log('📋 Contact form setup complete');
    }
    
    handleContactSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate all fields
        let isValid = true;
        const inputs = form.querySelectorAll('.form-control[required]');
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            this.showNotification('Please fill in all required fields correctly.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Message...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Simulate form submission
        setTimeout(() => {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            
            // Show success message
            this.showNotification('Thank you for your message! I will get back to you soon.', 'success');
            
            // Reset form
            form.reset();
            
            // Clear any error states
            inputs.forEach(input => this.clearFieldError(input));
            
            console.log('📧 Contact form submitted:', data);
        }, 2000);
    }
    
    // FIXED: Email Validation
    validateField(input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        this.clearFieldError(input);
        
        if (input.hasAttribute('required') && !value) {
            errorMessage = 'This field is required';
            isValid = false;
        } else if (value) {
            switch (input.type) {
                case 'email':
                    // Fixed email regex - more permissive and accurate
                    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                    if (!emailRegex.test(value)) {
                        errorMessage = 'Please enter a valid email address';
                        isValid = false;
                    }
                    break;
            }
            
            if (input.name === 'name' && value.length < 2) {
                errorMessage = 'Name must be at least 2 characters';
                isValid = false;
            }
            
            if (input.name === 'subject' && value.length < 3) {
                errorMessage = 'Subject must be at least 3 characters';
                isValid = false;
            }
            
            if (input.name === 'message' && value.length < 10) {
                errorMessage = 'Message must be at least 10 characters';
                isValid = false;
            }
        }
        
        if (!isValid) {
            this.showFieldError(input, errorMessage);
        } else {
            input.style.borderColor = '#1FB8CD';
        }
        
        return isValid;
    }
    
    showFieldError(input, message) {
        input.style.borderColor = '#ef4444';
        
        // Create or update error message
        let errorElement = input.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.cssText = `
                color: #ef4444;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                display: block;
            `;
            input.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
    
    clearFieldError(input) {
        input.style.borderColor = '';
        const errorElement = input.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    // Back to Top Button
    setupBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (!backToTop) return;
        
        const handleScroll = this.throttle(() => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, 100);
        
        window.addEventListener('scroll', handleScroll);
        
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            this.smoothScrollTo(0);
        });
    }
    
    // Smooth Scrolling
    setupSmoothScrolling() {
        // Handle all internal links
        const internalLinks = document.querySelectorAll('a[href^="#"]:not(.nav-link)');
        internalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    this.smoothScrollTo(offsetTop);
                }
            });
        });
    }
    
    smoothScrollTo(targetY, duration = 1000) {
        const startY = window.scrollY;
        const difference = targetY - startY;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeInOutCubic = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            const currentY = startY + difference * easeInOutCubic;
            window.scrollTo(0, currentY);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }
    
    // Intersection Observer for Animations
    setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -10% 0px',
            threshold: 0.1
        };
        
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Check if this is the skills section
                    if (entry.target.id === 'skills') {
                        this.animateSkills();
                    }
                    
                    // Add animation classes
                    entry.target.classList.add('fade-in', 'visible');
                    
                    // Unobserve after animation
                    this.intersectionObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements
        const elementsToObserve = document.querySelectorAll(
            'section, .experience-card, .project-card, .skill-item, .education-card, .certification-item'
        );
        
        elementsToObserve.forEach(element => {
            element.classList.add('fade-in');
            this.intersectionObserver.observe(element);
        });
    }
    
    // Responsive Handling
    setupResponsiveHandling() {
        let resizeTimeout;
        
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
        
        // Initial setup
        this.handleResize();
    }
    
    handleResize() {
        // Close mobile menu on resize to larger screen
        if (window.innerWidth > 768) {
            this.closeMobileMenu();
        }
        
        // Recreate particles on resize
        this.createParticles();
        
        // Update navigation
        this.updateActiveNavLink();
    }
    
    // Enhanced Notification System
    showNotification(message, type = 'info', duration = 5000) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });
        
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        
        const iconMap = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        const colorMap = {
            success: '#1FB8CD',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        
        notification.innerHTML = `
            <i class="${iconMap[type]}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${this.currentTheme === 'dark' ? 'rgba(15, 12, 41, 0.95)' : 'white'};
            backdrop-filter: blur(10px);
            color: ${this.currentTheme === 'dark' ? '#ffffff' : '#1e293b'};
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            transform: translateX(400px);
            transition: all 0.3s ease;
            max-width: 350px;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            border-left: 4px solid ${colorMap[type]};
            border: 1px solid ${this.currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        `;
        
        notification.querySelector('i:first-child').style.color = colorMap[type];
        
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.25rem;
            margin-left: auto;
            opacity: 0.7;
            transition: opacity 0.2s;
            color: inherit;
        `;
        
        const dismissNotification = () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        };
        
        closeBtn.addEventListener('click', dismissNotification);
        closeBtn.addEventListener('mouseenter', () => closeBtn.style.opacity = '1');
        closeBtn.addEventListener('mouseleave', () => closeBtn.style.opacity = '0.7');
        
        document.body.appendChild(notification);
        
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });
        
        setTimeout(dismissNotification, duration);
        
        notification.addEventListener('click', (e) => {
            if (e.target !== closeBtn && !closeBtn.contains(e.target)) {
                dismissNotification();
            }
        });
    }
    
    // Utility Methods
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Cleanup
    destroy() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
        }
        
        console.log('🧹 Portfolio cleaned up');
    }
}

// Initialize portfolio when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}

function initializePortfolio() {
    // Initialize the portfolio
    window.harshPortfolio = new HarshPortfolio();
    
    console.log('🎉 Harsh Tyagi Portfolio with Profile Photo loaded successfully!');
    console.log('');
    console.log('🔧 Available console commands:');
    console.log('   harshPortfolio.toggleTheme() - Toggle dark/light theme');
    console.log('   harshPortfolio.animateSkills() - Trigger skills animation');
    console.log('   harshPortfolio.showNotification(message, type) - Show notification');
    console.log('');
}

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('📱 Page hidden - optimizing performance');
    } else {
        console.log('📱 Page visible - resuming normal operation');
    }
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    if (window.harshPortfolio) {
        window.harshPortfolio.destroy();
    }
});

// Console styling for development
console.log('%c🚀 Harsh Tyagi Portfolio', 'color: #1FB8CD; font-size: 24px; font-weight: bold;');
console.log('%c✨ Software Engineer | Railway Systems Expert', 'color: #50c9d7; font-size: 14px;');
console.log('%c📸 Profile Photo Integration Complete!', 'color: #1FB8CD; font-size: 14px;');
console.log('%c🌟 FIXED: Theme Toggle & Navigation Working!', 'color: #1FB8CD; font-size: 14px; font-weight: bold;');
console.log('%c📱 Fully Responsive Design', 'color: #50c9d7; font-size: 14px;');