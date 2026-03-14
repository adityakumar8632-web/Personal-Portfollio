// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (form && successMessage) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form button
            const button = form.querySelector('.cta-button');
            const originalText = button.textContent;
            button.textContent = 'Sending...';
            button.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                form.style.display = 'none';
                successMessage.classList.add('show');
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    form.reset();
                    form.style.display = 'flex';
                    successMessage.classList.remove('show');
                    button.textContent = originalText;
                    button.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
});

// Smooth Scroll for Internal Links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or if target doesn't exist
            if (href === '#' || href === '#contact') {
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Intersection Observer for Scroll Animations
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      }
    );
  
    document.querySelectorAll('section:not(.hero)').forEach(section => {
      section.classList.add('reveal');
      observer.observe(section);
    });
  });
  

// Pricing Card Button Click Handlers
document.addEventListener('DOMContentLoaded', function() {
    const pricingButtons = document.querySelectorAll('.pricing-card .cta-button');
    
    pricingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll to contact section
            const contactSection = document.getElementById('section-09-contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Focus on the name input after scrolling
                setTimeout(() => {
                    const nameInput = document.getElementById('name');
                    if (nameInput) {
                        nameInput.focus();
                    }
                }, 800);
            }
        });
    });
});

// Service Card CTA Button Handlers
document.addEventListener('DOMContentLoaded', function() {
    const serviceButtons = document.querySelectorAll('.service-footer .cta-button');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#contact') {
                e.preventDefault();
                
                // Scroll to contact section
                const contactSection = document.getElementById('section-09-contact');
                if (contactSection) {
                    contactSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Focus on the name input after scrolling
                    setTimeout(() => {
                        const nameInput = document.getElementById('name');
                        if (nameInput) {
                            nameInput.focus();
                        }
                    }, 800);
                }
            }
        });
    });
});

// Hero CTA Button Handler
document.addEventListener('DOMContentLoaded', function() {
    const heroCTA = document.querySelector('.hero .cta-button');
    const workSection = document.getElementById('section-05-work');
  
    if (heroCTA && workSection) {
      heroCTA.addEventListener('click', function(e) {
        e.preventDefault();
        workSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

// Add loading state to project CTAs
document.addEventListener('DOMContentLoaded', function() {
    const projectCTAs = document.querySelectorAll('.project-cta');
    
    projectCTAs.forEach(cta => {
        cta.addEventListener('click', function(e) {
            // Only prevent default for demo purposes
            // Remove this in production with real links
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                
                // Add visual feedback
                this.style.opacity = '0.6';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 300);
            }
        });
    });
});

// Parallax effect for hero visual elements
document.addEventListener('DOMContentLoaded', function() {
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                
                // Only apply parallax within hero section
                if (scrolled < heroBottom) {
                    const cards = heroVisual.querySelectorAll('.glass-card');
                    const orbs = heroVisual.querySelectorAll('.gradient-orb');
                    
                    cards.forEach((card, index) => {
                        const speed = 0.15 + index * 0.05;
                        card.style.setProperty('--parallax', `${scrolled * speed}px`);
                    });
                      
                    orbs.forEach((orb, index) => {
                        const speed = 0.1 + index * 0.03;
                        orb.style.setProperty('--parallax', `${scrolled * speed}px`);
                    });
                }
            }
        });
    }
});

// Form validation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Add blur event for validation feedback
            input.addEventListener('blur', function() {
                if (this.value.trim() === '' && this.hasAttribute('required')) {
                    this.style.borderColor = 'rgba(255, 100, 100, 0.5)';
                } else {
                    this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }
            });
            
            // Remove error styling on focus
            input.addEventListener('focus', function() {
                this.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            });
        });
    }
});

// Add active state tracking for navigation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Update URL hash without scrolling
                if (history.pushState) {
                    history.replaceState(null, null, `#${sectionId}`);
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }


// Apply debounce to scroll-heavy operations
window.addEventListener('scroll', debounce(function() {
    const scrolled = window.pageYOffset;
    // Any additional scroll-based functionality can be added here
}, 10));

