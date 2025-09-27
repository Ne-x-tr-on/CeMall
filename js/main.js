// // Main JavaScript functionality for Cemall marketplace

// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize all components
//     initializeSearch();
//     initializeCart();
//     initializeProductCards();
//     initializeShopCards();
//     initializeNavigation();
// });

// // Search functionality
// function initializeSearch() {
//     const searchInputs = document.querySelectorAll('.search-input, .hero-search-input');
//     const searchButtons = document.querySelectorAll('.search-btn, .hero-search-btn');
    
//     // Add search functionality to all search inputs
//     searchInputs.forEach(input => {
//         input.addEventListener('keypress', function(e) {
//             if (e.key === 'Enter') {
//                 performSearch(this.value);
//             }
//         });
//     });
    
//     // Add click handlers to search buttons
//     searchButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const input = this.parentElement.querySelector('input') || 
//                          this.previousElementSibling;
//             if (input) {
//                 performSearch(input.value);
//             }
//         });
//     });
// }

// // Perform search operation
// function performSearch(query) {
//     if (!query.trim()) return;
    
//     console.log('Searching for:', query);
//     // TODO: Implement actual search functionality
//     // For now, show a simple alert
//     showNotification(`Searching for "${query}"...`, 'info');
    
//     // Simulate search delay
//     setTimeout(() => {
//         showNotification(`Found results for "${query}"`, 'success');
//     }, 1000);
// }

// // Cart functionality
// function initializeCart() {
//     const cartIcon = document.querySelector('.cart-icon');
//     const cartCount = document.querySelector('.cart-count');
    
//     // Initialize cart from localStorage
//     updateCartDisplay();
    
//     // Add click handler to cart icon
//     if (cartIcon) {
//         cartIcon.addEventListener('click', function() {
//             showNotification('Cart functionality coming soon!', 'info');
//         });
//     }
// }

// // Update cart display
// function updateCartDisplay() {
//     const cartCount = document.querySelector('.cart-count');
//     const cart = getCart();
    
//     if (cartCount) {
//         cartCount.textContent = cart.length;
//     }
// }

// // Get cart from localStorage
// function getCart() {
//     try {
//         return JSON.parse(localStorage.getItem('cemall_cart') || '[]');
//     } catch (e) {
//         console.error('Error parsing cart data:', e);
//         return [];
//     }
// }

// // Add item to cart
// function addToCart(productId, productName, price) {
//     const cart = getCart();
//     const existingItem = cart.find(item => item.id === productId);
    
//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({
//             id: productId,
//             name: productName,
//             price: price,
//             quantity: 1,
//             addedAt: new Date().toISOString()
//         });
//     }
    
//     localStorage.setItem('cemall_cart', JSON.stringify(cart));
//     updateCartDisplay();
//     showNotification(`${productName} added to cart!`, 'success');
// }

// // Product card interactions
// function initializeProductCards() {
//     const productCards = document.querySelectorAll('.product-card');
//     const contactButtons = document.querySelectorAll('.product-card .btn-primary');
    
//     // Add hover effects and click handlers
//     productCards.forEach((card, index) => {
//         // Add click handler to contact buttons
//         const contactBtn = card.querySelector('.btn-primary');
//         if (contactBtn) {
//             contactBtn.addEventListener('click', function(e) {
//                 e.stopPropagation();
//                 const productName = card.querySelector('h3').textContent;
//                 const sellerName = card.querySelector('.product-seller').textContent;
//                 contactSeller(productName, sellerName);
//             });
//         }
        
//         // Add click handler to card (for product details)
//         card.addEventListener('click', function() {
//             const productName = this.querySelector('h3').textContent;
//             showProductDetails(productName);
//         });
//     });
// }

// // Contact seller functionality
// function contactSeller(productName, sellerName) {
//     showNotification(`Contacting ${sellerName} about ${productName}...`, 'info');
    
//     // Simulate contact process
//     setTimeout(() => {
//         showNotification('Message sent! Seller will respond soon.', 'success');
//     }, 1500);
// }

// // Show product details
// function showProductDetails(productName) {
//     showNotification(`Loading details for ${productName}...`, 'info');
    
//     // TODO: Implement product details modal or navigation
//     setTimeout(() => {
//         showNotification('Product details page coming soon!', 'info');
//     }, 1000);
// }

// // Shop card interactions
// function initializeShopCards() {
//     const shopCards = document.querySelectorAll('.shop-card');
    
//     shopCards.forEach(card => {
//         card.addEventListener('click', function() {
//             const shopType = this.getAttribute('data-shop');
//             openShop(shopType);
//         });
//     });
// }

// // Open shop overlay
// function openShop(shopType) {
//     const overlay = document.getElementById('shopOverlay');
//     const content = document.getElementById('shopContent');
    
//     content.innerHTML = generateShopContent(shopType);
//     overlay.classList.remove('hidden');
    
//     // Initialize shop product interactions
//     initializeShopProducts();
// }

// // Close shop overlay
// function closeShop() {
//     const overlay = document.getElementById('shopOverlay');
//     overlay.classList.add('hidden');
// }

// // Generate shop content based on type
// function generateShopContent(shopType) {
//     const shopData = getShopData(shopType);
    
//     return `
//         <div class="shop-header">
//             <h1>${shopData.icon} ${shopData.name}</h1>
//             <p>${shopData.description}</p>
//         </div>
//         <div class="shop-products">
//             ${shopData.products.map(product => `
//                 <div class="shop-product" data-product-id="${product.id}">
//                     <div class="shop-product-image">${product.emoji}</div>
//                     <div class="shop-product-info">
//                         <h3>${product.name}</h3>
//                         <div class="shop-product-price">${product.price}</div>
//                         <p class="shop-product-description">${product.description}</p>
//                         <button class="btn btn-primary btn-sm">Add to Cart</button>
//                     </div>
//                 </div>
//             `).join('')}
//         </div>
//     `;
// }

// // Get shop data
// function getShopData(shopType) {
//     const shops = {
//         barber: {
//             name: "Barber Shop",
//             icon: "💇‍♂️",
//             description: "Professional hair cutting and styling services",
//             products: [
//                 { id: 'b1', name: 'Classic Haircut', price: '$15', emoji: '✂️', description: 'Traditional men\'s haircut with styling' },
//                 { id: 'b2', name: 'Beard Trim', price: '$8', emoji: '🧔', description: 'Professional beard shaping and trimming' },
//                 { id: 'b3', name: 'Hot Towel Shave', price: '$12', emoji: '🔥', description: 'Relaxing hot towel shave experience' },
//                 { id: 'b4', name: 'Hair Wash & Style', price: '$10', emoji: '🧴', description: 'Complete hair wash and styling service' },
//                 { id: 'b5', name: 'Mustache Trim', price: '$5', emoji: '👨', description: 'Precise mustache trimming and shaping' },
//                 { id: 'b6', name: 'Hair Treatment', price: '$20', emoji: '💆‍♂️', description: 'Nourishing hair treatment and massage' }
//             ]
//         },
//         icecream: {
//             name: "Ice Cream Parlor",
//             icon: "🍦",
//             description: "Delicious ice cream and frozen treats",
//             products: [
//                 { id: 'i1', name: 'Vanilla Scoop', price: '$3', emoji: '🍦', description: 'Classic vanilla ice cream scoop' },
//                 { id: 'i2', name: 'Chocolate Sundae', price: '$6', emoji: '🍨', description: 'Rich chocolate ice cream with toppings' },
//                 { id: 'i3', name: 'Strawberry Cone', price: '$4', emoji: '🍓', description: 'Fresh strawberry ice cream in waffle cone' },
//                 { id: 'i4', name: 'Banana Split', price: '$8', emoji: '🍌', description: 'Three scoops with banana and toppings' },
//                 { id: 'i5', name: 'Milkshake', price: '$5', emoji: '🥤', description: 'Thick and creamy milkshake' },
//                 { id: 'i6', name: 'Ice Cream Sandwich', price: '$4', emoji: '🍪', description: 'Ice cream between two cookies' }
//             ]
//         },
//         clothing: {
//             name: "Clothing Store",
//             icon: "👕",
//             description: "Trendy fashion and apparel for everyone",
//             products: [
//                 { id: 'c1', name: 'Cotton T-Shirt', price: '$15', emoji: '👕', description: 'Comfortable 100% cotton t-shirt' },
//                 { id: 'c2', name: 'Blue Jeans', price: '$45', emoji: '👖', description: 'Classic blue denim jeans' },
//                 { id: 'c3', name: 'Summer Dress', price: '$35', emoji: '👗', description: 'Light and breezy summer dress' },
//                 { id: 'c4', name: 'Sneakers', price: '$60', emoji: '👟', description: 'Comfortable running sneakers' },
//                 { id: 'c5', name: 'Jacket', price: '$75', emoji: '🧥', description: 'Warm and stylish jacket' },
//                 { id: 'c6', name: 'Baseball Cap', price: '$20', emoji: '🧢', description: 'Adjustable baseball cap' }
//             ]
//         },
//         restaurant: {
//             name: "Restaurant",
//             icon: "🍽️",
//             description: "Delicious meals and fine dining experience",
//             products: [
//                 { id: 'r1', name: 'Grilled Chicken', price: '$18', emoji: '🍗', description: 'Perfectly grilled chicken with herbs' },
//                 { id: 'r2', name: 'Pasta Carbonara', price: '$16', emoji: '🍝', description: 'Creamy pasta with bacon and cheese' },
//                 { id: 'r3', name: 'Caesar Salad', price: '$12', emoji: '🥗', description: 'Fresh romaine with caesar dressing' },
//                 { id: 'r4', name: 'Beef Burger', price: '$14', emoji: '🍔', description: 'Juicy beef burger with fries' },
//                 { id: 'r5', name: 'Fish & Chips', price: '$15', emoji: '🍟', description: 'Beer battered fish with crispy chips' },
//                 { id: 'r6', name: 'Chocolate Cake', price: '$8', emoji: '🍰', description: 'Rich chocolate cake slice' }
//             ]
//         },
//         cafe: {
//             name: "Café",
//             icon: "☕",
//             description: "Fresh coffee, pastries and light bites",
//             products: [
//                 { id: 'cf1', name: 'Espresso', price: '$3', emoji: '☕', description: 'Rich and bold espresso shot' },
//                 { id: 'cf2', name: 'Cappuccino', price: '$4', emoji: '☕', description: 'Creamy cappuccino with foam art' },
//                 { id: 'cf3', name: 'Croissant', price: '$3', emoji: '🥐', description: 'Buttery and flaky croissant' },
//                 { id: 'cf4', name: 'Muffin', price: '$4', emoji: '🧁', description: 'Fresh blueberry muffin' },
//                 { id: 'cf5', name: 'Latte', price: '$5', emoji: '🥛', description: 'Smooth latte with steamed milk' },
//                 { id: 'cf6', name: 'Bagel', price: '$6', emoji: '🥯', description: 'Toasted bagel with cream cheese' }
//             ]
//         },
//         furniture: {
//             name: "Furniture Store",
//             icon: "🛏️",
//             description: "Quality furniture for your home",
//             products: [
//                 { id: 'f1', name: 'Queen Bed', price: '$599', emoji: '🛏️', description: 'Comfortable queen size bed frame' },
//                 { id: 'f2', name: 'Dining Table', price: '$399', emoji: '🪑', description: 'Wooden dining table for 6' },
//                 { id: 'f3', name: 'Sofa', price: '$799', emoji: '🛋️', description: 'Comfortable 3-seater sofa' },
//                 { id: 'f4', name: 'Wardrobe', price: '$499', emoji: '🚪', description: 'Large wardrobe with mirror' },
//                 { id: 'f5', name: 'Office Chair', price: '$199', emoji: '💺', description: 'Ergonomic office chair' },
//                 { id: 'f6', name: 'Bookshelf', price: '$159', emoji: '📚', description: 'Tall wooden bookshelf' }
//             ]
//         },
//         electronics: {
//             name: "Electronics Shop",
//             icon: "📱",
//             description: "Latest gadgets and electronic devices",
//             products: [
//                 { id: 'e1', name: 'Smartphone', price: '$699', emoji: '📱', description: 'Latest smartphone with camera' },
//                 { id: 'e2', name: 'Laptop', price: '$999', emoji: '💻', description: 'High-performance laptop' },
//                 { id: 'e3', name: 'Headphones', price: '$199', emoji: '🎧', description: 'Wireless noise-canceling headphones' },
//                 { id: 'e4', name: 'Tablet', price: '$399', emoji: '📱', description: '10-inch tablet with keyboard' },
//                 { id: 'e5', name: 'Smart Watch', price: '$299', emoji: '⌚', description: 'Fitness tracking smartwatch' },
//                 { id: 'e6', name: 'Gaming Console', price: '$499', emoji: '🎮', description: 'Latest gaming console' }
//             ]
//         },
//         pharmacy: {
//             name: "Pharmacy",
//             icon: "💊",
//             description: "Health products and medications",
//             products: [
//                 { id: 'p1', name: 'Pain Relief', price: '$8', emoji: '💊', description: 'Over-the-counter pain medication' },
//                 { id: 'p2', name: 'Vitamins', price: '$15', emoji: '🌿', description: 'Daily multivitamin supplements' },
//                 { id: 'p3', name: 'Hand Sanitizer', price: '$3', emoji: '🧴', description: 'Antibacterial hand sanitizer' },
//                 { id: 'p4', name: 'First Aid Kit', price: '$25', emoji: '🩹', description: 'Complete first aid supplies' },
//                 { id: 'p5', name: 'Thermometer', price: '$12', emoji: '🌡️', description: 'Digital thermometer' },
//                 { id: 'p6', name: 'Face Masks', price: '$10', emoji: '😷', description: 'Disposable protective masks' }
//             ]
//         }
//     };
    
//     return shops[shopType] || shops.clothing;
// }

// // Initialize shop product interactions
// function initializeShopProducts() {
//     const addToCartButtons = document.querySelectorAll('.shop-product .btn-primary');
    
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             e.stopPropagation();
//             const productCard = this.closest('.shop-product');
//             const productId = productCard.getAttribute('data-product-id');
//             const productName = productCard.querySelector('h3').textContent;
//             const productPrice = productCard.querySelector('.shop-product-price').textContent;
            
//             addToCart(productId, productName, productPrice);
//         });
//     });
// }

// // Navigation functionality
// function initializeNavigation() {
//     const loginBtn = document.querySelector('.btn-outline');
//     const sellerBtn = document.querySelector('.nav-actions .btn-primary');
    
//     if (loginBtn) {
//         loginBtn.addEventListener('click', function() {
//             showNotification('Login page coming soon!', 'info');
//         });
//     }
    
//     if (sellerBtn) {
//         sellerBtn.addEventListener('click', function() {
//             showNotification('Seller registration coming soon!', 'info');
//         });
//     }
    
//     // Hero action buttons
//     const startBuyingBtn = document.querySelector('.btn-hero');
//     const becomeSellerBtn = document.querySelector('.btn-marketplace');
    
//     if (startBuyingBtn) {
//         startBuyingBtn.addEventListener('click', function() {
//             // Scroll to products section
//             const productsSection = document.querySelector('.featured-products');
//             if (productsSection) {
//                 productsSection.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     }
    
//     if (becomeSellerBtn) {
//         becomeSellerBtn.addEventListener('click', function() {
//             showNotification('Seller onboarding coming soon!', 'info');
//         });
//     }
// }

// // Notification system
// function showNotification(message, type = 'info') {
//     // Remove existing notifications
//     const existingNotification = document.querySelector('.notification');
//     if (existingNotification) {
//         existingNotification.remove();
//     }
    
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = `notification notification-${type}`;
//     notification.textContent = message;
    
//     // Add styles
//     Object.assign(notification.style, {
//         position: 'fixed',
//         top: '20px',
//         right: '20px',
//         padding: '12px 20px',
//         borderRadius: '8px',
//         color: 'white',
//         fontWeight: '500',
//         zIndex: '1000',
//         transform: 'translateX(100%)',
//         transition: 'transform 0.3s ease',
//         maxWidth: '300px',
//         wordWrap: 'break-word'
//     });
    
//     // Set background color based on type
//     switch (type) {
//         case 'success':
//             notification.style.background = 'hsl(140, 50%, 35%)';
//             break;
//         case 'error':
//             notification.style.background = 'hsl(0, 84%, 60%)';
//             break;
//         case 'warning':
//             notification.style.background = 'hsl(45, 85%, 55%)';
//             break;
//         default: // info
//             notification.style.background = 'hsl(18, 85%, 55%)';
//     }
    
//     // Add to DOM
//     document.body.appendChild(notification);
    
//     // Animate in
//     setTimeout(() => {
//         notification.style.transform = 'translateX(0)';
//     }, 100);
    
//     // Auto remove after 3 seconds
//     setTimeout(() => {
//         notification.style.transform = 'translateX(100%)';
//         setTimeout(() => {
//             if (notification.parentNode) {
//                 notification.remove();
//             }
//         }, 300);
//     }, 3000);
// }

// // Utility functions
// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// // Analytics placeholder
// function trackEvent(eventName, properties = {}) {
//     console.log('Analytics Event:', eventName, properties);
//     // TODO: Implement actual analytics tracking
// }

// // Track page load
// trackEvent('page_view', {
//     page: 'homepage',
//     timestamp: new Date().toISOString()
// });

// // Service worker registration (for future PWA features)
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         // TODO: Register service worker when ready
//         console.log('Service Worker support detected');
//     });
// }



// document.querySelectorAll('.shop-card').forEach(card => {
//   card.addEventListener('click', () => {
//     const shop = card.dataset.shop;
//     openShop(shop);
//   });
// });

// function openShop(shop) {
//   // In a real app, you might fetch data from server here
//   const dashboardHTML = getShopDashboard(shop);
//   document.getElementById('shopContent').innerHTML = dashboardHTML;
//   document.getElementById('shopOverlay').classList.remove('hidden');
// }

// function closeShop() {
//   document.getElementById('shopOverlay').classList.add('hidden');
// }

// function getShopDashboard(shop) {
//   if (shop === 'icecream') {
//     return `
//       <h2>🍦 Ice Cream Parlor Dashboard</h2>
//       <div class="tabs">
//         <button data-tab="orders" class="active">Orders</button>
//         <button data-tab="sales">Sales Graph</button>
//         <button data-tab="payroll">Payroll</button>
//       </div>
//       <div id="orders" class="tab-content">
//         <ul>
//           <li>Order #201 - Vanilla Cone - $3</li>
//           <li>Order #202 - Chocolate Sundae - $5</li>
//         </ul>
//       </div>
//       <div id="sales" class="tab-content hidden">
//         <canvas id="salesChart"></canvas>
//       </div>
//       <div id="payroll" class="tab-content hidden">
//         <p>Jane Doe - $500</p>
//         <p>Mike Smith - $450</p>
//       </div>
//       <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
//       <script>
//         const ctx = document.getElementById('salesChart').getContext('2d');
//         new Chart(ctx, {
//           type: 'bar',
//           data: {
//             labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//             datasets: [{ label: 'Sales ($)', data: [50, 75, 60, 90, 120, 150, 180] }]
//           }
//         });
//       </script>
//     `;
//   }

//   // other shops can follow same pattern...
//   return `<p>Shop dashboard for ${shop} coming soon!</p>`;
// }


// Main JavaScript for Cemall Virtual Mall

// Shop data templates
const shopTemplates = {
    barber: {
        icon: '💇‍♂️',
        name: 'Barber Shop',
        description: 'Professional hair cutting and styling services',
        stats: {
            customers: 1247,
            revenue: 18450,
            services: 12
        },
        products: [
            { name: 'Hair Cut', price: 25, stock: 50 },
            { name: 'Beard Trim', price: 15, stock: 30 },
            { name: 'Hair Coloring', price: 45, stock: 20 }
        ]
    },
    icecream: {
        icon: '🍦',
        name: 'Ice Cream Parlor',
        description: 'Delicious ice cream and frozen treats',
        stats: {
            customers: 2156,
            revenue: 32400,
            flavors: 24
        },
        products: [
            { name: 'Vanilla Cone', price: 3.50, stock: 100 },
            { name: 'Chocolate Sundae', price: 6.00, stock: 75 },
            { name: 'Fruit Sorbet', price: 4.50, stock: 60 }
        ]
    },
    clothing: {
        icon: '👕',
        name: 'Clothing Store',
        description: 'Fashionable apparel for everyone',
        stats: {
            customers: 1890,
            revenue: 56700,
            items: 156
        },
        products: [
            { name: 'T-Shirt', price: 19.99, stock: 200 },
            { name: 'Jeans', price: 49.99, stock: 150 },
            { name: 'Jacket', price: 79.99, stock: 80 }
        ]
    },
    restaurant: {
        icon: '🍽️',
        name: 'Restaurant',
        description: 'Delicious meals and dining experience',
        stats: {
            customers: 3421,
            revenue: 89200,
            dishes: 35
        },
        products: [
            { name: 'Pasta Dish', price: 16.99, stock: 50 },
            { name: 'Grilled Salmon', price: 22.99, stock: 30 },
            { name: 'Vegetarian Pizza', price: 14.99, stock: 40 }
        ]
    },
    cafe: {
        icon: '☕',
        name: 'Café',
        description: 'Coffee, pastries and cozy atmosphere',
        stats: {
            customers: 1678,
            revenue: 28700,
            drinks: 18
        },
        products: [
            { name: 'Espresso', price: 2.50, stock: 200 },
            { name: 'Cappuccino', price: 3.75, stock: 150 },
            { name: 'Croissant', price: 2.99, stock: 100 }
        ]
    },
    furniture: {
        icon: '🛏️',
        name: 'Furniture Store',
        description: 'Quality furniture for your home',
        stats: {
            customers: 890,
            revenue: 123400,
            products: 89
        },
        products: [
            { name: 'Wooden Chair', price: 89.99, stock: 45 },
            { name: 'Coffee Table', price: 149.99, stock: 30 },
            { name: 'Bookshelf', price: 199.99, stock: 25 }
        ]
    },
    electronics: {
        icon: '📱',
        name: 'Electronics Shop',
        description: 'Latest gadgets and technology',
        stats: {
            customers: 1345,
            revenue: 198300,
            devices: 67
        },
        products: [
            { name: 'Wireless Earbuds', price: 79.99, stock: 120 },
            { name: 'Smart Watch', price: 199.99, stock: 85 },
            { name: 'Tablet', price: 299.99, stock: 40 }
        ]
    },
    pharmacy: {
        icon: '💊',
        name: 'Pharmacy',
        description: 'Health products and medications',
        stats: {
            customers: 2987,
            revenue: 45600,
            products: 234
        },
        products: [
            { name: 'Vitamins', price: 12.99, stock: 300 },
            { name: 'Pain Relief', price: 8.99, stock: 250 },
            { name: 'Skincare', price: 15.99, stock: 180 }
        ]
    }
};

// Chart instances
let revenueChart, customerChart;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeShopCards();
    initializeEventListeners();
});

// Initialize shop card click events
function initializeShopCards() {
    const shopCards = document.querySelectorAll('.shop-card');
    shopCards.forEach(card => {
        card.addEventListener('click', function() {
            const shopType = this.getAttribute('data-shop');
            openShop(shopType);
        });
    });
}

// Initialize other event listeners
function initializeEventListeners() {
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const heroSearchBtn = document.querySelector('.hero-search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', performHeroSearch);
    }
    
    // Enter key support for search
    const searchInputs = document.querySelectorAll('.search-input, .hero-search-input');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    });
}

// Open shop overlay
function openShop(shopType) {
    const shopData = shopTemplates[shopType];
    if (!shopData) return;
    
    const shopContent = document.getElementById('shopContent');
    const shopOverlay = document.getElementById('shopOverlay');
    
    shopContent.innerHTML = generateShopHTML(shopData, shopType);
    shopOverlay.classList.remove('hidden');
    
    // Initialize shop-specific functionality
    initializeShopManagement(shopType);
    initializeCharts(shopData);
}

// Close shop overlay
function closeShop() {
    const shopOverlay = document.getElementById('shopOverlay');
    shopOverlay.classList.add('hidden');
    
    // Clean up charts
    if (revenueChart) {
        revenueChart.destroy();
    }
    if (customerChart) {
        customerChart.destroy();
    }
}

// Generate shop HTML content
function generateShopHTML(shopData, shopType) {
    return `
        <div class="shop-header">
            <div class="shop-header-icon">${shopData.icon}</div>
            <h2>${shopData.name}</h2>
            <p>${shopData.description}</p>
            <div class="shop-stats">
                <div class="stat-item">
                    <div class="stat-value">${shopData.stats.customers.toLocaleString()}</div>
                    <div class="stat-label">Customers</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">$${shopData.stats.revenue.toLocaleString()}</div>
                    <div class="stat-label">Revenue</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${shopData.stats[Object.keys(shopData.stats)[2]].toLocaleString()}</div>
                    <div class="stat-label">${Object.keys(shopData.stats)[2].charAt(0).toUpperCase() + Object.keys(shopData.stats)[2].slice(1)}</div>
                </div>
            </div>
        </div>
        
        <div class="shop-management">
            <h3>Shop Management</h3>
            <div class="management-grid">
                <div class="management-card" onclick="manageProducts('${shopType}')">
                    <div class="management-icon">📦</div>
                    <h4>Products</h4>
                    <p>Manage your inventory</p>
                </div>
                <div class="management-card" onclick="manageOrders('${shopType}')">
                    <div class="management-icon">📋</div>
                    <h4>Orders</h4>
                    <p>View customer orders</p>
                </div>
                <div class="management-card" onclick="manageCustomers('${shopType}')">
                    <div class="management-icon">👥</div>
                    <h4>Customers</h4>
                    <p>Customer management</p>
                </div>
                <div class="management-card" onclick="showAnalytics('${shopType}')">
                    <div class="management-icon">📊</div>
                    <h4>Analytics</h4>
                    <p>Sales and reports</p>
                </div>
            </div>
        </div>
        
        <div class="shop-products">
            <div class="products-header">
                <h3>Current Products</h3>
                <button class="btn btn-primary add-product-btn" onclick="addProduct('${shopType}')">Add Product</button>
            </div>
            <div class="product-management-grid">
                ${generateProductCards(shopData.products)}
            </div>
        </div>
        
        <div class="analytics-section">
            <h3>Sales Analytics</h3>
            <div class="analytics-grid">
                <div class="chart-container">
                    <canvas id="revenueChart" width="400" height="200"></canvas>
                </div>
                <div class="chart-container">
                    <canvas id="customerChart" width="400" height="200"></canvas>
                </div>
            </div>
        </div>
    `;
}

// Generate product cards HTML
function generateProductCards(products) {
    return products.map(product => `
        <div class="manage-product-card">
            <h4>${product.name}</h4>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Stock:</strong> ${product.stock} units</p>
            <div class="product-actions">
                <button class="btn btn-edit btn-sm" onclick="editProduct('${product.name}')">Edit</button>
                <button class="btn btn-delete btn-sm" onclick="deleteProduct('${product.name}')">Delete</button>
            </div>
        </div>
    `).join('');
}

// Initialize shop management functionality
function initializeShopManagement(shopType) {
    // Add any shop-specific initialization here
    console.log(`Initializing management for ${shopType}`);
}

// Initialize charts
function initializeCharts(shopData) {
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const customerCtx = document.getElementById('customerChart').getContext('2d');
    
    // Revenue chart
    revenueChart = new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Revenue',
                data: [1200, 1900, 1500, 2200, 1800, 2500],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Revenue Trend'
                }
            }
        }
    });
    
    // Customer chart
    customerChart = new Chart(customerCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Customers',
                data: [150, 220, 180, 260, 200, 280],
                backgroundColor: '#10b981'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Customer Growth'
                }
            }
        }
    });
}

// Shop management functions
function manageProducts(shopType) {
    alert(`Managing products for ${shopType} shop`);
    // Implement product management logic
}

function manageOrders(shopType) {
    alert(`Managing orders for ${shopType} shop`);
    // Implement order management logic
}

function manageCustomers(shopType) {
    alert(`Managing customers for ${shopType} shop`);
    // Implement customer management logic
}

function showAnalytics(shopType) {
    alert(`Showing analytics for ${shopType} shop`);
    // Implement analytics display logic
}

function addProduct(shopType) {
    alert(`Adding new product to ${shopType} shop`);
    // Implement add product logic
}

function editProduct(productName) {
    alert(`Editing product: ${productName}`);
    // Implement edit product logic
}

function deleteProduct(productName) {
    if (confirm(`Are you sure you want to delete ${productName}?`)) {
        alert(`Product ${productName} deleted`);
        // Implement delete product logic
    }
}

// Search functionality
function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        alert(`Searching for: ${query}`);
        // Implement search logic
    }
}

function performHeroSearch() {
    const heroSearchInput = document.querySelector('.hero-search-input');
    const query = heroSearchInput.value.trim();
    
    if (query) {
        alert(`Searching shops for: ${query}`);
        // Implement hero search logic
    }
}

// Close overlay when clicking outside content
document.getElementById('shopOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeShop();
    }
});