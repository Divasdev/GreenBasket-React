// ShopEasy Pro - E-commerce Application JavaScript
class EcommerceApp {
    constructor() {
        this.cart = [];
        this.wishlist = [];
        this.orders = [];
        this.currentUser = null;
        this.currentPage = 'homePage';
        this.products = [];
        this.categories = [];
        this.offers = [];
        this.testimonials = [];
        
        this.initializeData();
        this.setupEventListeners();
        this.loadHomePage();
    }

    initializeData() {
        // Product data with realistic information and proper category mapping
        this.products = [
            {id: 1, name: "iPhone 15 Pro", price: 999, originalPrice: 1199, rating: 4.8, category: "electronics", subcategory: "smartphones", description: "Latest iPhone with advanced camera system and A17 Pro chip", inStock: true, discount: "17% OFF", icon: "📱"},
            {id: 2, name: "Samsung Galaxy S24", price: 899, originalPrice: 1099, rating: 4.7, category: "electronics", subcategory: "smartphones", description: "Powerful Android flagship with AI features and stunning display", inStock: true, discount: "18% OFF", icon: "📱"},
            {id: 3, name: "MacBook Air M3", price: 1299, originalPrice: 1499, rating: 4.9, category: "electronics", subcategory: "laptops", description: "Ultra-thin laptop with M3 chip for incredible performance", inStock: true, discount: "13% OFF", icon: "💻"},
            {id: 4, name: "Dell XPS 13", price: 1099, originalPrice: 1299, rating: 4.6, category: "electronics", subcategory: "laptops", description: "Premium Windows laptop with InfinityEdge display", inStock: true, discount: "15% OFF", icon: "💻"},
            {id: 5, name: "iPad Pro 12.9", price: 1099, originalPrice: 1299, rating: 4.8, category: "electronics", subcategory: "tablets", description: "Professional tablet with M2 chip and Liquid Retina display", inStock: true, discount: "15% OFF", icon: "📱"},
            {id: 6, name: "Men's Cotton T-Shirt", price: 25, originalPrice: 35, rating: 4.5, category: "fashion", subcategory: "men", description: "Comfortable 100% cotton t-shirt in various colors", inStock: true, discount: "29% OFF", icon: "👔"},
            {id: 7, name: "Women's Summer Dress", price: 45, originalPrice: 65, rating: 4.6, category: "fashion", subcategory: "women", description: "Elegant floral print summer dress, perfect for any occasion", inStock: true, discount: "31% OFF", icon: "👗"},
            {id: 8, name: "Nike Running Shoes", price: 120, originalPrice: 150, rating: 4.7, category: "fashion", subcategory: "footwear", description: "Comfortable running shoes with advanced air cushioning technology", inStock: true, discount: "20% OFF", icon: "👟"},
            {id: 9, name: "Organic Bananas", price: 3, originalPrice: 4, rating: 4.4, category: "groceries", subcategory: "fresh-produce", description: "Fresh organic bananas - 2 lbs, pesticide-free", inStock: true, discount: "25% OFF", icon: "🍌"},
            {id: 10, name: "Whole Milk", price: 4, originalPrice: 5, rating: 4.5, category: "groceries", subcategory: "dairy-eggs", description: "Fresh whole milk - 1 gallon, farm-fresh quality", inStock: true, discount: "20% OFF", icon: "🥛"},
            {id: 11, name: "Free-Range Eggs", price: 6, originalPrice: 7, rating: 4.6, category: "groceries", subcategory: "dairy-eggs", description: "Grade A free-range eggs - 12 count, cage-free", inStock: true, discount: "14% OFF", icon: "🥚"},
            {id: 12, name: "Fresh Salmon Fillet", price: 15, originalPrice: 18, rating: 4.7, category: "groceries", subcategory: "meat-seafood", description: "Premium Atlantic salmon - 1 lb, wild-caught", inStock: true, discount: "17% OFF", icon: "🐟"},
            {id: 13, name: "Ergonomic Office Chair", price: 299, originalPrice: 399, rating: 4.5, category: "home-kitchen", subcategory: "furniture", description: "Comfortable office chair with lumbar support and adjustable height", inStock: true, discount: "25% OFF", icon: "🪑"},
            {id: 14, name: "Coffee Maker", price: 89, originalPrice: 119, rating: 4.6, category: "home-kitchen", subcategory: "appliances", description: "Programmable drip coffee maker with thermal carafe", inStock: true, discount: "25% OFF", icon: "☕"},
            {id: 15, name: "Wireless Headphones", price: 199, originalPrice: 249, rating: 4.8, category: "electronics", subcategory: "audio", description: "Premium wireless headphones with noise cancellation", inStock: true, discount: "20% OFF", icon: "🎧"},
            {id: 16, name: "Gaming Console", price: 499, originalPrice: 599, rating: 4.9, category: "electronics", subcategory: "gaming", description: "Next-gen gaming console with 4K graphics", inStock: true, discount: "17% OFF", icon: "🎮"},
            {id: 17, name: "Digital Camera", price: 899, originalPrice: 1099, rating: 4.7, category: "electronics", subcategory: "cameras", description: "Professional mirrorless camera with 4K video", inStock: true, discount: "18% OFF", icon: "📷"},
            {id: 18, name: "Women's Handbag", price: 89, originalPrice: 120, rating: 4.5, category: "fashion", subcategory: "accessories", description: "Stylish leather handbag with multiple compartments", inStock: true, discount: "26% OFF", icon: "👜"},
            {id: 19, name: "Kids Toy Set", price: 35, originalPrice: 50, rating: 4.6, category: "home-kitchen", subcategory: "toys", description: "Educational building blocks set for children 3+", inStock: true, discount: "30% OFF", icon: "🧸"},
            {id: 20, name: "Fitness Tracker", price: 149, originalPrice: 199, rating: 4.4, category: "electronics", subcategory: "fitness", description: "Advanced fitness tracker with heart rate monitor", inStock: true, discount: "25% OFF", icon: "⌚"},
            // Additional products for more variety
            {id: 21, name: "Greek Yogurt", price: 5, originalPrice: 6, rating: 4.5, category: "groceries", subcategory: "dairy-eggs", description: "Creamy Greek yogurt - 32oz container", inStock: true, discount: "17% OFF", icon: "🥛"},
            {id: 22, name: "Avocados", price: 4, originalPrice: 5, rating: 4.3, category: "groceries", subcategory: "fresh-produce", description: "Fresh avocados - pack of 4", inStock: true, discount: "20% OFF", icon: "🥑"},
            {id: 23, name: "Chicken Breast", price: 12, originalPrice: 15, rating: 4.6, category: "groceries", subcategory: "meat-seafood", description: "Fresh chicken breast - 2 lbs", inStock: true, discount: "20% OFF", icon: "🍗"},
            {id: 24, name: "Orange Juice", price: 6, originalPrice: 8, rating: 4.4, category: "groceries", subcategory: "beverages", description: "Fresh squeezed orange juice - 64oz", inStock: true, discount: "25% OFF", icon: "🧃"}
        ];

        this.offers = [
            {title: "50% OFF Electronics", subtitle: "Limited time offer on phones & laptops", color: "#FF6B6B"},
            {title: "30% OFF Groceries", subtitle: "Fresh deals on everyday essentials", color: "#4ECDC4"},
            {title: "Buy 2 Get 1 FREE", subtitle: "Fashion items - Mix and match", color: "#45B7D1"},
            {title: "Free Shipping", subtitle: "On orders above $50", color: "#96CEB4"}
        ];

        this.testimonials = [
            {name: "Sarah Johnson", text: "Amazing shopping experience! Fast delivery and great prices.", rating: 5},
            {name: "Mike Chen", text: "Love the variety of products. Customer service is excellent.", rating: 5},
            {name: "Emily Davis", text: "Best online store I've used. Highly recommended!", rating: 5}
        ];
    }

    setupEventListeners() {
        // FIXED: Direct event binding without delegation issues
        this.bindNavigationEvents();
        this.bindHeaderEvents();
        this.bindSearchEvents();
        this.bindCartEvents();
        this.bindCheckoutEvents();
        this.bindAccountEvents();
        this.bindMiscEvents();
    }

    bindNavigationEvents() {
        // Category dropdown navigation - FIXED
        document.querySelectorAll('.category-dropdown').forEach(dropdown => {
            dropdown.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const category = e.currentTarget.dataset.category;
                console.log('Category dropdown clicked:', category);
                this.navigateToCategory(category);
            });
        });

        // Subcategory links - FIXED
        document.querySelectorAll('.dropdown-content a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const subcategory = e.target.dataset.subcategory;
                console.log('Subcategory clicked:', subcategory);
                this.navigateToSubcategory(subcategory);
            });
        });

        // Category cards on homepage - FIXED
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const category = e.currentTarget.dataset.category;
                console.log('Category card clicked:', category);
                this.navigateToCategory(category);
            });
        });
    }

    bindHeaderEvents() {
        // Cart button - FIXED
        const cartBtn = document.getElementById('cartBtn');
        if (cartBtn) {
            cartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Cart button clicked');
                this.navigateToCart();
            });
        }

        // Account button
        const accountBtn = document.getElementById('accountBtn');
        if (accountBtn) {
            accountBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showPage('accountPage');
            });
        }

        // Sign in button
        const signInBtn = document.getElementById('signInBtn');
        if (signInBtn) {
            signInBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSignInModal();
            });
        }

        // Logo click - go home
        const logo = document.querySelector('.header__logo');
        if (logo) {
            logo.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateHome();
            });
        }
    }

    bindSearchEvents() {
        // Search input and button - FIXED
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.querySelector('.search__button');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
            
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch(e.target.value);
                }
            });
        }

        if (searchButton) {
            searchButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Search button clicked');
                const query = document.getElementById('searchInput').value;
                this.performSearch(query);
            });
        }
    }

    bindCartEvents() {
        // Checkout button
        const checkoutBtn = document.getElementById('proceedToCheckout');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.proceedToCheckout();
            });
        }
    }

    bindCheckoutEvents() {
        // Continue to payment
        const continueBtn = document.getElementById('continueToPayment');
        if (continueBtn) {
            continueBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.proceedToPayment();
            });
        }

        // Place order
        const placeOrderBtn = document.getElementById('placeOrder');
        if (placeOrderBtn) {
            placeOrderBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.placeOrder();
            });
        }

        // Order confirmation buttons
        const trackOrderBtn = document.getElementById('trackOrder');
        const continueShoppingBtn = document.getElementById('continueShopping');
        
        if (trackOrderBtn) {
            trackOrderBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showOrderTracking();
            });
        }

        if (continueShoppingBtn) {
            continueShoppingBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateHome();
            });
        }
    }

    bindAccountEvents() {
        // Account tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchAccountTab(e.target.dataset.tab);
            });
        });
    }

    bindMiscEvents() {
        // Newsletter signup
        const newsletterBtn = document.querySelector('.newsletter-form .btn');
        if (newsletterBtn) {
            newsletterBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleNewsletterSignup();
            });
        }

        // Live chat
        const liveChatBtn = document.getElementById('liveChat');
        if (liveChatBtn) {
            liveChatBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openLiveChat();
            });
        }

        // Sort and filter dropdowns
        const sortSelect = document.getElementById('sortSelect');
        const filterSelect = document.getElementById('filterSelect');
        
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortProducts(e.target.value);
            });
        }

        if (filterSelect) {
            filterSelect.addEventListener('change', (e) => {
                this.filterProducts(e.target.value);
            });
        }
    }

    // FIXED: Navigation methods
    navigateToCategory(category) {
        console.log('Navigating to category:', category);
        if (category === 'groceries') {
            this.showPage('groceryPage');
            this.loadGroceryPage();
        } else {
            this.showPage('productsPage');
            this.showCategoryProducts(category);
        }
    }

    navigateToSubcategory(subcategory) {
        console.log('Navigating to subcategory:', subcategory);
        this.showPage('productsPage');
        this.showSubcategoryProducts(subcategory);
    }

    navigateToCart() {
        console.log('Navigating to cart');
        this.showPage('cartPage');
        this.updateCartDisplay();
    }

    navigateHome() {
        console.log('Navigating home');
        this.showPage('homePage');
        this.loadHomePage();
    }

    proceedToCheckout() {
        console.log('Proceeding to checkout');
        if (this.cart.length === 0) {
            this.showNotification('Your cart is empty!', 'error');
            return;
        }
        this.showPage('checkoutPage');
        this.initializeCheckout();
    }

    // FIXED: Page display method
    showPage(pageId) {
        console.log('Showing page:', pageId);
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;
        } else {
            console.error('Page not found:', pageId);
        }

        // Update cart count
        this.updateCartCount();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // FIXED: Category product display
    showCategoryProducts(category) {
        console.log('Showing products for category:', category);
        
        const filteredProducts = this.products.filter(p => p.category === category);
        console.log(`Found ${filteredProducts.length} products for category ${category}`);
        
        const titleElement = document.getElementById('pageTitle');
        if (titleElement) {
            titleElement.textContent = this.formatCategoryName(category);
        }
        
        this.displayProducts(filteredProducts);
    }

    // FIXED: Subcategory product display
    showSubcategoryProducts(subcategory) {
        console.log('Showing products for subcategory:', subcategory);
        
        const filteredProducts = this.products.filter(p => p.subcategory === subcategory);
        console.log(`Found ${filteredProducts.length} products for subcategory ${subcategory}`);
        
        const titleElement = document.getElementById('pageTitle');
        if (titleElement) {
            titleElement.textContent = this.formatCategoryName(subcategory);
        }
        
        this.displayProducts(filteredProducts);
    }

    formatCategoryName(name) {
        return name.replace(/-/g, ' ')
                  .replace(/\b\w/g, l => l.toUpperCase())
                  .replace('Home Kitchen', 'Home & Kitchen');
    }

    displayProducts(products) {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) {
            console.error('Products grid not found');
            return;
        }
        
        console.log(`Displaying ${products.length} products`);
        
        if (products.length === 0) {
            productsGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filters</p>
                </div>
            `;
            return;
        }
        
        productsGrid.innerHTML = products.map(product => this.createProductCard(product)).join('');
    }

    createProductCard(product) {
        return `
            <div class="product-card fade-in" onclick="ecommerceApp.showProductDetail(${product.id})">
                <div class="product-image">${product.icon}</div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="rating">
                        <div class="stars">${this.generateStars(product.rating)}</div>
                        <span>(${product.rating})</span>
                    </div>
                    <div class="price-display">
                        <span class="current-price">$${product.price}</span>
                        <span class="original-price">$${product.originalPrice}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn--primary" onclick="event.stopPropagation(); ecommerceApp.addToCart(${product.id})">
                            Add to Cart
                        </button>
                        <button class="btn btn--secondary" onclick="event.stopPropagation(); ecommerceApp.addToWishlist(${product.id})">
                            ❤️
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    loadHomePage() {
        console.log('Loading homepage');
        this.loadOfferCarousel();
        this.loadTodaysDeals();
        this.loadTrendingProducts();
        this.loadTestimonials();
    }

    loadOfferCarousel() {
        const carousel = document.getElementById('offerCarousel');
        if (!carousel) return;
        
        let currentOfferIndex = 0;
        
        const displayOffer = () => {
            const offer = this.offers[currentOfferIndex];
            carousel.innerHTML = `
                <div class="offer-slide fade-in" style="background: ${offer.color}">
                    <h2>${offer.title}</h2>
                    <p>${offer.subtitle}</p>
                </div>
            `;
            currentOfferIndex = (currentOfferIndex + 1) % this.offers.length;
        };

        displayOffer();
        this.carouselInterval = setInterval(displayOffer, 4000);
    }

    loadTodaysDeals() {
        const dealsGrid = document.getElementById('todaysDeals');
        if (!dealsGrid) return;
        
        const dealProducts = this.products.slice(0, 8);
        
        dealsGrid.innerHTML = dealProducts.map(product => `
            <div class="deal-card" onclick="ecommerceApp.showProductDetail(${product.id})">
                <div class="deal-badge">${product.discount}</div>
                <div class="product-image">${product.icon}</div>
                <h3>${product.name}</h3>
                <div class="rating">
                    <div class="stars">${this.generateStars(product.rating)}</div>
                    <span>(${product.rating})</span>
                </div>
                <div class="price-display">
                    <span class="current-price">$${product.price}</span>
                    <span class="original-price">$${product.originalPrice}</span>
                </div>
                <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); ecommerceApp.addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `).join('');
    }

    loadTrendingProducts() {
        const carousel = document.getElementById('trendingProducts');
        if (!carousel) return;
        
        const trendingProducts = this.products.slice(8, 16);
        
        carousel.innerHTML = trendingProducts.map(product => `
            <div class="deal-card" style="min-width: 280px" onclick="ecommerceApp.showProductDetail(${product.id})">
                <div class="product-image">${product.icon}</div>
                <h3>${product.name}</h3>
                <div class="rating">
                    <div class="stars">${this.generateStars(product.rating)}</div>
                    <span>(${product.rating})</span>
                </div>
                <div class="price-display">
                    <span class="current-price">$${product.price}</span>
                    <span class="original-price">$${product.originalPrice}</span>
                </div>
                <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); ecommerceApp.addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `).join('');
    }

    loadTestimonials() {
        const testimonialsGrid = document.getElementById('testimonials');
        if (!testimonialsGrid) return;
        
        testimonialsGrid.innerHTML = this.testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="stars">${this.generateStars(testimonial.rating)}</div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <p class="testimonial-author">- ${testimonial.name}</p>
            </div>
        `).join('');
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        let stars = '';
        for (let i = 0; i < fullStars; i++) {
            stars += '⭐';
        }
        if (rating % 1 !== 0) {
            stars += '⭐';
        }
        return stars;
    }

    loadGroceryPage() {
        console.log('Loading grocery page');
        
        // Setup grocery tabs if not already done
        document.querySelectorAll('.grocery-tab').forEach(tab => {
            tab.onclick = (e) => {
                e.preventDefault();
                this.switchGroceryCategory(e.target.dataset.category);
            };
        });

        // Load all grocery products by default
        const groceryProducts = this.products.filter(p => p.category === 'groceries');
        console.log(`Found ${groceryProducts.length} grocery products`);
        this.displayGroceryProducts(groceryProducts);
    }

    switchGroceryCategory(category) {
        document.querySelectorAll('.grocery-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        const activeTab = document.querySelector(`[data-category="${category}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        const groceryProducts = this.products.filter(p => p.category === 'groceries');
        this.displayGroceryProducts(groceryProducts);
    }

    displayGroceryProducts(products) {
        const container = document.getElementById('groceryProducts');
        if (!container) return;
        
        container.innerHTML = products.map(product => `
            <div class="product-card fade-in" onclick="ecommerceApp.showProductDetail(${product.id})">
                <div class="product-image">${product.icon}</div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="rating">
                        <div class="stars">${this.generateStars(product.rating)}</div>
                        <span>(${product.rating})</span>
                    </div>
                    <div class="price-display">
                        <span class="current-price">$${product.price}</span>
                        <span class="original-price">$${product.originalPrice}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn--primary" onclick="event.stopPropagation(); ecommerceApp.addToCart(${product.id})">
                            Quick Add
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    showProductDetail(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            console.error('Product not found:', productId);
            return;
        }
        
        console.log('Showing product detail for:', product.name);
        this.showPage('productDetailPage');
        
        document.getElementById('productDetail').innerHTML = `
            <div class="product-detail">
                <div class="product-detail-image">${product.icon}</div>
                <div class="product-detail-info">
                    <h1>${product.name}</h1>
                    <div class="rating">
                        <div class="stars">${this.generateStars(product.rating)}</div>
                        <span>(${product.rating}) • ${Math.floor(Math.random() * 500) + 100} reviews</span>
                    </div>
                    <div class="product-detail-price">
                        <span class="detail-current-price">$${product.price}</span>
                        <span class="detail-original-price">$${product.originalPrice}</span>
                        <span class="discount-badge">${product.discount}</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="quantity-selector">
                        <span>Quantity:</span>
                        <button class="quantity-btn" onclick="ecommerceApp.changeQuantity(-1)">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" id="productQuantity">
                        <button class="quantity-btn" onclick="ecommerceApp.changeQuantity(1)">+</button>
                    </div>
                    <div class="product-detail-actions">
                        <button class="btn btn--primary btn--lg" onclick="ecommerceApp.addToCart(${product.id}, document.getElementById('productQuantity').value)">
                            Add to Cart
                        </button>
                        <button class="btn btn--secondary btn--lg" onclick="ecommerceApp.buyNow(${product.id}, document.getElementById('productQuantity').value)">
                            Buy Now
                        </button>
                        <button class="btn btn--outline" onclick="ecommerceApp.addToWishlist(${product.id})">
                            Add to Wishlist ❤️
                        </button>
                    </div>
                    <div class="delivery-info">
                        <p><strong>Delivery Information:</strong></p>
                        <p>📦 Free shipping on orders over $50</p>
                        <p>🚚 Estimated delivery: ${this.calculateDeliveryDate()}</p>
                        <p>🔄 Easy returns within 30 days</p>
                        <small>Fulfilled by Amazon/Flipkart network</small>
                    </div>
                </div>
            </div>
            <div class="related-products">
                <h3>You might also like</h3>
                <div class="products-carousel" id="relatedProducts"></div>
            </div>
        `;
        
        this.loadRelatedProducts(product.category, productId);
    }

    loadRelatedProducts(category, excludeId) {
        const relatedProducts = this.products.filter(p => p.category === category && p.id !== excludeId).slice(0, 4);
        const carousel = document.getElementById('relatedProducts');
        if (!carousel) return;
        
        carousel.innerHTML = relatedProducts.map(product => `
            <div class="deal-card" style="min-width: 250px" onclick="ecommerceApp.showProductDetail(${product.id})">
                <div class="product-image">${product.icon}</div>
                <h3>${product.name}</h3>
                <div class="price-display">
                    <span class="current-price">$${product.price}</span>
                </div>
                <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); ecommerceApp.addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `).join('');
    }

    changeQuantity(change) {
        const input = document.getElementById('productQuantity');
        if (!input) return;
        
        const newValue = Math.max(1, parseInt(input.value) + change);
        input.value = newValue;
    }

    addToCart(productId, quantity = 1) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            console.error('Product not found for cart:', productId);
            return;
        }
        
        quantity = parseInt(quantity) || 1;
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                ...product,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }
        
        this.updateCartCount();
        this.showNotification(`${product.name} added to cart!`, 'success');
        console.log('Cart updated, items:', this.cart.length);
    }

    addToWishlist(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;
        
        const existingItem = this.wishlist.find(item => item.id === productId);
        if (!existingItem) {
            this.wishlist.push(product);
            this.showNotification(`${product.name} added to wishlist!`, 'success');
        } else {
            this.showNotification(`${product.name} is already in your wishlist!`, 'info');
        }
    }

    buyNow(productId, quantity = 1) {
        console.log('Buy now clicked for product:', productId);
        this.addToCart(productId, quantity);
        this.navigateToCart();
    }

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountEl = document.getElementById('cartCount');
        
        if (cartCountEl) {
            cartCountEl.textContent = count;
            cartCountEl.style.display = count > 0 ? 'flex' : 'none';
        }
        
        console.log('Cart count updated:', count);
    }

    updateCartDisplay() {
        console.log('Updating cart display, items:', this.cart.length);
        const cartItems = document.getElementById('cartItems');
        if (!cartItems) {
            console.error('Cart items container not found');
            return;
        }
        
        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">🛒</div>
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                    <button class="btn btn--primary" onclick="ecommerceApp.navigateHome()">Start Shopping</button>
                </div>
            `;
            this.updateOrderSummary(0, 0, 0, 0);
            return;
        }
        
        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-description">${item.description}</p>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="cart-item-actions">
                        <div class="quantity-selector">
                            <button class="quantity-btn" onclick="ecommerceApp.updateCartQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="ecommerceApp.updateCartQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="btn btn--secondary btn--sm" onclick="ecommerceApp.removeFromCart(${item.id})">
                            Remove
                        </button>
                        <button class="btn btn--outline btn--sm" onclick="ecommerceApp.saveForLater(${item.id})">
                            Save for Later
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        this.updateOrderSummary();
    }

    updateCartQuantity(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        if (!item) return;
        
        item.quantity = Math.max(1, item.quantity + change);
        this.updateCartCount();
        this.updateCartDisplay();
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCartCount();
        this.updateCartDisplay();
        this.showNotification('Item removed from cart', 'info');
    }

    saveForLater(productId) {
        const item = this.cart.find(item => item.id === productId);
        if (!item) return;
        
        this.addToWishlist(productId);
        this.removeFromCart(productId);
    }

    updateOrderSummary(subtotal = null, shipping = null, tax = null, total = null) {
        if (subtotal === null) {
            subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            shipping = subtotal > 50 ? 0 : 9.99;
            tax = subtotal * 0.08;
            total = subtotal + shipping + tax;
        }
        
        const elements = {
            cartSubtotal: document.getElementById('cartSubtotal'),
            cartShipping: document.getElementById('cartShipping'),
            cartTax: document.getElementById('cartTax'),
            cartTotal: document.getElementById('cartTotal'),
            checkoutTotal: document.getElementById('checkoutTotal')
        };
        
        if (elements.cartSubtotal) elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        if (elements.cartShipping) elements.cartShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
        if (elements.cartTax) elements.cartTax.textContent = `$${tax.toFixed(2)}`;
        if (elements.cartTotal) elements.cartTotal.textContent = `$${total.toFixed(2)}`;
        if (elements.checkoutTotal) elements.checkoutTotal.textContent = `$${total.toFixed(2)}`;
    }

    initializeCheckout() {
        this.updateOrderSummary();
        this.displayCheckoutItems();
        
        const deliveryDateEl = document.getElementById('deliveryDate');
        if (deliveryDateEl) {
            deliveryDateEl.textContent = this.calculateDeliveryDate();
        }
    }

    displayCheckoutItems() {
        const checkoutItems = document.getElementById('checkoutItems');
        if (!checkoutItems) return;
        
        checkoutItems.innerHTML = this.cart.map(item => `
            <div class="checkout-item">
                <span>${item.name} x${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }

    proceedToPayment() {
        const requiredFields = ['fullName', 'address1', 'city', 'zipCode'];
        const isValid = requiredFields.every(field => {
            const element = document.getElementById(field);
            return element && element.value.trim() !== '';
        });
        
        if (!isValid) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        
        if (step1) step1.classList.remove('active');
        if (step2) step2.classList.add('active');
    }

    placeOrder() {
        this.showNotification('Processing your order...', 'info');
        
        setTimeout(() => {
            const order = {
                id: Date.now(),
                items: [...this.cart],
                total: this.calculateTotal(),
                date: new Date().toISOString(),
                status: 'Processing',
                trackingNumber: 'SP' + Date.now().toString().slice(-8),
                address: {
                    name: document.getElementById('fullName')?.value || 'John Doe',
                    address: document.getElementById('address1')?.value || '123 Main St',
                    city: document.getElementById('city')?.value || 'Anytown',
                    zipCode: document.getElementById('zipCode')?.value || '12345'
                },
                estimatedDelivery: this.calculateDeliveryDate()
            };
            
            this.orders.push(order);
            this.cart = [];
            this.updateCartCount();
            
            this.showOrderConfirmation(order);
        }, 2000);
    }

    calculateTotal() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 50 ? 0 : 9.99;
        const tax = subtotal * 0.08;
        return subtotal + shipping + tax;
    }

    showOrderConfirmation(order) {
        this.showPage('confirmationPage');
        
        const orderDetailsEl = document.getElementById('orderDetails');
        if (!orderDetailsEl) return;
        
        orderDetailsEl.innerHTML = `
            <div class="order-info">
                <h3>Order #${order.trackingNumber}</h3>
                <p><strong>Order Date:</strong> ${new Date(order.date).toLocaleDateString()}</p>
                <p><strong>Total Amount:</strong> $${order.total.toFixed(2)}</p>
                <p><strong>Estimated Delivery:</strong> ${order.estimatedDelivery}</p>
                <p><strong>Status:</strong> <span class="status status--info">${order.status}</span></p>
                <div class="order-items">
                    <h4>Items Ordered:</h4>
                    ${order.items.map(item => `
                        <div class="order-item">
                            <span>${item.name} x${item.quantity}</span>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="fulfillment-info">
                    <p><strong>Fulfillment:</strong> This order is being processed through our partner fulfillment network (Amazon/Flipkart) for fastest delivery and best service.</p>
                </div>
            </div>
        `;
        
        this.showNotification('Order placed successfully!', 'success');
        this.simulateOrderUpdates(order);
    }

    simulateOrderUpdates(order) {
        setTimeout(() => {
            order.status = 'Shipped';
            this.showNotification(`Order #${order.trackingNumber} has been shipped!`, 'success');
        }, 5000);
    }

    calculateDeliveryDate(daysToAdd = 3) {
        const date = new Date();
        date.setDate(date.getDate() + daysToAdd);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    performSearch(query) {
        if (!query || !query.trim()) {
            this.showNotification('Please enter a search term', 'info');
            return;
        }
        
        console.log('Performing search for:', query);
        
        const results = this.products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        this.showPage('productsPage');
        const titleElement = document.getElementById('pageTitle');
        if (titleElement) {
            titleElement.textContent = `Search results for "${query}" (${results.length} items)`;
        }
        this.displayProducts(results);
        
        // Clear suggestions
        const suggestions = document.getElementById('searchSuggestions');
        if (suggestions) suggestions.remove();
    }

    handleSearch(query) {
        if (query.length < 2) {
            const suggestions = document.getElementById('searchSuggestions');
            if (suggestions) suggestions.remove();
            return;
        }
        
        const results = this.products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        this.showSearchSuggestions(results.slice(0, 5), query);
    }

    showSearchSuggestions(results, query) {
        let existingSuggestions = document.getElementById('searchSuggestions');
        if (existingSuggestions) {
            existingSuggestions.remove();
        }
        
        if (results.length === 0 || !query) return;
        
        const suggestions = document.createElement('div');
        suggestions.id = 'searchSuggestions';
        suggestions.className = 'search-suggestions';
        suggestions.innerHTML = results.map(product => `
            <div class="suggestion-item" onclick="ecommerceApp.showProductDetail(${product.id})">
                <span>${product.icon}</span>
                <div>
                    <div class="suggestion-name">${product.name}</div>
                    <div class="suggestion-price">$${product.price}</div>
                </div>
            </div>
        `).join('');
        
        this.addSearchSuggestionStyles();
        
        const searchContainer = document.querySelector('.header__search');
        if (searchContainer) {
            searchContainer.style.position = 'relative';
            searchContainer.appendChild(suggestions);
            
            document.addEventListener('click', function removeSuggestions(e) {
                if (!searchContainer.contains(e.target)) {
                    suggestions.remove();
                    document.removeEventListener('click', removeSuggestions);
                }
            });
        }
    }

    addSearchSuggestionStyles() {
        if (document.getElementById('search-suggestion-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'search-suggestion-styles';
        style.textContent = `
            .search-suggestions {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: var(--color-surface);
                border: 1px solid var(--color-border);
                border-radius: var(--radius-base);
                box-shadow: var(--shadow-lg);
                z-index: 1000;
                max-height: 300px;
                overflow-y: auto;
            }
            .suggestion-item {
                display: flex;
                align-items: center;
                gap: var(--space-12);
                padding: var(--space-12);
                cursor: pointer;
                border-bottom: 1px solid var(--color-border);
            }
            .suggestion-item:hover {
                background: var(--color-secondary);
            }
            .suggestion-name {
                font-weight: var(--font-weight-medium);
            }
            .suggestion-price {
                color: var(--color-primary);
                font-size: var(--font-size-sm);
            }
        `;
        document.head.appendChild(style);
    }

    sortProducts(sortBy) {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;
        
        const productCards = Array.from(productsGrid.children);
        let currentProducts = [];
        
        productCards.forEach(card => {
            const onclick = card.getAttribute('onclick');
            if (onclick) {
                const productId = parseInt(onclick.match(/\d+/)[0]);
                const product = this.products.find(p => p.id === productId);
                if (product) currentProducts.push(product);
            }
        });
        
        switch (sortBy) {
            case 'price-low':
                currentProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                currentProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                currentProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                currentProducts.sort((a, b) => b.id - a.id);
                break;
            default:
                currentProducts.sort((a, b) => b.rating - a.rating);
        }
        
        this.displayProducts(currentProducts);
    }

    filterProducts(category) {
        if (!category) {
            this.displayProducts(this.products);
            return;
        }
        
        const filtered = this.products.filter(p => 
            p.category.toLowerCase() === category.toLowerCase()
        );
        this.displayProducts(filtered);
    }

    switchAccountTab(tabName) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
        const activePanel = document.getElementById(tabName);
        
        if (activeBtn) activeBtn.classList.add('active');
        if (activePanel) activePanel.classList.add('active');
        
        if (tabName === 'orders') {
            this.displayOrderHistory();
        } else if (tabName === 'wishlist') {
            this.displayWishlist();
        }
    }

    displayOrderHistory() {
        const container = document.getElementById('orderHistory');
        if (!container) return;
        
        if (this.orders.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📦</div>
                    <h3>No orders yet</h3>
                    <p>Your order history will appear here once you make your first purchase.</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = this.orders.map(order => `
            <div class="order-card card">
                <div class="card__body">
                    <div class="order-header">
                        <h4>Order #${order.trackingNumber}</h4>
                        <span class="status status--${this.getStatusClass(order.status)}">${order.status}</span>
                    </div>
                    <p><strong>Date:</strong> ${new Date(order.date).toLocaleDateString()}</p>
                    <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
                    <p><strong>Estimated Delivery:</strong> ${order.estimatedDelivery}</p>
                    <div class="order-items">
                        ${order.items.slice(0, 2).map(item => `
                            <span>${item.name} x${item.quantity}</span>
                        `).join(', ')}
                        ${order.items.length > 2 ? ` and ${order.items.length - 2} more items` : ''}
                    </div>
                    <div class="order-actions">
                        <button class="btn btn--secondary btn--sm" onclick="ecommerceApp.trackOrder('${order.trackingNumber}')">
                            Track Order
                        </button>
                        <button class="btn btn--outline btn--sm" onclick="ecommerceApp.reorderItems(${order.id})">
                            Reorder
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    displayWishlist() {
        const container = document.getElementById('wishlistItems');
        if (!container) return;
        
        if (this.wishlist.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">❤️</div>
                    <h3>Your wishlist is empty</h3>
                    <p>Add products you love to your wishlist to save them for later.</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = `
            <div class="products-grid">
                ${this.wishlist.map(product => `
                    <div class="product-card">
                        <div class="product-image">${product.icon}</div>
                        <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <div class="price-display">
                                <span class="current-price">$${product.price}</span>
                                <span class="original-price">$${product.originalPrice}</span>
                            </div>
                            <div class="product-actions">
                                <button class="btn btn--primary btn--sm" onclick="ecommerceApp.addToCart(${product.id})">
                                    Add to Cart
                                </button>
                                <button class="btn btn--secondary btn--sm" onclick="ecommerceApp.removeFromWishlist(${product.id})">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    removeFromWishlist(productId) {
        this.wishlist = this.wishlist.filter(item => item.id !== productId);
        this.displayWishlist();
        this.showNotification('Item removed from wishlist', 'info');
    }

    getStatusClass(status) {
        switch (status.toLowerCase()) {
            case 'delivered': return 'success';
            case 'shipped': case 'out for delivery': return 'info';
            case 'processing': return 'warning';
            case 'cancelled': return 'error';
            default: return 'info';
        }
    }

    trackOrder(trackingNumber) {
        const order = this.orders.find(o => o.trackingNumber === trackingNumber);
        if (!order) return;
        
        this.showNotification(`Order #${trackingNumber} - Status: ${order.status}`, 'info');
    }

    reorderItems(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;
        
        order.items.forEach(item => {
            this.addToCart(item.id, item.quantity);
        });
        
        this.showNotification('Items added to cart from previous order!', 'success');
    }

    showOrderTracking() {
        this.showNotification('Order tracking feature would show detailed delivery status', 'info');
    }

    showSignInModal() {
        this.showNotification('Sign-in functionality would be implemented here with authentication', 'info');
    }

    handleNewsletterSignup() {
        const emailInput = document.querySelector('.newsletter-input');
        if (!emailInput) return;
        
        const email = emailInput.value;
        if (!email || !email.includes('@')) {
            this.showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        this.showNotification('Thank you for subscribing to our newsletter!', 'success');
        emailInput.value = '';
    }

    openLiveChat() {
        this.showNotification('Live chat feature would connect to customer support', 'info');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">×</button>
        `;
        
        this.addNotificationStyles();
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    addNotificationStyles() {
        if (document.getElementById('notification-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: var(--space-20);
                right: var(--space-20);
                padding: var(--space-12) var(--space-16);
                border-radius: var(--radius-base);
                color: white;
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: var(--space-12);
                max-width: 400px;
                box-shadow: var(--shadow-lg);
                animation: slideIn 0.3s ease-out;
            }
            .notification--success { background: var(--color-success); }
            .notification--error { background: var(--color-error); }
            .notification--warning { background: var(--color-warning); }
            .notification--info { background: var(--color-info); }
            .notification button {
                background: none;
                border: none;
                color: white;
                font-size: var(--font-size-lg);
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing ShopEasy Pro');
    window.ecommerceApp = new EcommerceApp();
});

// Also initialize if DOM is already loaded
if (document.readyState !== 'loading') {
    console.log('DOM already loaded, initializing ShopEasy Pro');
    window.ecommerceApp = new EcommerceApp();
}