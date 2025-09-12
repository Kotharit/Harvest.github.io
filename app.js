// ===== IMAGE CONFIGURATION SECTION =====
// TO ADD PRODUCT IMAGES: Simply replace the empty strings below with your local image paths
// Example: "Coconut Scrubbers": "images/coconut-scrubbers.jpg",
// The images should be placed in the same folder as this website or use relative/absolute paths
const PRODUCT_IMAGE_PATHS = {
  "Coconut Scrubbers": "images/coconut-scrubbers.png", // Add your image path here: "images/coconut-scrubbers.jpg"
  "Coconut Shell Charcoal": "images/coconut-shell-charcoal.png", // Add your image path here
  "Coconut Butter Snacks": "images/coconut-butter-snacks.png", // Add your image path here
  "Coconut Oil": "images/coconut-oil.png", // Add your image path here
  "Aloe Vera Skin Care Mask": "images/aloe-vera-face-mask.png", // Add your image path here
  "Homemade Neem Soap": "", // Add your image path here
  "Aloe Vera Hand Soap": "", // Add your image path here
  "Rose Water": "", // Add your image path here
  "Neem Kajal": "", // Add your image path here
  "Ginger Candy": "", // Add your image path here
  "Apple Cider Vinegar": "", // Add your image path here
  "Orange Daily Supplement": "", // Add your image path here
  "Jamun Jam": "", // Add your image path here
  "Moghra Sharbat": "", // Add your image path here
  "Brahmi Powder": "", // Add your image path here
  "Moringa Powder": "", // Add your image path here
  "Lemon Leaf Powder": "", // Add your image path here
  "Pomegranate Powder": "", // Add your image path here
  "Neem Leaf Powder": "", // Add your image path here
  "Jamun Seed Powder": "", // Add your image path here
  "Guava Leaf Tea": "", // Add your image path here
  "Lemon Tea": "", // Add your image path here
  "Senna Tea": "", // Add your image path here
  "Anjeer Tea": "", // Add your image path here
  "Peppermint Tea": "", // Add your image path here
  "Butterfly Pea Tea": "", // Add your image path here
  "Hibiscus Tea": "" // Add your image path here
};

// Application data with integrated image paths
const appData = {
  products: [
    {
      name: "Coconut Scrubbers",
      category: "Coconut Products",
      description: "Natural exfoliating scrubbers made from coconut fiber",
      imagePath: PRODUCT_IMAGE_PATHS["Coconut Scrubbers"] || ""
    },
    {
      name: "Coconut Shell Charcoal", 
      category: "Coconut Products",
      description: "Activated charcoal from coconut shells for purification",
      imagePath: PRODUCT_IMAGE_PATHS["Coconut Shell Charcoal"] || ""
    },
    {
      name: "Coconut Butter Sticks",
      category: "Coconut Products", 
      description: "Healthy snacks made with pure coconut butter",
      imagePath: PRODUCT_IMAGE_PATHS["Coconut Butter Snacks"] || ""
    },
    {
      name: "Coconut Oil",
      category: "Coconut Products", 
      description: "Pure, cold-pressed coconut oil for cooking and skincare",
      imagePath: PRODUCT_IMAGE_PATHS["Coconut Oil"] || ""
    },
    {
      name: "Aloe Vera Skin Care Mask",
      category: "Cosmetic Products",
      description: "Nourishing face mask with pure aloe vera",
      imagePath: PRODUCT_IMAGE_PATHS["Aloe Vera Skin Care Mask"] || ""
    },
    {
      name: "Homemade Neem Soap",
      category: "Cosmetic Products",
      description: "Handcrafted soap with neem for healthy skin",
      imagePath: PRODUCT_IMAGE_PATHS["Homemade Neem Soap"] || ""
    },
    {
      name: "Aloe Vera Hand Soap",
      category: "Cosmetic Products", 
      description: "Gentle hand soap with moisturizing aloe vera",
      imagePath: PRODUCT_IMAGE_PATHS["Aloe Vera Hand Soap"] || ""
    },
    {
      name: "Rose Water",
      category: "Cosmetic Products",
      description: "Pure rose water for natural skincare",
      imagePath: PRODUCT_IMAGE_PATHS["Rose Water"] || ""
    },
    {
      name: "Neem Kajal",
      category: "MIC Products",
      description: "Traditional eye liner made with neem",
      imagePath: PRODUCT_IMAGE_PATHS["Neem Kajal"] || ""
    },
    {
      name: "Ginger Candy",
      category: "MIC Products", 
      description: "Natural ginger candies for digestive health",
      imagePath: PRODUCT_IMAGE_PATHS["Ginger Candy"] || ""
    },
    {
      name: "Apple Cider Vinegar",
      category: "MIC Products",
      description: "Organic apple cider vinegar with mother",
      imagePath: PRODUCT_IMAGE_PATHS["Apple Cider Vinegar"] || ""
    },
    {
      name: "Orange Daily Supplement",
      category: "MIC Products",
      description: "Vitamin C rich orange supplement",
      imagePath: PRODUCT_IMAGE_PATHS["Orange Daily Supplement"] || ""
    },
    {
      name: "Jamun Jam",
      category: "MIC Products",
      description: "Artisanal jam made from fresh jamun fruits",
      imagePath: PRODUCT_IMAGE_PATHS["Jamun Jam"] || ""
    },
    {
      name: "Moghra Sharbat",
      category: "MIC Products",
      description: "Traditional refreshing drink with moghra essence",
      imagePath: PRODUCT_IMAGE_PATHS["Moghra Sharbat"] || ""
    },
    {
      name: "Brahmi Powder",
      category: "Powders",
      description: "Memory-enhancing brahmi herb powder",
      imagePath: PRODUCT_IMAGE_PATHS["Brahmi Powder"] || ""
    },
    {
      name: "Moringa Powder", 
      category: "Powders",
      description: "Nutrient-rich moringa leaf powder",
      imagePath: PRODUCT_IMAGE_PATHS["Moringa Powder"] || ""
    },
    {
      name: "Lemon Leaf Powder",
      category: "Powders",
      description: "Aromatic lemon leaf powder for health",
      imagePath: PRODUCT_IMAGE_PATHS["Lemon Leaf Powder"] || ""
    },
    {
      name: "Pomegranate Powder",
      category: "Powders", 
      description: "Antioxidant-rich pomegranate powder",
      imagePath: PRODUCT_IMAGE_PATHS["Pomegranate Powder"] || ""
    },
    {
      name: "Neem Leaf Powder",
      category: "Powders",
      description: "Purifying neem leaf powder",
      imagePath: PRODUCT_IMAGE_PATHS["Neem Leaf Powder"] || ""
    },
    {
      name: "Jamun Seed Powder",
      category: "Powders",
      description: "Blood sugar supporting jamun seed powder",
      imagePath: PRODUCT_IMAGE_PATHS["Jamun Seed Powder"] || ""
    },
    {
      name: "Guava Leaf Tea",
      category: "Tea Products", 
      description: "Diabetes-friendly guava leaf herbal tea",
      imagePath: PRODUCT_IMAGE_PATHS["Guava Leaf Tea"] || ""
    },
    {
      name: "Lemon Tea",
      category: "Tea Products",
      description: "Refreshing lemon herbal tea",
      imagePath: PRODUCT_IMAGE_PATHS["Lemon Tea"] || ""
    },
    {
      name: "Senna Tea",
      category: "Tea Products",
      description: "Digestive support senna leaf tea",
      imagePath: PRODUCT_IMAGE_PATHS["Senna Tea"] || ""
    },
    {
      name: "Anjeer Tea",
      category: "Tea Products",
      description: "Fig-infused herbal tea for wellness",
      imagePath: PRODUCT_IMAGE_PATHS["Anjeer Tea"] || ""
    },
    {
      name: "Peppermint Tea",
      category: "Tea Products", 
      description: "Soothing peppermint herbal tea",
      imagePath: PRODUCT_IMAGE_PATHS["Peppermint Tea"] || ""
    },
    {
      name: "Butterfly Pea Tea",
      category: "Tea Products",
      description: "Antioxidant-rich butterfly pea flower tea",
      imagePath: PRODUCT_IMAGE_PATHS["Butterfly Pea Tea"] || ""
    },
    {
      name: "Hibiscus Tea",
      category: "Tea Products",
      description: "Heart-healthy hibiscus flower tea",
      imagePath: PRODUCT_IMAGE_PATHS["Hibiscus Tea"] || ""
    }
  ]
};

// DOM elements
let navItems, sections, productsGrid, filterBtns, contactForm, mobileNavToggle, navMenu;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeElements();
  setupNavigation();
  setupMobileNavigation();
  setupProductFilters();
  setupContactForm();
  setupScrollEffects();
  renderProducts();
  setupSubscriptionButtons();
  
  // Show default section (Vision)
  showSection('vision');
  
  // Add initial animations
  setTimeout(() => {
    const visionSection = document.querySelector('.section--vision');
    if (visionSection) {
      visionSection.classList.add('fade-in');
    }
  }, 300);
});

// Initialize DOM elements
function initializeElements() {
  navItems = document.querySelectorAll('.nav-item');
  sections = document.querySelectorAll('.section');
  productsGrid = document.getElementById('productsGrid');
  filterBtns = document.querySelectorAll('.filter-btn');
  contactForm = document.querySelector('.contact-form');
  mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  navMenu = document.querySelector('.nav-menu');
  
  console.log('Found elements:', {
    navItems: navItems.length,
    sections: sections.length,
    productsGrid: !!productsGrid,
    filterBtns: filterBtns.length,
    contactForm: !!contactForm,
    mobileNavToggle: !!mobileNavToggle,
    navMenu: !!navMenu
  });
}

// Setup navigation functionality
function setupNavigation() {
  console.log('Setting up navigation...');
  navItems.forEach((item, index) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Nav item clicked:', this.getAttribute('data-section'));
      const targetSection = this.getAttribute('data-section');
      if (targetSection) {
        showSection(targetSection);
        updateActiveNav(this);
        
        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      }
    });
  });
}

// Setup mobile navigation
function setupMobileNavigation() {
  if (!mobileNavToggle || !navMenu) {
    console.log('Mobile navigation elements not found');
    return;
  }
  
  console.log('Setting up mobile navigation...');
  
  mobileNavToggle.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Mobile nav toggle clicked');
    navMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && !mobileNavToggle.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });
  
  // Close mobile menu on window resize if desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
    }
  });
}

// Show specific section
function showSection(sectionId) {
  console.log('Showing section:', sectionId);
  
  // Hide all sections
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
    setTimeout(() => {
      targetSection.classList.add('active');
    }, 50);
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    console.error('Section not found:', sectionId);
  }
}

// Update active navigation item
function updateActiveNav(activeItem) {
  navItems.forEach(item => {
    item.classList.remove('active');
  });
  activeItem.classList.add('active');
}

// Setup product filters
function setupProductFilters() {
  console.log('Setting up product filters...');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      console.log('Filter clicked:', filter);
      filterProducts(filter);
      updateActiveFilter(this);
    });
  });
}

// Update active filter button
function updateActiveFilter(activeBtn) {
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
  });
  activeBtn.classList.add('active');
}

// Filter products by category
function filterProducts(category) {
  const productCards = document.querySelectorAll('.product-card');
  console.log('Filtering products:', category, 'Found cards:', productCards.length);
  
  productCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Render products dynamically with improved image support
function renderProducts() {
  if (!productsGrid) {
    console.error('Products grid not found');
    return;
  }
  
  console.log('Rendering products with image paths...');
  
  const productHTML = appData.products.map((product, index) => {
    const hasImage = product.imagePath && product.imagePath.trim() !== '';
    
    let imageContent;
    if (hasImage) {
      imageContent = `<img src="${product.imagePath}" alt="${product.name}" onerror="this.parentElement.classList.add('placeholder'); this.style.display='none'; this.parentElement.innerHTML='<div class=\\'placeholder-content\\'><div class=\\'placeholder-icon\\'>🖼️</div><div class=\\'placeholder-text\\'>Image Coming Soon</div><div class=\\'placeholder-subtext\\'>${product.name}</div></div>';">`;
    } else {
      imageContent = `<div class="placeholder-content">
                        <div class="placeholder-icon">🌿</div>
                        <div class="placeholder-text">Image Coming Soon</div>
                        <div class="placeholder-subtext">${product.name}</div>
                      </div>`;
    }
    
    return `
      <div class="product-card" data-category="${product.category}">
        <div class="product-image ${hasImage ? '' : 'placeholder'}">
          ${imageContent}
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <span class="product-category">${product.category}</span>
          <p class="product-description">${product.description}</p>
        </div>
      </div>
    `;
  }).join('');
  
  productsGrid.innerHTML = productHTML;
  console.log('Products rendered successfully with improved image support');
}

// Setup contact form
function setupContactForm() {
  if (!contactForm) {
    console.error('Contact form not found');
    return;
  }
  
  console.log('Setting up contact form...');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    handleContactFormSubmit();
  });
}

// Handle contact form submission
function handleContactFormSubmit() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  
  console.log('Form submission:', { name, email, subject, message });
  
  // Simple validation
  if (!name || !email || !subject || !message) {
    showNotification('Please fill in all fields', 'error');
    return;
  }
  
  if (!isValidEmail(email)) {
    showNotification('Please enter a valid email address', 'error');
    return;
  }
  
  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    contactForm.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 2000);
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show notification (mobile responsive)
function showNotification(message, type = 'info') {
  console.log('Showing notification:', message, type);
  
  // Remove any existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notif => notif.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  
  // Mobile-responsive positioning
  const isMobile = window.innerWidth <= 480;
  notification.style.cssText = `
    position: fixed;
    ${isMobile ? 'top: 20px; right: 10px; left: 10px;' : 'top: 20px; right: 20px;'}
    background: ${type === 'success' ? '#689967' : type === 'error' ? '#dc3545' : '#4399CE'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    z-index: 10000;
    ${isMobile ? 'transform: translateY(-100px);' : 'transform: translateX(400px);'}
    transition: transform 0.3s ease;
    ${isMobile ? 'max-width: none;' : 'max-width: 300px;'}
    font-size: 0.9rem;
    line-height: 1.4;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => {
    notification.style.transform = isMobile ? 'translateY(0)' : 'translateX(0)';
  }, 100);
  
  // Hide notification after 5 seconds
  setTimeout(() => {
    notification.style.transform = isMobile ? 'translateY(-100px)' : 'translateX(400px)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Setup subscription buttons
function setupSubscriptionButtons() {
  console.log('Setting up subscription buttons...');
  
  // Use setTimeout to ensure DOM is fully rendered
  setTimeout(() => {
    const subscriptionBtns = document.querySelectorAll('.subscription-btn');
    console.log('Found subscription buttons:', subscriptionBtns.length);
    
    subscriptionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const planCard = this.closest('.subscription-card');
        const planName = planCard ? planCard.querySelector('h3').textContent : 'Unknown Plan';
        console.log('Subscription clicked:', planName);
        handleSubscription(planName, this);
      });
    });
  }, 500);
}

// Handle subscription
function handleSubscription(planName, buttonElement) {
  console.log('Processing request for:', planName);
  
  // Show loading state
  const originalText = buttonElement.textContent;
  buttonElement.textContent = 'Processing...';
  buttonElement.disabled = true;
  buttonElement.style.opacity = '0.7';
  
  // Simulate subscription process
  setTimeout(() => {
    showNotification(`Thank you for showing interest in ${planName}! We'll contact you when we launch.`, 'Thank You');
    
    // Reset button
    buttonElement.textContent = originalText;
    buttonElement.disabled = false;
    buttonElement.style.opacity = '1';
  }, 2000);
}

// Setup scroll effects
function setupScrollEffects() {
  // Update header background on scroll
  window.addEventListener('scroll', debounce(function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (header) {
      if (scrolled > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(15px)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
      }
    }
  }, 16));
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for scroll animations
  setTimeout(() => {
    const animateElements = document.querySelectorAll('.vision-card, .mission-card, .product-card, .subscription-card, .contact-item');
    animateElements.forEach(el => {
      observer.observe(el);
    });
  }, 1000);
}

// Handle responsive navigation for mobile
function setupResponsiveFeatures() {
  const nav = document.querySelector('.nav');
  
  // Add touch support for mobile navigation
  if (window.innerWidth <= 768 && nav) {
    nav.style.overflowX = 'auto';
    nav.style.scrollBehavior = 'smooth';
  }
  
  // Handle subscription grid horizontal scroll on mobile
  const subscriptionsWrapper = document.querySelector('.subscriptions-wrapper');
  if (subscriptionsWrapper && window.innerWidth <= 1024) {
    subscriptionsWrapper.style.overflowX = 'auto';
    subscriptionsWrapper.style.scrollBehavior = 'smooth';
  }
}

// Initialize responsive features on load and resize
window.addEventListener('load', setupResponsiveFeatures);
window.addEventListener('resize', debounce(setupResponsiveFeatures, 250));

// Handle image loading errors
function handleImageError(img) {
  console.log('Image loading error for:', img.src);
  const container = img.parentElement;
  if (container) {
    container.classList.add('placeholder');
    img.style.display = 'none';
    
    // Add fallback text if not already present
    if (!container.querySelector('span')) {
      const productCard = container.closest('.product-card');
      const productName = productCard ? productCard.querySelector('.product-name').textContent : 'Product';
      container.innerHTML = `<span>${productName}</span>`;
    }
  }
}

// Add error handling and debugging
window.addEventListener('error', function(e) {
  console.error('JavaScript error:', e.error);
  // Optional: Show user-friendly error message
  if (e.error && e.error.message.includes('Failed to fetch')) {
    showNotification('Connection error. Please check your internet connection.', 'error');
  }
});

// Performance optimization - Debounce function
function debounce(func, wait) {
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

// Utility function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Touch event handling for better mobile experience
function setupTouchEvents() {
  // Enable touch scrolling for subscription cards
  const subscriptionsWrapper = document.querySelector('.subscriptions-wrapper');
  if (subscriptionsWrapper) {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    subscriptionsWrapper.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - subscriptionsWrapper.offsetLeft;
      scrollLeft = subscriptionsWrapper.scrollLeft;
    });
    
    subscriptionsWrapper.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - subscriptionsWrapper.offsetLeft;
      const walk = (x - startX) * 2;
      subscriptionsWrapper.scrollLeft = scrollLeft - walk;
    });
    
    subscriptionsWrapper.addEventListener('touchend', () => {
      isDown = false;
    });
  }
}

// Initialize touch events
document.addEventListener('DOMContentLoaded', setupTouchEvents);

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    showSection,
    filterProducts,
    isValidEmail,
    handleContactFormSubmit,
    PRODUCT_IMAGE_PATHS
  };
}