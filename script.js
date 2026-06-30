// ==================== PRODUCT DATA ====================
const products = [
    // Solar Panels - Longi
    { id:1, name:"LONGi Hi-MO X10 645W Monofacial Panel", model:"LR7-72HVH-645M", category:"longi", price:32250, badge:"New", badgeClass:"best", warranty:"12 Yr Product / 30 Yr Performance", image:"https://sunsolar.pk/wp-content/uploads/2025/05/Design-ohne-Titel-35-3.png", localImage:"images/longi-645w.jpg", specs:["Power: 645W","Type: N-Type HPBC 2.0","Efficiency: 24.1%"], perWatt:"~Rs. 50/Watt", featured:true, rating:4.9, reviewCount:34 },
    { id:2, name:"Longi 610W Hi-MO 7 Bifacial Series Solar Panel", model:"LR8-66HGD-610M", category:"longi", price:27450, badge:"Popular", badgeClass:"", warranty:"12 Yr Product / 30 Yr Performance", image:"https://cdn11.bigcommerce.com/s-o8a7xpro4o/images/stencil/760x760/products/987/4078/1__55057.1705069390.png?c=1", localImage:"images/longi-610w.jpg", specs:["Power: 610W","Type: N-Type HPDC Bifacial","Efficiency: 22.8%"], perWatt:"~Rs. 45/Watt", featured:true, rating:4.8, reviewCount:52 },

    // Solar Panels - Jinko
    { id:3, name:"Jinko 585W N-Type Bifacial Solar Panel", model:"JKM585N-72HL4-BDV", category:"jinko", price:29250, badge:"Tier 1", badgeClass:"best", warranty:"12 Yr Product / 30 Yr Performance", image:"https://www.sunevosolar.com/uploadfile/202402/26/f0645231480db88bfff1bdee41323bf7_medium.jpg", localImage:"images/jinko-585w.jpg", specs:["Power: 585W","Type: N-Type Bifacial","Efficiency: 22.6%"], perWatt:"~Rs. 50/Watt", featured:true, rating:4.7, reviewCount:28 },

    // Inverters (Official iTel images from itelsolar.com)
    { id:4, name:"iTel 3kW Pro IP54 Hybrid Solar Inverter", model:"IPV-3K24UPRO", category:"inverter", price:80000, badge:"", warranty:"3 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-3kW-Hybrid-Solar-Inverter-%E2%80%93-24V-Pure-Sine-Wave-Powers-ACs-TVs-Fridge-1.jpg", localImage:"images/itel-3kw.jpg", specs:["Capacity: 3kW / 4.5kVA","Type: Hybrid IP54","Voltage: 24V"], featured:false, rating:4.5, reviewCount:18 },
    { id:5, name:"IPV-4K24U Pro iTel Inverter 4kW 24V SP Hybrid", model:"IPV-4K24UPRO", category:"inverter", price:113000, badge:"Popular", badgeClass:"", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/07/itel-4kW-Hybrid-Solar-Inverter-%E2%80%93-Powers-ACs-Fridges-TVs-24V-IP54-Rated-1.jpg", localImage:"images/itel-4kw.jpg", specs:["Capacity: 4kW","Type: Hybrid IP54","MPPT: Dual + WiFi"], featured:true, rating:4.8, reviewCount:41 },
    { id:6, name:"iTel 6kW Inverter Hybrid 48V IP54 IPV-6K48UPRO With WiFi", model:"IPV-6K48UPRO", category:"inverter", price:145000, badge:"Best Seller", badgeClass:"best", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/07/itel-6kW-Hybrid-Solar-Inverter-%E2%80%93-Dual-AC-Output-for-Homes-Clinics-48V-IP54-Rated-2.jpg", localImage:"images/itel-6kw.jpg", specs:["Capacity: 6kW","Type: Hybrid IP54","MPPT: 8kW PV + WiFi"], featured:true, rating:4.9, reviewCount:67 },
    { id:7, name:"IHY-6KL1A iTel 6kW IP66 Hybrid Solar Inverter", model:"IHY-6KL1A", category:"inverter", price:225000, badge:"IP66", badgeClass:"premium", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-8kW-3-Phase-Hybrid-Solar-Inverter-%E2%80%93-Commercial-Power-for-Offices-Estates-IP66-2.jpg", localImage:"images/itel-6kw-ip66.jpg", specs:["Capacity: 6kW","Type: Hybrid IP66","PV Input: 12kW + WiFi"], featured:false, rating:4.6, reviewCount:15 },
    { id:8, name:"iTel 8kW (IP54) Hybrid Solar Inverter", model:"IPV-8K48U", category:"inverter", price:213000, badge:"Best Value", badgeClass:"best", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/10/8kw-inverter-8k48T-dual-output-8kva.webp", localImage:"images/itel-8kw.jpg", specs:["Capacity: 8kW / 8kVA","Type: Hybrid IP54","PV Input: 16kW Max"], featured:false, rating:4.7, reviewCount:23 },
    { id:9, name:"iTel 12kW Inverter Hybrid 48V IP54 IPV-12K48U With WiFi", model:"IPV-12K48U", category:"inverter", price:525000, badge:"Heavy Duty", badgeClass:"premium", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-12kW-Hybrid-Solar-Inverter-%E2%80%93-Heavy-Duty-Backup-for-Estates-Clinics-Offices-48V-Dual-MPPT-2.jpg", localImage:"images/itel-12kw.jpg", specs:["Capacity: 12kW","Type: Hybrid IP54","MPPT: Dual + WiFi"], featured:false, rating:4.8, reviewCount:12 },
    { id:10, name:"IP66-Rated 6.6kW Hybrid iTel Inverter", model:"IHY-6K6L1A", category:"inverter", price:210000, badge:"IP66", badgeClass:"premium", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-8kW-3-Phase-Hybrid-Solar-Inverter-%E2%80%93-Commercial-Power-for-Offices-Estates-IP66-2.jpg", localImage:"images/itel-6k6-ip66.jpg", specs:["Capacity: 6.6kW","Type: Hybrid IP66","AI SmartGo + WiFi"], featured:false, rating:4.6, reviewCount:9 },

    // ESS Solution (Official iTel images from itelsolar.com)
    { id:16, name:"iTel Energy 500W Power Tank + 1kWh LiFePO4 All-In-One", model:"IESS-05K10N", category:"ess", price:72500, badge:"All-In-One", badgeClass:"best", warranty:"2 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-Energy-500W-Inverter-1kWh-LifePo4-Battery-All-in-One-Solar-Power-System-1.jpg", localImage:"images/itel-ess-500w.jpg", specs:["Output: 500W / 1kWh","Battery: LiFePO4 6000+ Cycles","Ports: AC, USB-C, USB-A"], featured:true, rating:4.9, reviewCount:38 },
    { id:17, name:"iTel Combo 3.6kW Hybrid + 8kWh Li-Battery", model:"IESS-3K680N", category:"ess", price:350000, badge:"Complete System", badgeClass:"premium", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/07/itel-3.6kW-All-in-One-Solar-Power-System-with-8kWh-Battery-Complete-Home-Energy-Storage-Solution-1.jpg", localImage:"images/itel-ess-3k6.jpg", specs:["Inverter: 3.6kW Pure Sine","Battery: 8kWh LiFePO4","UPS Switchover: <16ms"], featured:true, rating:4.7, reviewCount:19 },
    { id:18, name:"iTel Power Go 320Wh Portable Power Station", model:"IESS-320T", category:"ess", price:35000, badge:"Portable", badgeClass:"best", warranty:"2 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2026/01/itel-130W-Portable-Power-Station-%E2%80%93-320Wh-Smart-Backup-Power-Solution-IESS-320T.webp", localImage:"images/itel-ess-320.jpg", specs:["Output: 130W / 320Wh","Battery: 100,000mAh LiFePO4","USB-C: 65W Fast Charge"], featured:true, rating:4.8, reviewCount:45 },

    // Batteries (Official iTel images from itelsolar.com)
    { id:11, name:"iTel 100Ah 12V Lithium Battery 1.28kWh", model:"IPB-12100", category:"battery", price:70000, badge:"", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2026/01/itel-Energy-1280Wh-12V-Lithium-Battery-LiFePO%E2%82%84-%E2%80%93-Smart-Solar-Storage-Solution.webp", localImage:"images/itel-bat-100ah.jpg", specs:["Capacity: 1.28 kWh","Voltage: 12.8V","Type: LiFePO4 IP54"], featured:false, rating:4.6, reviewCount:14 },
    { id:12, name:"IPW-25100 iTel LiFePO4 Battery 25.6V 100Ah - 2.56kWh IP21", model:"IPW-25100", category:"battery", price:110000, badge:"Best Seller", badgeClass:"best", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-2.56kWh-Lithium-Battery-Wall-Mounted-Backup-for-Homes-Shops-25.6V-LiFePO4-2-1.jpg", localImage:"images/itel-bat-256.jpg", specs:["Capacity: 2.56 kWh","Voltage: 25.6V","Type: LiFePO4 Wall Mounted"], featured:true, rating:4.9, reviewCount:56 },
    { id:13, name:"IPL-51100 iTel LiFePO4 Battery 51.2V 100Ah - 5.12kWh IP20", model:"IPL-51100", category:"battery", price:250000, badge:"Popular", badgeClass:"", warranty:"7 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-5.12kWh-Lithium-Battery-%E2%80%93-Long-Backup-for-Homes-Clinics-Offices-48V-LiFePO4-2.jpg", localImage:"images/itel-bat-512.jpg", specs:["Capacity: 5.12 kWh","Voltage: 51.2V","Type: LiFePO4 Stackable"], featured:true, rating:4.8, reviewCount:33 },
    { id:14, name:"iTel IPL-51280 51.2V 280Ah (14.5kWh) Lithium Battery", model:"IPL-51280", category:"battery", price:495000, badge:"", warranty:"10 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-14.3kWh-Silent-Power-Battery-%E2%80%93-Long-Backup-for-Big-Homes-Offices-48V-2.jpg", localImage:"images/itel-bat-14kwh.jpg", specs:["Capacity: 14.33 kWh","Voltage: 51.2V","Type: LiFePO4 Standing"], featured:false, rating:4.7, reviewCount:8 },
    { id:15, name:"iTel IPL-51314Y 51.2V 16kWh Lithium Battery", model:"IPL-51314Y", category:"battery", price:535000, badge:"Premium", badgeClass:"premium", warranty:"10 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-10240Wh-Lithium-Battery-Standing-48V-200Ah-10.24kWh-IPL-51200.webp", localImage:"images/itel-bat-16kwh.jpg", specs:["Capacity: 16 kWh","Voltage: 51.2V","Type: LiFePO4 Outdoor IP65"], featured:false, rating:4.5, reviewCount:6 }
];


// ==================== CART ====================
let cart = JSON.parse(localStorage.getItem('solarCart')) || [];

function saveCart() {
    localStorage.setItem('solarCart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId, qty) {
    qty = qty || parseInt(document.getElementById('qty-' + productId)?.value) || 1;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: productId, qty: qty });
    }
    saveCart();
    showToast('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateCartQty(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            removeFromCart(productId);
            return;
        }
        saveCart();
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + (product ? product.price * item.qty : 0);
    }, 0);
}

function getCartCount() {
    return cart.reduce((count, item) => count + item.qty, 0);
}

function updateCartUI() {
    if (!document.getElementById('cartCount')) return;
    document.getElementById('cartCount').textContent = getCartCount();
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';
    let html = '';
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;
        html += `
            <div class="cart-item">
                <div class="cart-item-img"><img src="${product.image}" alt="${product.name}"></div>
                <div class="cart-item-details">
                    <h4>${product.name}</h4>
                    <div class="cart-item-price">Rs. ${(product.price * item.qty).toLocaleString()}</div>
                    <div class="cart-item-qty">
                        <button onclick="updateCartQty(${product.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="updateCartQty(${product.id}, 1)">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${product.id})">Remove</button>
                </div>
            </div>
        `;
    });
    cartItems.innerHTML = html;
    document.getElementById('cartTotal').textContent = 'Rs. ' + getCartTotal().toLocaleString();
}

function toggleCart() {
    document.getElementById('cartOverlay').classList.toggle('active');
    document.getElementById('cartSidebar').classList.toggle('active');
}

// ==================== INVENTORY ====================
function initInventory() {
    const inv = {};
    products.forEach(p => { inv[p.id] = 100; });
    localStorage.setItem('solar_inventory', JSON.stringify(inv));
}
if (!localStorage.getItem('inv_version') || localStorage.getItem('inv_version') !== '100') {
    initInventory();
    localStorage.setItem('inv_version', '100');
}

function getProductStock(productId) {
    const inv = JSON.parse(localStorage.getItem('solar_inventory') || '{}');
    return inv[productId] !== undefined ? inv[productId] : 100;
}

// ==================== PRODUCT CARDS ====================

function createProductCard(product) {
    const stock = getProductStock(product.id);
    const isOutOfStock = stock === 0;
    const badgeHTML = isOutOfStock
        ? '<div class="product-badge out-of-stock-badge">Out Of Stock</div>'
        : (product.badge ? `<div class="product-badge ${product.badgeClass || ''}">${product.badge}</div>` : '');
    const topSpecs = product.specs.slice(0, 3);
    const specsHTML = topSpecs.map(s => `<li><strong>${s.split(':')[0]}:</strong>${s.split(':')[1]}</li>`).join('');
    const perWattHTML = product.perWatt ? `<span class="price-per-watt">${product.perWatt}</span>` : '';
    const warrantyHTML = product.warranty ? `<div class="warranty-badge">&#128737; ${product.warranty} Official Warranty</div>` : '';
    const disabledClass = isOutOfStock ? ' out-of-stock-card' : '';
    const cartBtnHTML = isOutOfStock
        ? '<button class="btn-add-cart btn-out-of-stock" disabled>Out Of Stock</button>'
        : `<button class="btn-add-cart" onclick="addToCartBtn(this, ${product.id})">Add To Cart &#128722;</button>`;

    const wl = getWishlist();
    const isWished = wl.includes(product.id);
    const heartHTML = `<button class="wishlist-heart ${isWished ? 'active' : ''}" data-pid="${product.id}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">${isWished ? '&#9829;' : '&#9825;'}</button>`;

    return `
        <div class="product-card${disabledClass}" data-name="${product.name.toLowerCase()}" data-category="${product.category}">
            ${heartHTML}
            ${badgeHTML}
            <div class="product-img ${product.bgColor ? 'has-bg' : ''}" style="${product.bgColor ? 'background:' + product.bgColor : ''}" onclick="openZoom('${product.image}', '${product.name.replace(/'/g, "\\'")}')">
                <img src="${product.image}" alt="${product.name}" loading="lazy" style="${product.bgColor ? 'object-fit:contain;padding:15px;' : ''}">
                <div class="img-zoom-hint">Click To Zoom</div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-model">${product.model}</p>
                ${product.rating ? `<div class="product-rating"><span class="stars">${'&#9733;'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '&#9733;' : '&#9734;'}</span><span class="rating-text">${product.rating} (${product.reviewCount} reviews)</span></div>` : ''}
                ${warrantyHTML}
                <ul class="product-specs">${specsHTML}</ul>
                <div class="product-price">
                    <span class="price">Rs. ${product.price.toLocaleString()}</span>
                    ${product.category === 'panel' ? '<span class="price-unit"> / panel</span>' : ''}
                </div>
                ${perWattHTML}
                ${isOutOfStock ? '' : `<div class="qty-row">
                    <button class="qty-btn" onclick="changeQtyBtn(this, -1)">-</button>
                    <input type="number" class="qty-input" data-pid="${product.id}" value="1" min="1" max="99">
                    <button class="qty-btn" onclick="changeQtyBtn(this, 1)">+</button>
                </div>`}
                ${cartBtnHTML}
                <div class="verified-stamp">&#10003; Genuine Product | Official Warranty</div>
                <button class="price-alert-btn ${(JSON.parse(localStorage.getItem('price_alerts')||'[]')).includes(product.id)?'active':''}" onclick="event.stopPropagation(); togglePriceAlert(${product.id}, this)">${(JSON.parse(localStorage.getItem('price_alerts')||'[]')).includes(product.id)?'&#128277; Alert Set':'&#128276; Price Alert'}</button>
            </div>
        </div>
    `;
}

function changeQtyBtn(btn, change) {
    const input = btn.parentElement.querySelector('.qty-input');
    let val = parseInt(input.value) + change;
    if (val < 1) val = 1;
    if (val > 99) val = 99;
    input.value = val;
}

function addToCartBtn(btn, productId) {
    const input = btn.parentElement.querySelector('.qty-input');
    const qty = parseInt(input.value) || 1;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: productId, qty: qty });
    }
    saveCart();
    showToast('Product added to cart!');
}

// ==================== RENDER PAGES ====================
function renderProducts() {
    const featured = document.getElementById('featuredProducts');
    const panels = document.getElementById('panelProducts');
    const inverters = document.getElementById('inverterProducts');
    const batteries = document.getElementById('batteryProducts');

    if (featured) featured.innerHTML = products.filter(p => p.featured).map(createProductCard).join('');
    if (panels) panels.innerHTML = products.filter(p => p.category === 'panel').map(createProductCard).join('');
    const longi = document.getElementById('longiProducts');
    const jinko = document.getElementById('jinkoProducts');
    if (longi) longi.innerHTML = products.filter(p => p.category === 'longi').map(createProductCard).join('');
    if (jinko) jinko.innerHTML = products.filter(p => p.category === 'jinko').map(createProductCard).join('');
    if (inverters) inverters.innerHTML = products.filter(p => p.category === 'inverter').map(createProductCard).join('');
    const ess = document.getElementById('essProducts');
    if (ess) ess.innerHTML = products.filter(p => p.category === 'ess').map(createProductCard).join('');
    if (batteries) batteries.innerHTML = products.filter(p => p.category === 'battery').map(createProductCard).join('');
}

// ==================== PAGE NAVIGATION ====================
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pageEl = document.getElementById('page-' + page);
    if (pageEl) pageEl.classList.add('active');

    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const activeLink = document.querySelector('.nav-links a[data-page="' + page + '"]');
    if (activeLink) activeLink.classList.add('active');

    const navLinksEl = document.getElementById('navLinks');
    if (navLinksEl) navLinksEl.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'checkout') renderCheckout();
    if (page === 'wishlist') renderWishlist();
    if (page === 'blog') { document.getElementById('blogContent').innerHTML = '<div class="blog-grid" id="blogGrid"></div>'; renderBlog(); }
    if (page === 'quiz') { quizStep = 0; quizAnswers = []; renderQuiz(); }
    if (page === 'tracker') renderTracker();
}

// ==================== CHECKOUT ====================
function renderCheckout() {
    const container = document.getElementById('checkoutItems');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<p style="color:var(--gray-500);padding:20px 0;">Your cart is empty. Add products first.</p>';
        document.getElementById('summarySubtotal').textContent = 'Rs. 0';
        document.getElementById('summaryTotal').textContent = 'Rs. 0';
        return;
    }

    let html = '';
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;
        html += `
            <div class="summary-item">
                <span class="item-name">${product.name}</span>
                <span class="item-qty">x${item.qty}</span>
                <span class="item-total">Rs. ${(product.price * item.qty).toLocaleString()}</span>
            </div>
        `;
    });
    container.innerHTML = html;

    const total = getCartTotal();
    let discount = 0;
    const discountLine = document.getElementById('discountLine');
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percent') {
            discount = Math.round(total * appliedCoupon.amount / 100);
        } else {
            discount = Math.min(appliedCoupon.amount, total);
        }
        discountLine.style.display = 'flex';
        document.getElementById('summaryDiscount').textContent = '- Rs. ' + discount.toLocaleString();
    } else {
        discountLine.style.display = 'none';
    }
    document.getElementById('summarySubtotal').textContent = 'Rs. ' + total.toLocaleString();
    document.getElementById('summaryDelivery').textContent = 'Rs. 2,000';
    document.getElementById('summaryTotal').textContent = 'Rs. ' + (total - discount + 2000).toLocaleString();
}

// Payment method - transaction ID always visible

function placeOrder(e) {
    e.preventDefault();
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const orderId = 'SC-' + Date.now().toString().slice(-8);
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const city = document.getElementById('custCity').value;
    const address = document.getElementById('custAddress').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const total = getCartTotal();

    const paymentNames = { bank:'Bank Transfer' };

    // Build WhatsApp message
    let msg = `*New Order - Solar Cart*%0A`;
    msg += `Order ID: ${orderId}%0A%0A`;
    msg += `*Customer:* ${name}%0A`;
    msg += `*Phone:* ${phone}%0A`;
    msg += `*City:* ${city}%0A`;
    msg += `*Address:* ${address}%0A%0A`;
    msg += `*Products:*%0A`;
    cart.forEach(item => {
        const p = products.find(pr => pr.id === item.id);
        if (p) msg += `- ${p.name} x${item.qty} = Rs.${(p.price * item.qty).toLocaleString()}%0A`;
    });
    let discount = 0;
    if (appliedCoupon) {
        discount = appliedCoupon.type === 'percent' ? Math.round(total * appliedCoupon.amount / 100) : Math.min(appliedCoupon.amount, total);
        msg += `%0A*Subtotal:* Rs.${total.toLocaleString()}%0A`;
        msg += `*Discount:* -Rs.${discount.toLocaleString()} (${appliedCoupon.code})%0A`;
    } else {
        msg += `%0A*Subtotal:* Rs.${total.toLocaleString()}%0A`;
    }
    const finalTotal = total - discount + 2000;
    msg += `*Delivery:* Rs.2,000%0A`;
    msg += `*Total:* Rs.${finalTotal.toLocaleString()}%0A`;
    msg += `*Payment:* ${paymentNames[payment]}`;

    // Build order data for admin dashboard
    const orderData = {
        orderId: orderId,
        name: name,
        phone: phone,
        city: city,
        address: address,
        notes: document.getElementById('custNotes').value,
        payment: paymentNames[payment],
        total: total.toLocaleString(),
        products: cart.map(item => {
            const p = products.find(pr => pr.id === item.id);
            return p ? { name: p.name, qty: item.qty, total: (p.price * item.qty).toLocaleString() } : null;
        }).filter(Boolean),
        status: 'new'
    };

    // Save order to cloud for admin dashboard
    orderData.timestamp = Date.now();
    const BLOB_ID = '019ee599-7990-7f2c-ac68-f9eb2bf47601';
    fetch('https://jsonblob.com/api/jsonBlob/' + BLOB_ID)
        .then(r => r.json())
        .then(data => {
            data.orders.unshift(orderData);
            return fetch('https://jsonblob.com/api/jsonBlob/' + BLOB_ID, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        }).catch(() => {});

    // Update Inventory - reduce stock for each ordered item
    const inv = JSON.parse(localStorage.getItem('solar_inventory') || '{}');
    cart.forEach(item => {
        if (inv[item.id] !== undefined) {
            inv[item.id] = Math.max(0, inv[item.id] - item.qty);
        }
    });
    localStorage.setItem('solar_inventory', JSON.stringify(inv));

    // Update Accounting - add income entry for this order
    const accEntries = JSON.parse(localStorage.getItem('solar_accounting') || '[]');
    const productNames = cart.map(item => {
        const p = products.find(pr => pr.id === item.id);
        return p ? p.name + ' x' + item.qty : '';
    }).filter(Boolean).join(', ');
    accEntries.unshift({
        id: Date.now(),
        type: 'income',
        category: 'order',
        amount: total,
        desc: orderId + ' - ' + name + ' (' + productNames + ')',
        date: new Date().toISOString().slice(0, 10)
    });
    localStorage.setItem('solar_accounting', JSON.stringify(accEntries));

    // Show success
    document.getElementById('orderIdDisplay').textContent = 'Order ID: ' + orderId;
    document.getElementById('successDetails').innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Payment:</strong> ${paymentNames[payment]}</p>
        <p><strong>Total:</strong> Rs. ${total.toLocaleString()}</p>
    `;

    // Clear cart
    cart = [];
    saveCart();
    document.getElementById('checkoutForm').reset();

    showPage('success');

    // Open WhatsApp with order details
    window.open('https://wa.me/923237927923?text=' + msg, '_blank');
}

// ==================== SEARCH ====================
let lastSearchQuery = '';
let lastSearchResults = [];

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!query) {
        showPage('home');
        return;
    }

    lastSearchQuery = query;
    lastSearchResults = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.model.toLowerCase().includes(query) ||
        p.category.includes(query) ||
        p.specs.some(s => s.toLowerCase().includes(query)) ||
        String(p.price).includes(query)
    );

    document.getElementById('searchTitle').textContent = 'Search: "' + query + '"';
    document.getElementById('searchSubtitle').textContent = lastSearchResults.length + ' product(s) found';

    renderSearchResults(lastSearchResults);
    showPage('search');

    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn').classList.add('active');
}

function renderSearchResults(results) {
    const container = document.getElementById('searchResults');
    const empty = document.getElementById('searchEmpty');

    if (results.length > 0) {
        container.innerHTML = results.map(createProductCard).join('');
        container.style.display = 'grid';
        empty.style.display = 'none';
    } else {
        container.style.display = 'none';
        container.innerHTML = '';
        empty.style.display = 'block';
    }
}

function filterSearch(category) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderSearchResults(lastSearchResults);
    } else {
        const filtered = lastSearchResults.filter(p => p.category === category);
        renderSearchResults(filtered);
    }
}

if (document.getElementById('searchInput')) {
    document.getElementById('searchInput').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') searchProducts();
    });
}

// ==================== CONTACT FORM ====================
function submitContact(e) {
    e.preventDefault();
    alert('Thank you for your message! We will contact you shortly.');
    e.target.reset();
}

// ==================== TOAST ====================
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ==================== MORE DROPDOWN ====================
function toggleMoreMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    document.querySelector('.nav-more-wrap').classList.toggle('open');
}
document.addEventListener('click', function(e) {
    const moreWrap = document.querySelector('.nav-more-wrap');
    if (moreWrap && !moreWrap.contains(e.target)) moreWrap.classList.remove('open');
});

// ==================== MOBILE MENU ====================
if (document.getElementById('menuToggle')) {
    document.getElementById('menuToggle').addEventListener('click', function() {
        document.getElementById('navLinks').classList.toggle('active');
    });
}

// ==================== IMAGE ZOOM ====================
let zoomLevel = 1;
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;

function openZoom(imgSrc, title) {
    const modal = document.getElementById('zoomModal');
    const img = document.getElementById('zoomImage');
    const titleEl = document.getElementById('zoomTitle');
    img.src = imgSrc;
    titleEl.textContent = title;
    zoomLevel = 1;
    img.style.transform = 'scale(1)';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const p = products.find(pr => pr.image === imgSrc);
    if (p) trackRecentlyViewed(p.id);
}

function closeZoom() {
    document.getElementById('zoomModal').classList.remove('active');
    document.body.style.overflow = '';
}

function zoomIn() {
    zoomLevel = Math.min(zoomLevel + 0.5, 5);
    document.getElementById('zoomImage').style.transform = 'scale(' + zoomLevel + ')';
}

function zoomOut() {
    zoomLevel = Math.max(zoomLevel - 0.5, 0.5);
    document.getElementById('zoomImage').style.transform = 'scale(' + zoomLevel + ')';
}

function resetZoom() {
    zoomLevel = 1;
    document.getElementById('zoomImage').style.transform = 'scale(1)';
}

const zoomModal = document.getElementById('zoomModal');
const zoomBody = document.getElementById('zoomBody');
if (zoomModal && zoomBody) {
    zoomModal.addEventListener('click', function(e) {
        if (e.target === this || e.target === zoomBody) closeZoom();
    });

    document.addEventListener('keydown', function(e) {
        if (!zoomModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeZoom();
        if (e.key === '+' || e.key === '=') zoomIn();
        if (e.key === '-') zoomOut();
    });

    zoomBody.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (e.deltaY < 0) zoomIn();
        else zoomOut();
    });

    let touchStartDist = 0;
    zoomBody.addEventListener('mousedown', function(e) {
        isDragging = true;
        zoomBody.classList.add('dragging');
        startX = e.pageX - zoomBody.offsetLeft;
        startY = e.pageY - zoomBody.offsetTop;
        scrollLeft = zoomBody.scrollLeft;
        scrollTop = zoomBody.scrollTop;
    });
    zoomBody.addEventListener('mouseleave', function() { isDragging = false; zoomBody.classList.remove('dragging'); });
    zoomBody.addEventListener('mouseup', function() { isDragging = false; zoomBody.classList.remove('dragging'); });
    zoomBody.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - zoomBody.offsetLeft;
        const y = e.pageY - zoomBody.offsetTop;
        zoomBody.scrollLeft = scrollLeft - (x - startX);
        zoomBody.scrollTop = scrollTop - (y - startY);
    });
    zoomBody.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            touchStartDist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
        }
    });
    zoomBody.addEventListener('touchmove', function(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            const dist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
            if (dist > touchStartDist + 10) { zoomIn(); touchStartDist = dist; }
            else if (dist < touchStartDist - 10) { zoomOut(); touchStartDist = dist; }
        }
    });
}

// ==================== ANIMATED COUNTER ====================
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-counter');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 16);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.stats-section').forEach(s => counterObserver.observe(s));

// ==================== SOCIAL MEDIA DASHBOARD ====================
function updateContentTypeOptions() {
    const platform = document.getElementById('socialPlatform').value;
    const contentTypeSelect = document.getElementById('socialContentType');
    if (platform === 'whatsapp') {
        contentTypeSelect.innerHTML = '<option value="status">Status</option>';
    } else {
        contentTypeSelect.innerHTML = '<option value="post">Post</option><option value="story">Story</option>';
    }
}

function generateSocialPosts() {
    const platform = document.getElementById('socialPlatform').value;
    const contentType = document.getElementById('socialContentType').value;
    const category = document.getElementById('socialCategory').value;
    const container = document.getElementById('socialPosts');

    let filtered = category === 'all' ? products : products.filter(p => p.category === category);
    if (filtered.length === 0) { container.innerHTML = '<p style="color:var(--gray-500);padding:20px;">No products in this category.</p>'; return; }

    const typeLabel = platform === 'whatsapp' ? 'STATUS' : contentType.toUpperCase();
    const platformLabel = platform.toUpperCase();

    container.innerHTML = filtered.map(p => {
        const caption = generateCaption(p, platform, contentType);
        return `
            <div class="social-post-card">
                <div class="post-img">
                    <img id="post-img-${p.id}" src="${p.localImage || p.image}" alt="${p.name}" loading="lazy">
                </div>
                <div class="post-body">
                    <div class="post-platform">${platformLabel} ${typeLabel}</div>
                    <div class="post-caption" id="caption-${p.id}">${caption}</div>
                    <div class="post-actions">
                        <button class="btn-copy" onclick="copyCaption(${p.id}, this)">Copy Caption</button>
                    </div>
                    <div class="post-actions" style="margin-top:6px;">
                        <button class="btn-whatsapp-share" onclick="shareToStatus(${p.id}, 'whatsapp', this)">WhatsApp</button>
                        <button class="btn-insta-share" onclick="shareToStatus(${p.id}, 'instagram', this)">Instagram</button>
                    </div>
                    <div id="share-msg-${p.id}" class="share-msg" style="display:none;"></div>
                </div>
            </div>
        `;
    }).join('');
}

function generateCaption(product, platform, contentType) {
    const price = 'Rs. ' + product.price.toLocaleString();
    const specs = product.specs.map(s => s).join(' | ');
    const hashtags = getHashtags(product);

    if (platform === 'instagram') {
        if (contentType === 'story') {
            return `🔥 ${product.name}\n\n💰 ${price}\n📦 ${product.warranty}\n\n👆 Swipe Up To Order!\nCall/WhatsApp: 0323-7927923\n\n${hashtags}`;
        }
        return `${product.name}\n\nPrice: ${price}\n${specs}\nWarranty: ${product.warranty}\n\n🔗 Link In Bio\nCall/WhatsApp: 0323-7927923\n\n${hashtags}`;
    } else if (platform === 'facebook') {
        if (contentType === 'story') {
            return `🔥 ${product.name}\n\n💰 ${price}\n📦 ${product.warranty}\n\n📲 Order Now!\nCall/WhatsApp: 0323-7927923\n🚚 Delivery In Karachi!`;
        }
        return `${product.name}\n\nPrice: ${price}\n${specs}\nWarranty: ${product.warranty}\n\nOrder online: https://solar-cart-apvs.vercel.app\nCall/WhatsApp: 0323-7927923\nDelivery In Karachi!`;
    } else {
        return `*${product.name}*\n\nPrice: *${price}*\n${specs}\nWarranty: ${product.warranty}\n\nOrder now: https://solar-cart-apvs.vercel.app\nWhatsApp: 0323-7927923`;
    }
}

function getHashtags(product) {
    const base = '#SolarCart #SolarPakistan #GoSolar #SolarEnergy #Karachi #Pakistan';
    const catTags = {
        longi: '#Longi #SolarPanel #LongiSolar #HiMo',
        jinko: '#Jinko #JinkoSolar #SolarPanel #TigerNeo',
        inverter: '#Inverter #HybridInverter #iTel #SolarInverter',
        battery: '#LithiumBattery #LiFePO4 #SolarBattery #iTel',
        ess: '#ESS #EnergyStorage #SolarSystem #AllInOne #iTel'
    };
    return base + ' ' + (catTags[product.category] || '');
}

function copyCaption(productId, btn) {
    const caption = document.getElementById('caption-' + productId).textContent;
    navigator.clipboard.writeText(caption).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy Caption'; btn.classList.remove('copied'); }, 2000);
    });
}

function shareToStatus(productId, platform, btn) {
    const product = products.find(p => p.id === productId);
    const caption = document.getElementById('caption-' + productId).textContent;
    if (!product) return;

    const origText = btn.textContent;
    btn.disabled = true;

    const isMobile = navigator.maxTouchPoints > 0;
    const platformLabels = { whatsapp: 'WhatsApp', instagram: 'Instagram' };
    const msg = document.getElementById('share-msg-' + productId);

    function showMsg(text) {
        if (msg) { msg.textContent = text; msg.style.display = 'block'; setTimeout(() => { msg.style.display = 'none'; }, 4000); }
    }
    function resetBtn() {
        btn.textContent = origText; btn.style.removeProperty('background'); btn.disabled = false;
    }

    if (isMobile) {
        btn.textContent = 'Loading...';
        const imgEl = document.getElementById('post-img-' + product.id);
        const imgUrl = (imgEl && imgEl.src && !imgEl.src.startsWith('data:')) ? imgEl.src : (product.localImage || product.image);
        fetch(imgUrl)
            .then(r => r.blob())
            .then(blob => {
                const file = new File([blob], product.model + '.jpg', { type: blob.type || 'image/jpeg' });
                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                    return navigator.share({ text: caption, files: [file] });
                }
                throw new Error('no-share');
            })
            .then(() => {
                btn.textContent = 'Done!';
                btn.style.background = '#2ecc71';
                setTimeout(resetBtn, 2000);
            })
            .catch(() => {
                navigator.clipboard.writeText(caption).catch(() => {});
                showMsg('📋 Caption copy ho gaya! ' + platformLabels[platform] + ' pe paste karo');
                btn.textContent = '✓ Copied';
                btn.style.background = '#2ecc71';
                setTimeout(resetBtn, 2500);
            });
    } else {
        navigator.clipboard.writeText(caption)
            .then(() => {
                showMsg('📋 Caption copy ho gaya! ' + platformLabels[platform] + ' kholo aur paste karo');
                btn.textContent = '✓ Copied';
                btn.style.background = '#2ecc71';
                setTimeout(resetBtn, 2500);
            })
            .catch(() => {
                showMsg('Caption manually copy karo aur ' + platformLabels[platform] + ' pe paste karo');
                setTimeout(resetBtn, 2000);
            });
    }
}

// ==================== SOLAR ANIMATION ====================
(function() {
    const canvas = document.getElementById('solarCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, t = 0, mouseX = -1000, mouseY = -1000;

    const particles = [];
    const orbs = [];
    const sparkles = [];

    function resize() {
        const hero = canvas.parentElement;
        w = canvas.width = hero.offsetWidth;
        h = canvas.height = hero.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    canvas.parentElement.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });
    canvas.parentElement.addEventListener('mouseleave', function() { mouseX = -1000; mouseY = -1000; });

    const count = w < 768 ? 30 : 60;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * w, y: Math.random() * h,
            r: Math.random() * 2.5 + 0.5,
            dx: (Math.random() - 0.5) * 0.3,
            dy: -Math.random() * 0.3 - 0.1,
            o: Math.random() * 0.4 + 0.1,
            phase: Math.random() * Math.PI * 2,
            color: Math.random() > 0.5 ? '200,140,40' : '180,120,50'
        });
    }

    for (let i = 0; i < 5; i++) {
        orbs.push({
            x: Math.random() * w, y: Math.random() * h,
            r: 80 + Math.random() * 120,
            dx: (Math.random() - 0.5) * 0.2,
            dy: (Math.random() - 0.5) * 0.2,
            hue: ['232,150,30','200,160,80','220,170,60','180,130,50','240,180,70'][i],
            pulse: Math.random() * Math.PI * 2
        });
    }

    for (let i = 0; i < 15; i++) {
        sparkles.push({
            x: Math.random() * w, y: Math.random() * h,
            size: Math.random() * 3 + 1,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.02 + 0.01
        });
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        t += 0.008;

        orbs.forEach(o => {
            o.x += o.dx; o.y += o.dy;
            o.pulse += 0.008;
            if (o.x < -o.r) o.x = w + o.r;
            if (o.x > w + o.r) o.x = -o.r;
            if (o.y < -o.r) o.y = h + o.r;
            if (o.y > h + o.r) o.y = -o.r;
            const pulseR = o.r * (1 + 0.15 * Math.sin(o.pulse));
            const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, pulseR);
            g.addColorStop(0, `rgba(${o.hue},0.06)`);
            g.addColorStop(0.5, `rgba(${o.hue},0.03)`);
            g.addColorStop(1, 'transparent');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(o.x, o.y, pulseR, 0, Math.PI * 2); ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const dx = mouseX - p.x, dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                p.x -= dx * 0.008;
                p.y -= dy * 0.008;
            }
            p.x += p.dx; p.y += p.dy;
            const flicker = 0.5 + 0.5 * Math.sin(t * 3 + p.phase);
            if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
            if (p.x < -10) p.x = w + 10;
            if (p.x > w + 10) p.x = -10;

            ctx.fillStyle = `rgba(${p.color},${p.o * flicker * 0.6})`;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const lx = p.x - q.x, ly = p.y - q.y;
                const ld = lx * lx + ly * ly;
                if (ld < 15000) {
                    const alpha = 0.06 * (1 - ld / 15000);
                    ctx.strokeStyle = `rgba(200,150,60,${alpha})`;
                    ctx.lineWidth = 0.4;
                    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
                }
            }
        }

        sparkles.forEach(s => {
            s.phase += s.speed;
            const glow = Math.pow(Math.sin(s.phase), 4);
            if (glow > 0.01) {
                ctx.save();
                ctx.globalAlpha = glow * 0.4;
                ctx.fillStyle = 'rgba(232,170,80,0.8)';
                ctx.beginPath();
                const sz = s.size * glow;
                ctx.moveTo(s.x, s.y - sz * 3);
                ctx.lineTo(s.x + sz * 0.6, s.y);
                ctx.lineTo(s.x, s.y + sz * 3);
                ctx.lineTo(s.x - sz * 0.6, s.y);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(s.x - sz * 3, s.y);
                ctx.lineTo(s.x, s.y + sz * 0.6);
                ctx.lineTo(s.x + sz * 3, s.y);
                ctx.lineTo(s.x, s.y - sz * 0.6);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
            if (s.phase > Math.PI * 6) {
                s.phase = 0;
                s.x = Math.random() * w;
                s.y = Math.random() * h;
            }
        });

        requestAnimationFrame(draw);
    }
    draw();
})();

// ==================== FAQ ====================
function toggleFaq(el) {
    const item = el.parentElement;
    item.classList.toggle('open');
}

function filterFaq(cat, btn) {
    document.querySelectorAll('.faq-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.faq-item').forEach(item => {
        if (cat === 'all' || item.dataset.cat === cat) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ==================== SOLAR CALCULATOR ====================
function calculateSolar() {
    const bill = parseInt(document.getElementById('calcBill').value);
    if (!bill || bill < 500) { alert('Enter A Valid Monthly Bill (Min Rs. 500)'); return; }

    const ratePerUnit = 65;
    const unitsConsumed = Math.round(bill / ratePerUnit);
    const systemSizeKW = Math.round((unitsConsumed / 120) * 10) / 10;
    const panelWatt = 550;
    const panelsNeeded = Math.ceil(systemSizeKW * 1000 / panelWatt);
    const backupHours = parseInt(document.getElementById('calcBackup').value);

    const inverters = products.filter(p => p.category === 'inverter').sort((a, b) => {
        const aKW = parseFloat(a.name.match(/(\d+\.?\d*)kW/i)?.[1] || 0);
        const bKW = parseFloat(b.name.match(/(\d+\.?\d*)kW/i)?.[1] || 0);
        return aKW - bKW;
    });
    let recInverter = inverters[inverters.length - 1];
    for (const inv of inverters) {
        const kw = parseFloat(inv.name.match(/(\d+\.?\d*)kW/i)?.[1] || 0);
        if (kw >= systemSizeKW) { recInverter = inv; break; }
    }

    let recBattery = null;
    let batteryText = 'Not Required';
    if (backupHours > 0) {
        const batteryKWh = systemSizeKW * backupHours * 0.3;
        const batteries = products.filter(p => p.category === 'battery').sort((a, b) => {
            const aKWh = parseFloat(a.name.match(/(\d+\.?\d*)kWh/i)?.[1] || 0);
            const bKWh = parseFloat(b.name.match(/(\d+\.?\d*)kWh/i)?.[1] || 0);
            return aKWh - bKWh;
        });
        for (const bat of batteries) {
            const kWh = parseFloat(bat.name.match(/(\d+\.?\d*)kWh/i)?.[1] || 0);
            if (kWh >= batteryKWh) { recBattery = bat; break; }
        }
        if (!recBattery) recBattery = batteries[batteries.length - 1];
        batteryText = recBattery.name;
    }

    const panelPrice = 27450;
    const totalCost = (panelsNeeded * panelPrice) + recInverter.price + (recBattery ? recBattery.price : 0);
    const monthlySavings = bill;
    const paybackYears = Math.round((totalCost / (monthlySavings * 12)) * 10) / 10;

    document.getElementById('calcSystemSize').textContent = systemSizeKW + ' kW';
    document.getElementById('calcPanels').textContent = panelsNeeded + ' x 550W Panels';
    document.getElementById('calcInverter').textContent = recInverter.name;
    document.getElementById('calcBattery').textContent = batteryText;
    document.getElementById('calcCost').textContent = 'Rs. ' + totalCost.toLocaleString();
    document.getElementById('calcSavings').textContent = 'Rs. ' + monthlySavings.toLocaleString() + ' / Month';
    document.getElementById('calcPayback').textContent = paybackYears + ' Years';

    document.getElementById('calcResult').style.display = 'block';

    window._lastCalcResult = { systemSizeKW, panelsNeeded, recInverter, recBattery, totalCost, monthlySavings };
}

function getQuoteWhatsApp() {
    const r = window._lastCalcResult;
    let msg = '*Solar Cart - Quote Request*%0A%0A';
    if (r) {
        msg += '*System Size:* ' + r.systemSizeKW + ' kW%0A';
        msg += '*Panels:* ' + r.panelsNeeded + ' x 550W%0A';
        msg += '*Inverter:* ' + r.recInverter.name + '%0A';
        msg += '*Battery:* ' + (r.recBattery ? r.recBattery.name : 'None') + '%0A';
        msg += '*Est. Cost:* Rs. ' + r.totalCost.toLocaleString() + '%0A%0A';
    }
    msg += 'I Would Like A Quote For This Solar System.';
    window.open('https://wa.me/923237927923?text=' + msg, '_blank');
}

// ==================== EMI CALCULATOR ====================
function populateEMIProducts() {
    const sel = document.getElementById('emiProduct');
    if (!sel) return;
    products.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.price;
        opt.textContent = p.name + ' - Rs. ' + p.price.toLocaleString();
        sel.appendChild(opt);
    });
}

function emiProductChange() {
    const val = document.getElementById('emiProduct').value;
    document.getElementById('emiCustomGroup').style.display = val === 'custom' ? 'block' : 'none';
    if (val !== 'custom') document.getElementById('emiAmount').value = val;
}

function calculateEMI() {
    const productVal = document.getElementById('emiProduct').value;
    let amount;
    if (productVal === 'custom') {
        amount = parseInt(document.getElementById('emiAmount').value);
    } else {
        amount = parseInt(productVal);
    }
    if (!amount || amount < 1000) { alert('Enter A Valid Amount (Min Rs. 1,000)'); return; }

    const tenure = parseInt(document.querySelector('input[name="emiTenure"]:checked').value);
    const monthly = Math.ceil(amount / tenure);

    document.getElementById('emiTotal').textContent = 'Rs. ' + amount.toLocaleString();
    document.getElementById('emiTenureDisplay').textContent = tenure + ' Months';
    document.getElementById('emiMonthly').textContent = 'Rs. ' + monthly.toLocaleString();

    document.getElementById('emiResult').style.display = 'block';
}

// ==================== ORDER TRACKING ====================
function trackOrder() {
    const orderId = document.getElementById('trackInput').value.trim().toUpperCase();
    if (!orderId) { alert('Enter An Order ID'); return; }

    const container = document.getElementById('trackResult');
    container.innerHTML = '<p style="text-align:center;padding:20px;color:var(--text-dim);">Searching...</p>';

    fetch('orders.json')
        .then(r => r.json())
        .then(data => {
            const orders = data.orders || [];
            const order = orders.find(o => o.orderId.toUpperCase() === orderId);
            if (!order) {
                container.innerHTML = '<div class="tracking-not-found"><h3>Order Not Found</h3><p>Please Check Your Order ID And Try Again.</p></div>';
                return;
            }

            const statuses = JSON.parse(localStorage.getItem('order_statuses') || '{}');
            const status = statuses[order.orderId] || order.status || 'new';
            const statusFlow = ['new', 'confirmed', 'shipped', 'delivered'];
            const currentIdx = statusFlow.indexOf(status);
            const statusLabels = ['New', 'Confirmed', 'Shipped', 'Delivered'];

            let stepperHTML = '<div class="tracking-stepper">';
            statusFlow.forEach((s, i) => {
                let cls = '';
                if (i < currentIdx) cls = 'completed';
                else if (i === currentIdx) cls = 'active';
                stepperHTML += '<div class="tracking-step"><div class="step-circle ' + cls + '">' + (i < currentIdx ? '&#10003;' : (i + 1)) + '</div><div class="step-label ' + cls + '">' + statusLabels[i] + '</div></div>';
            });
            stepperHTML += '</div>';

            const date = new Date(order.timestamp);
            const dateStr = date.toLocaleDateString('en-PK', { day: '2-digit', month: 'short', year: 'numeric' });
            const productsStr = (order.products || []).map(p => p.name + ' x' + p.qty).join(', ');

            container.innerHTML = '<div class="tracking-card">' +
                '<h3 style="text-align:center;margin-bottom:8px;">Order ' + order.orderId + '</h3>' +
                '<p style="text-align:center;color:var(--text-dim);font-size:0.85rem;margin-bottom:10px;">Current Status: <strong style="color:var(--orange);">' + statusLabels[currentIdx] + '</strong></p>' +
                stepperHTML +
                '<div class="tracking-details">' +
                    '<div class="tracking-detail-row"><span class="tracking-detail-label">Customer</span><span class="tracking-detail-value">' + order.name + '</span></div>' +
                    '<div class="tracking-detail-row"><span class="tracking-detail-label">Phone</span><span class="tracking-detail-value">' + order.phone + '</span></div>' +
                    '<div class="tracking-detail-row"><span class="tracking-detail-label">City</span><span class="tracking-detail-value">' + order.city + '</span></div>' +
                    '<div class="tracking-detail-row"><span class="tracking-detail-label">Products</span><span class="tracking-detail-value">' + productsStr + '</span></div>' +
                    '<div class="tracking-detail-row"><span class="tracking-detail-label">Total</span><span class="tracking-detail-value" style="color:var(--orange);font-weight:700;">Rs. ' + order.total + '</span></div>' +
                    '<div class="tracking-detail-row"><span class="tracking-detail-label">Order Date</span><span class="tracking-detail-value">' + dateStr + '</span></div>' +
                    '<div class="tracking-detail-row"><span class="tracking-detail-label">Payment</span><span class="tracking-detail-value">' + order.payment + '</span></div>' +
                '</div>' +
            '</div>';
        })
        .catch(() => {
            container.innerHTML = '<div class="tracking-not-found"><h3>Error</h3><p>Could Not Load Order Data. Please Try Again.</p></div>';
        });
}

// ==================== PRODUCT COMPARISON ====================
let compareList = [];

function toggleCompare(productId) {
    const idx = compareList.indexOf(productId);
    if (idx > -1) {
        compareList.splice(idx, 1);
    } else {
        if (compareList.length >= 3) {
            showToast('Maximum 3 Products Can Be Compared');
            return;
        }
        compareList.push(productId);
    }
    updateCompareBar();
    document.querySelectorAll('.compare-check input').forEach(cb => {
        cb.checked = compareList.includes(parseInt(cb.dataset.pid));
    });
}

function updateCompareBar() {
    const bar = document.getElementById('compareBar');
    if (compareList.length === 0) { bar.style.display = 'none'; return; }
    bar.style.display = 'block';
    document.getElementById('compareCount').textContent = compareList.length + ' Product' + (compareList.length > 1 ? 's' : '') + ' Selected';
    document.getElementById('compareBarThumbs').innerHTML = compareList.map(id => {
        const p = products.find(pr => pr.id === id);
        return p ? '<img src="' + p.image + '" alt="' + p.name + '" loading="lazy">' : '';
    }).join('');
}

function showComparison() {
    if (compareList.length < 2) { showToast('Select At Least 2 Products To Compare'); return; }
    showPage('compare');
    renderComparison();
}

function renderComparison() {
    const container = document.getElementById('compareContent');
    if (compareList.length < 2) {
        container.innerHTML = '<div class="compare-empty"><p>Select At Least 2 Products To Compare.</p><a href="#" class="btn btn-primary" onclick="showPage(\'panels\')">Browse Products</a></div>';
        return;
    }

    const prods = compareList.map(id => products.find(p => p.id === id)).filter(Boolean);
    let html = '<div class="compare-table-wrap"><table class="compare-table">';
    html += '<tr><th>Feature</th>' + prods.map(p => '<th>' + p.name + '</th>').join('') + '</tr>';
    html += '<tr><td>Image</td>' + prods.map(p => '<td><img src="' + p.image + '" alt="' + p.name + '"></td>').join('') + '</tr>';
    html += '<tr><td>Model</td>' + prods.map(p => '<td>' + p.model + '</td>').join('') + '</tr>';
    html += '<tr><td>Price</td>' + prods.map(p => '<td style="font-weight:700;color:var(--orange);">Rs. ' + p.price.toLocaleString() + '</td>').join('') + '</tr>';
    html += '<tr><td>Warranty</td>' + prods.map(p => '<td>' + (p.warranty || '-') + '</td>').join('') + '</tr>';
    html += '<tr><td>Rating</td>' + prods.map(p => '<td>' + (p.rating || '-') + ' (' + (p.reviewCount || 0) + ' Reviews)</td>').join('') + '</tr>';

    const maxSpecs = Math.max(...prods.map(p => p.specs.length));
    for (let i = 0; i < maxSpecs; i++) {
        const label = prods[0].specs[i] ? prods[0].specs[i].split(':')[0] : 'Spec ' + (i + 1);
        html += '<tr><td>' + label + '</td>' + prods.map(p => '<td>' + (p.specs[i] ? p.specs[i].split(':').slice(1).join(':') : '-') + '</td>').join('') + '</tr>';
    }
    html += '<tr><td>Badge</td>' + prods.map(p => '<td>' + (p.badge || '-') + '</td>').join('') + '</tr>';
    html += '</table></div>';

    container.innerHTML = html;
}

function clearCompare() {
    compareList = [];
    updateCompareBar();
    document.querySelectorAll('.compare-check input').forEach(cb => { cb.checked = false; });
}

// ==================== COUPON SYSTEM ====================
let appliedCoupon = null;

function applyCoupon() {
    const code = document.getElementById('couponInput').value.trim().toUpperCase();
    const msgEl = document.getElementById('couponMessage');
    if (!code) { msgEl.textContent = 'Enter A Promo Code'; msgEl.className = 'coupon-error'; return; }

    const coupons = JSON.parse(localStorage.getItem('solar_coupons') || '[]');
    const coupon = coupons.find(c => c.code.toUpperCase() === code);

    if (!coupon) {
        msgEl.textContent = 'Invalid Promo Code'; msgEl.className = 'coupon-error';
        appliedCoupon = null;
        renderCheckout();
        return;
    }

    if (coupon.expiry && new Date(coupon.expiry) < new Date()) {
        msgEl.textContent = 'This Promo Code Has Expired'; msgEl.className = 'coupon-error';
        appliedCoupon = null;
        renderCheckout();
        return;
    }

    appliedCoupon = coupon;
    msgEl.textContent = 'Coupon Applied! ' + (coupon.type === 'percent' ? coupon.amount + '% Off' : 'Rs. ' + coupon.amount.toLocaleString() + ' Off');
    msgEl.className = 'coupon-success';
    renderCheckout();
}

// ==================== NET METERING CALCULATOR ====================
function calculateNetMetering() {
    const systemKW = parseFloat(document.getElementById('nmSystemSize').value);
    const consumption = parseInt(document.getElementById('nmConsumption').value);
    if (!systemKW || !consumption) { alert('Enter System Size And Consumption'); return; }

    const monthlyGen = Math.round(systemKW * 130);
    const selfUse = Math.min(consumption, monthlyGen);
    const exported = Math.max(0, monthlyGen - consumption);
    const creditRate = 22;
    const monthlyCredit = exported * creditRate;
    const selfSaveRate = 55;
    const annualSavings = (selfUse * selfSaveRate + monthlyCredit) * 12;

    document.getElementById('nmGeneration').textContent = monthlyGen + ' Units';
    document.getElementById('nmSelfUse').textContent = selfUse + ' Units';
    document.getElementById('nmExported').textContent = exported + ' Units';
    document.getElementById('nmCredit').textContent = 'Rs. ' + monthlyCredit.toLocaleString();
    document.getElementById('nmAnnual').textContent = 'Rs. ' + annualSavings.toLocaleString();
    document.getElementById('nmResult').style.display = 'block';
}

// ==================== PACKAGES ====================
const solarPackages = [
    { size:'3kW', label:'Small Home', panels:6, panelName:'Longi 550W', inverterId:4, batteryId:11, popular:false },
    { size:'5kW', label:'Medium Home', panels:10, panelName:'Longi 550W', inverterId:6, batteryId:13, popular:true },
    { size:'8kW', label:'Large Home', panels:15, panelName:'Longi 550W', inverterId:8, batteryId:13, popular:false },
    { size:'10kW', label:'Villa / Office', panels:18, panelName:'Longi 550W', inverterId:9, batteryId:14, popular:false }
];

function renderPackages() {
    const grid = document.getElementById('packagesGrid');
    if (!grid) return;
    grid.innerHTML = solarPackages.map(pkg => {
        const inv = products.find(p => p.id === pkg.inverterId);
        const bat = products.find(p => p.id === pkg.batteryId);
        const panelPrice = 27450;
        const totalPrice = (pkg.panels * panelPrice) + (inv ? inv.price : 0) + (bat ? bat.price : 0);
        const individualTotal = totalPrice;
        const packagePrice = Math.round(individualTotal * 0.95);
        const savings = individualTotal - packagePrice;

        return '<div class="package-card' + (pkg.popular ? ' popular' : '') + '">' +
            (pkg.popular ? '<div class="package-badge">Most Popular</div>' : '') +
            '<div class="package-size">' + pkg.size + '</div>' +
            '<div class="package-label">' + pkg.label + '</div>' +
            '<ul class="package-items">' +
                '<li>' + pkg.panels + 'x ' + pkg.panelName + ' Panels</li>' +
                '<li>' + (inv ? inv.name : 'Inverter') + '</li>' +
                '<li>' + (bat ? bat.name : 'Battery') + '</li>' +
                '<li>Complete Wiring & Setup</li>' +
                '<li>Free Delivery In Karachi</li>' +
            '</ul>' +
            '<div class="package-price">Rs. ' + packagePrice.toLocaleString() + '</div>' +
            '<div class="package-save">Save Rs. ' + savings.toLocaleString() + ' (5% Off)</div>' +
            '<button class="btn btn-primary btn-full" onclick="orderPackage(' + pkg.inverterId + ',' + pkg.batteryId + ',' + pkg.panels + ')">Order This Package</button>' +
        '</div>';
    }).join('');
}

function orderPackage(inverterId, batteryId, panelCount) {
    const panelProduct = products.find(p => p.category === 'longi' && p.price === 27450);
    if (panelProduct) { cart.push({ id: panelProduct.id, qty: panelCount }); }
    cart.push({ id: inverterId, qty: 1 });
    cart.push({ id: batteryId, qty: 1 });
    saveCart();
    showToast('Package Added To Cart!');
    toggleCart();
}

// ==================== BLOG ====================
const blogArticles = [
    { id:1, title:'5 Benefits Of Going Solar In Pakistan', tag:'Guide', date:'June 2026', img:'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400', excerpt:'Discover why thousands of Pakistani households are switching to solar energy and how it can save you money.', content:'<h3>1. Slash Your Electricity Bills</h3><p>With electricity rates rising every year in Pakistan, solar energy offers a way to reduce your monthly bill by 70-100%. A 5kW system can generate enough power for an average household.</p><h3>2. Beat Load Shedding</h3><p>Combined with a lithium battery, solar provides uninterrupted power during load shedding — no more sweltering summers without AC or fans.</p><h3>3. Earn From Net Metering</h3><p>Export excess solar electricity to WAPDA and earn credits on your bill. Many homeowners generate more than they consume during sunny months.</p><h3>4. Increase Property Value</h3><p>Homes with solar systems sell for 4-6% more than comparable homes without solar. It is an investment that pays for itself.</p><h3>5. Protect The Environment</h3><p>A typical 5kW solar system prevents approximately 6 tons of CO2 emissions per year — equivalent to planting 100 trees annually.</p>' },
    { id:2, title:'How To Choose The Right Solar Panels', tag:'Tips', date:'June 2026', img:'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400', excerpt:'N-Type vs P-Type, Mono vs Poly — learn which solar panel technology is best for your needs.', content:'<h3>Panel Types</h3><p>Modern solar panels come in two main types: N-Type (newer, more efficient) and P-Type (older, cheaper). For Pakistan\'s hot climate, N-Type panels perform significantly better as they have lower temperature coefficients.</p><h3>Wattage Matters</h3><p>Higher wattage panels (550W-645W) mean fewer panels on your roof for the same system size. This saves installation costs and roof space.</p><h3>Brand Selection</h3><p>Stick with Tier-1 brands like Longi and Jinko. They offer 25-30 year performance warranties and have been tested globally.</p><h3>Efficiency Rating</h3><p>Look for panels with 21%+ efficiency. Higher efficiency means more power from the same surface area.</p>' },
    { id:3, title:'Complete Guide To Net Metering In Pakistan', tag:'Guide', date:'June 2026', img:'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=400', excerpt:'Everything you need to know about selling excess solar electricity back to WAPDA.', content:'<h3>What Is Net Metering?</h3><p>Net metering allows you to export excess solar electricity to the national grid (WAPDA/KESC) and receive credits on your electricity bill.</p><h3>How It Works</h3><p>A bidirectional meter measures both electricity consumed from the grid and electricity exported to the grid. At the end of the billing cycle, you only pay for the net consumption.</p><h3>Requirements</h3><p>You need: a grid-tied or hybrid inverter, a solar system of 1kW or more, application to your DISCO (KESC/HESCO etc.), and approval from NEPRA.</p><h3>Current Rates</h3><p>Export rates in Pakistan are approximately Rs. 19-25 per unit depending on your distribution company and time of year.</p>' },
    { id:4, title:'Battery Backup: LiFePO4 vs Lead Acid', tag:'Comparison', date:'June 2026', img:'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400', excerpt:'Why LiFePO4 lithium batteries are the future of solar energy storage in Pakistan.', content:'<h3>LiFePO4 Advantages</h3><p>Lithium Iron Phosphate (LiFePO4) batteries last 6000+ cycles vs 300-500 for lead acid. That means 15+ years vs 2-3 years of service life.</p><h3>Safety</h3><p>LiFePO4 is the safest lithium chemistry — no risk of thermal runaway, fire, or explosion. Lead acid batteries release toxic gases during charging.</p><h3>Weight & Size</h3><p>A 5kWh LiFePO4 battery weighs about 45kg vs 150kg+ for equivalent lead acid batteries. They also take up 70% less space.</p><h3>Cost Analysis</h3><p>While LiFePO4 costs more upfront, the cost per cycle is 5-8x lower than lead acid. Over 10 years, lithium saves you significantly more money.</p>' },
    { id:5, title:'Solar System Maintenance Tips', tag:'Tips', date:'June 2026', img:'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400', excerpt:'Keep your solar system running at peak performance with these simple maintenance tips.', content:'<h3>Panel Cleaning</h3><p>Clean your panels every 2-4 weeks with water and a soft cloth. Dust and bird droppings can reduce output by 15-25% in Karachi\'s dusty environment.</p><h3>Inverter Monitoring</h3><p>Check your inverter display or WiFi app weekly. Look for error codes, unusual power drops, or fan noise. Most iTel inverters have built-in WiFi monitoring.</p><h3>Battery Care</h3><p>LiFePO4 batteries require minimal maintenance. Keep them in a ventilated area between 15-35°C. Avoid deep discharge below 20% regularly.</p><h3>Annual Inspection</h3><p>Have a professional inspect wiring, connections, and mounting structures annually. Pakistan\'s monsoon season can loosen roof mounts.</p>' }
];

function renderBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    grid.innerHTML = blogArticles.map(a =>
        '<div class="blog-card" onclick="showBlogArticle(' + a.id + ')">' +
            '<div class="blog-card-img"><img src="' + a.img + '" alt="' + a.title + '" loading="lazy"></div>' +
            '<div class="blog-card-body">' +
                '<div class="blog-card-tag">' + a.tag + '</div>' +
                '<div class="blog-card-title">' + a.title + '</div>' +
                '<div class="blog-card-excerpt">' + a.excerpt + '</div>' +
                '<div class="blog-card-date">' + a.date + '</div>' +
            '</div>' +
        '</div>'
    ).join('');
}

function showBlogArticle(id) {
    const article = blogArticles.find(a => a.id === id);
    if (!article) return;
    const container = document.getElementById('blogContent');
    container.innerHTML = '<div class="blog-full">' +
        '<span class="blog-back" onclick="renderBlog(); document.getElementById(\'blogContent\').innerHTML=\'<div class=blog-grid id=blogGrid></div>\'; renderBlog();">&#8592; Back To Articles</span>' +
        '<div class="blog-card-tag">' + article.tag + ' | ' + article.date + '</div>' +
        '<h2>' + article.title + '</h2>' +
        '<img src="' + article.img + '" alt="' + article.title + '" style="width:100%;border-radius:var(--radius);margin-bottom:24px;" loading="lazy">' +
        article.content +
    '</div>';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== WISHLIST ====================
function getWishlist() { return JSON.parse(localStorage.getItem('solar_wishlist') || '[]'); }

function toggleWishlist(productId) {
    let wl = getWishlist();
    const idx = wl.indexOf(productId);
    if (idx > -1) { wl.splice(idx, 1); showToast('Removed From Wishlist'); }
    else { wl.push(productId); showToast('Added To Wishlist!'); }
    localStorage.setItem('solar_wishlist', JSON.stringify(wl));
    updateWishlistHearts();
}

function updateWishlistHearts() {
    const wl = getWishlist();
    document.querySelectorAll('.wishlist-heart').forEach(btn => {
        const pid = parseInt(btn.dataset.pid);
        btn.classList.toggle('active', wl.includes(pid));
        btn.innerHTML = wl.includes(pid) ? '&#9829;' : '&#9825;';
    });
}

function renderWishlist() {
    const wl = getWishlist();
    const container = document.getElementById('wishlistContent');
    if (!container) return;
    if (wl.length === 0) {
        container.innerHTML = '<div class="wishlist-empty"><h3>Your Wishlist Is Empty</h3><p>Browse Products And Click The Heart Icon To Save Items.</p><a href="#" class="btn btn-primary" onclick="showPage(\'panels\')" style="margin-top:16px;">Browse Products</a></div>';
        return;
    }
    const wishProducts = wl.map(id => products.find(p => p.id === id)).filter(Boolean);
    container.innerHTML = '<div class="products-grid">' + wishProducts.map(createProductCard).join('') + '</div>' +
        '<div style="text-align:center;margin-top:24px;"><button class="btn btn-primary" onclick="addAllWishlistToCart()">Add All To Cart</button> <button class="btn btn-outline" onclick="clearWishlist()">Clear Wishlist</button></div>';
    updateWishlistHearts();
}

function addAllWishlistToCart() {
    const wl = getWishlist();
    wl.forEach(id => { if (!cart.find(i => i.id === id)) cart.push({ id, qty: 1 }); });
    saveCart();
    showToast('All Wishlist Items Added To Cart!');
}

function clearWishlist() {
    localStorage.setItem('solar_wishlist', '[]');
    renderWishlist();
    updateWishlistHearts();
}

// ==================== REVIEW SUBMIT ====================
let selectedRating = 5;

function selectStar(rating) {
    selectedRating = rating;
    document.querySelectorAll('#starSelect span').forEach((s, i) => {
        s.classList.toggle('active', i < rating);
    });
}

function populateReviewProducts() {
    const sel = document.getElementById('reviewProduct');
    if (!sel) return;
    products.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.name;
        opt.textContent = p.name;
        sel.appendChild(opt);
    });
}

function submitReview() {
    const name = document.getElementById('reviewName').value.trim();
    const text = document.getElementById('reviewText').value.trim();
    const product = document.getElementById('reviewProduct').value;
    if (!name || !text) { alert('Enter Your Name And Review'); return; }

    const reviews = JSON.parse(localStorage.getItem('customer_reviews') || '[]');
    reviews.unshift({ name, rating: selectedRating, product, text, date: new Date().toISOString().slice(0,10) });
    localStorage.setItem('customer_reviews', JSON.stringify(reviews));

    document.getElementById('reviewName').value = '';
    document.getElementById('reviewText').value = '';
    selectStar(5);
    showToast('Thank You For Your Review!');
    renderCustomerReviews();
}

function renderCustomerReviews() {
    const reviews = JSON.parse(localStorage.getItem('customer_reviews') || '[]');
    if (reviews.length === 0) return;
    const container = document.querySelector('.reviews-grid');
    if (!container) return;
    const newHTML = reviews.map(r => {
        const initials = r.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
        const stars = '&#9733;'.repeat(r.rating) + '&#9734;'.repeat(5 - r.rating);
        return '<div class="review-card"><div class="review-stars">' + stars + '</div><p class="review-text">"' + r.text + '"</p><div class="review-author"><div class="review-avatar">' + initials + '</div><div><strong>' + r.name + '</strong><span>Karachi</span></div></div><div class="review-product">' + r.product + '</div></div>';
    }).join('');
    container.insertAdjacentHTML('afterbegin', newHTML);
}

// ==================== WHATSAPP CHAT POPUP ====================
function toggleWaChat() {
    document.getElementById('waChatPopup').classList.toggle('open');
}

// ==================== DARK MODE ====================
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.getElementById('themeBtn').innerHTML = newTheme === 'dark' ? '&#9728;' : '&#9790;';
}

function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        const btn = document.getElementById('themeBtn');
        if (btn) btn.innerHTML = '&#9728;';
    }
}

// ==================== URDU LANGUAGE ====================
const urduTranslations = {
    'Home': 'ہوم', 'Solar Panels': 'سولر پینلز', 'Inverters': 'انورٹرز', 'Batteries': 'بیٹریاں',
    'ESS Solution': 'ای ایس ایس', 'More': 'مزید', 'Reviews': 'ریویوز', 'Solar Calculator': 'سولر کیلکولیٹر',
    'FAQ': 'سوالات', 'Track Order': 'آرڈر ٹریک', 'Packages': 'پیکجز', 'Blog': 'بلاگ',
    'Wishlist': 'پسندیدہ', 'Contact': 'رابطہ', 'Add To Cart': 'کارٹ میں شامل کریں',
    'Compare': 'موازنہ', 'Search products...': 'مصنوعات تلاش کریں...', 'Place Order': 'آرڈر دیں',
    'Shopping Cart': 'شاپنگ کارٹ', 'Your cart is empty': 'آپ کا کارٹ خالی ہے',
    'Proceed to Checkout': 'چیک آؤٹ', 'Continue Shopping': 'خریداری جاری رکھیں',
    'Checkout': 'چیک آؤٹ', 'Send Message': 'پیغام بھیجیں'
};

function toggleLanguage() {
    const current = localStorage.getItem('language') || 'en';
    const newLang = current === 'en' ? 'ur' : 'en';
    localStorage.setItem('language', newLang);
    applyLanguage(newLang);
}

function applyLanguage(lang) {
    const btn = document.getElementById('langBtn');
    if (btn) btn.textContent = lang === 'en' ? 'UR' : 'EN';
    document.body.style.direction = lang === 'ur' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-ur]').forEach(el => {
        if (lang === 'ur') {
            if (!el.dataset.en) el.dataset.en = el.textContent;
            el.textContent = el.dataset.ur;
        } else {
            if (el.dataset.en) el.textContent = el.dataset.en;
        }
    });

    document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
        const text = a.textContent.trim();
        if (lang === 'ur') {
            if (!a.dataset.enText) a.dataset.enText = text;
            const key = a.dataset.enText || text;
            if (urduTranslations[key]) a.textContent = urduTranslations[key];
        } else {
            if (a.dataset.enText) a.textContent = a.dataset.enText;
        }
    });
}

function initLanguage() {
    const saved = localStorage.getItem('language');
    if (saved === 'ur') applyLanguage('ur');
}

// ==================== PWA ====================
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ==================== SMART CHATBOT ====================
function toggleChatbot() {
    document.getElementById('chatbotPopup').classList.toggle('open');
}

const chatResponses = {
    system_size: "For most homes in Karachi:\n\n- Rs. 10,000-15,000 bill → 3kW system\n- Rs. 15,000-25,000 bill → 5kW system\n- Rs. 25,000-40,000 bill → 8kW system\n- Rs. 40,000+ bill → 10kW+ system\n\nUse our Solar Calculator for a precise recommendation!",
    pricing: "Our price range:\n\n- Solar Panels: Rs. 27,450 - 32,250\n- Inverters: Rs. 80,000 - 525,000\n- Batteries: Rs. 35,000 - 535,000\n- Complete Packages: Rs. 3.5 Lac - 15 Lac\n\nAll prices include official warranty!",
    delivery: "We deliver within Karachi only.\n\n- Delivery Time: 2-5 business days\n- Delivery Charges: Depending on location\n- We call before delivery to schedule\n- Heavy items delivered to ground floor",
    warranty: "All products come with official manufacturer warranty:\n\n- Solar Panels: 12 Year Product + 30 Year Performance\n- Inverters: 3-5 Years\n- Batteries: 5-10 Years\n- ESS Solutions: 2-5 Years\n\nWarranty card included with every product!",
    payment: "We accept Bank Transfer only:\n\nNATIONAL TRADERS\nA/C: PK72 ASCM 0000 6004 2000 2328\nAskari Bank Ltd, Korangi Industrial Area, Karachi\n\nSend transaction ID after payment.",
    human: "REDIRECT_WHATSAPP"
};

function chatAnswer(key) {
    const msgs = document.getElementById('chatMessages');
    const opts = document.getElementById('chatOptions');
    const label = { system_size:'What System Size Do I Need?', pricing:'Product Pricing', delivery:'Delivery Info', warranty:'Warranty', payment:'Payment Method', human:'Talk To Human' };

    msgs.innerHTML += '<div class="chat-msg user">' + label[key] + '</div>';
    opts.style.display = 'none';
    msgs.innerHTML += '<div class="chat-typing"><span></span><span></span><span></span></div>';
    msgs.scrollTop = msgs.scrollHeight;

    setTimeout(() => {
        msgs.querySelector('.chat-typing')?.remove();
        if (key === 'human') {
            msgs.innerHTML += '<div class="chat-msg bot">Connecting you to our team on WhatsApp...</div>';
            setTimeout(() => { window.open('https://wa.me/923237927923?text=Hi, I need help with solar products', '_blank'); }, 1000);
        } else {
            msgs.innerHTML += '<div class="chat-msg bot">' + chatResponses[key].replace(/\n/g, '<br>') + '</div>';
        }
        msgs.scrollTop = msgs.scrollHeight;
        setTimeout(() => { opts.style.display = 'flex'; }, 500);
    }, 1200);
}

// ==================== RECENTLY VIEWED ====================
function trackRecentlyViewed(productId) {
    let rv = JSON.parse(localStorage.getItem('recently_viewed') || '[]');
    rv = rv.filter(id => id !== productId);
    rv.unshift(productId);
    if (rv.length > 6) rv = rv.slice(0, 6);
    localStorage.setItem('recently_viewed', JSON.stringify(rv));
}

function renderRecentlyViewed() {
    const rv = JSON.parse(localStorage.getItem('recently_viewed') || '[]');
    const section = document.getElementById('recentlyViewedSection');
    const grid = document.getElementById('recentlyViewedGrid');
    if (!section || !grid || rv.length === 0) { if (section) section.style.display = 'none'; return; }
    section.style.display = 'block';
    const rvProducts = rv.map(id => products.find(p => p.id === id)).filter(Boolean);
    grid.innerHTML = rvProducts.map(createProductCard).join('');
    updateWishlistHearts();
}

// ==================== FLASH SALE COUNTDOWN ====================
function initFlashSale() {
    const saleEnd = new Date();
    saleEnd.setDate(saleEnd.getDate() + 3);
    saleEnd.setHours(23, 59, 59);
    const banner = document.getElementById('flashSaleBanner');
    if (!banner) return;

    function updateTimer() {
        const now = new Date();
        const diff = saleEnd - now;
        if (diff <= 0) { banner.style.display = 'none'; return; }
        banner.style.display = 'block';
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        document.getElementById('flashDays').textContent = String(d).padStart(2, '0');
        document.getElementById('flashHours').textContent = String(h).padStart(2, '0');
        document.getElementById('flashMins').textContent = String(m).padStart(2, '0');
        document.getElementById('flashSecs').textContent = String(s).padStart(2, '0');
    }
    updateTimer();
    setInterval(updateTimer, 1000);
}

// ==================== LIVE ORDER TICKER ====================
const tickerOrders = [
    'Ahmed from DHA ordered iTel 6kW Inverter', 'Bilal from Gulshan ordered 2x Longi 645W Panels',
    'Saad from Clifton ordered iTel 5.12kWh Battery', 'Fahad from PECHS ordered 5kW Package',
    'Usman from Bahria Town ordered iTel 8kW Inverter', 'Hamza from Korangi ordered Power Go 320Wh',
    'Kashif from North Nazimabad ordered 3kW Package', 'Zubair from Malir ordered iTel Combo System',
    'Imran from Nazimabad ordered Jinko 585W Panel', 'Rehan from Tariq Road ordered iTel 3kW Inverter'
];
let tickerDismissed = false;

function startOrderTicker() {
    if (tickerDismissed) return;
    let idx = 0;
    function showTicker() {
        if (tickerDismissed) return;
        const ticker = document.getElementById('orderTicker');
        document.getElementById('tickerText').textContent = tickerOrders[idx % tickerOrders.length];
        ticker.classList.add('show');
        setTimeout(() => { ticker.classList.remove('show'); }, 4000);
        idx++;
    }
    setTimeout(showTicker, 8000);
    setInterval(showTicker, 15000);
}

function dismissTicker() {
    tickerDismissed = true;
    document.getElementById('orderTicker').classList.remove('show');
}

// ==================== LEAD COLLECTION POPUP ====================
function initLeadPopup() {
    if (localStorage.getItem('lead_collected')) return;
    setTimeout(() => {
        document.getElementById('leadPopup').classList.add('show');
    }, 10000);
}

function closeLeadPopup() {
    document.getElementById('leadPopup').classList.remove('show');
    localStorage.setItem('lead_collected', 'dismissed');
}

function submitLead() {
    const phone = document.getElementById('leadPhone').value.trim();
    if (!phone) { alert('Enter Your Phone Number'); return; }
    const leads = JSON.parse(localStorage.getItem('solar_leads') || '[]');
    leads.push({ phone, date: new Date().toISOString() });
    localStorage.setItem('solar_leads', JSON.stringify(leads));
    localStorage.setItem('lead_collected', 'submitted');
    document.getElementById('leadPopup').classList.remove('show');
    showToast('Thank You! You Will Receive Exclusive Offers!');
}

// ==================== VOICE SEARCH ====================
function startVoiceSearch() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showToast('Voice Search Not Supported In This Browser');
        return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    const btn = document.getElementById('voiceBtn');
    btn.classList.add('listening');

    recognition.onresult = function(e) {
        const text = e.results[0][0].transcript;
        document.getElementById('searchInput').value = text;
        searchProducts();
        btn.classList.remove('listening');
    };
    recognition.onerror = function() { btn.classList.remove('listening'); };
    recognition.onend = function() { btn.classList.remove('listening'); };
    recognition.start();
}

// ==================== CART ABANDONMENT REMINDER ====================
let cartReminderDismissed = false;
function initCartReminder() {
    setInterval(() => {
        if (cartReminderDismissed || cart.length === 0) return;
        const pageHome = document.getElementById('page-home');
        if (pageHome && pageHome.classList.contains('active')) {
            document.getElementById('cartReminder').classList.add('show');
        }
    }, 120000);
}

function dismissCartReminder() {
    document.getElementById('cartReminder').classList.remove('show');
    cartReminderDismissed = true;
}

// ==================== PRICE DROP ALERT ====================
function togglePriceAlert(productId, btn) {
    let alerts = JSON.parse(localStorage.getItem('price_alerts') || '[]');
    const idx = alerts.indexOf(productId);
    if (idx > -1) {
        alerts.splice(idx, 1);
        btn.classList.remove('active');
        btn.innerHTML = '&#128276; Price Alert';
        showToast('Price Alert Removed');
    } else {
        alerts.push(productId);
        btn.classList.add('active');
        btn.innerHTML = '&#128277; Alert Set';
        showToast('You Will Be Notified When Price Drops!');
    }
    localStorage.setItem('price_alerts', JSON.stringify(alerts));
}

// ==================== SEO - DYNAMIC PAGE TITLES ====================
const pageTitles = {
    home: 'Solar Cart - iTel Solar Products | Shop Online',
    panels: 'Solar Panels - Longi & Jinko | Solar Cart',
    inverters: 'iTel Hybrid Solar Inverters | Solar Cart',
    batteries: 'iTel LiFePO4 Lithium Batteries | Solar Cart',
    ess: 'Energy Storage Solutions | Solar Cart',
    reviews: 'Customer Reviews & Gallery | Solar Cart',
    calculator: 'Solar Calculator & EMI | Solar Cart',
    faq: 'Frequently Asked Questions | Solar Cart',
    tracking: 'Track Your Order | Solar Cart',
    contact: 'Contact Us | Solar Cart',
    packages: 'Complete Solar System Packages | Solar Cart',
    blog: 'Solar Energy Blog & Articles | Solar Cart',
    wishlist: 'My Wishlist | Solar Cart',
    compare: 'Compare Products | Solar Cart',
    checkout: 'Checkout | Solar Cart',
    privacy: 'Privacy Policy | Solar Cart',
    about: 'About Us | Solar Cart',
    installation: 'Book Installation | Solar Cart',
    maintenance: 'Maintenance Packages | Solar Cart',
    survey: 'Site Survey Request | Solar Cart',
    netmetering: 'Net Metering Service | Solar Cart',
    warranty: 'Warranty Registration | Solar Cart',
    careers: 'Careers | Solar Cart',
    dealer: 'Dealer Portal | Solar Cart',
    affiliate: 'Affiliate Program | Solar Cart',
    quiz: 'Solar System Quiz | Solar Cart',
    rates: 'Electricity Rate Calculator | Solar Cart',
    tracker: 'Savings Tracker | Solar Cart'
};

const _origShowPage = showPage;
showPage = function(page) {
    _origShowPage(page);
    if (pageTitles[page]) document.title = pageTitles[page];
};

// ==================== SERVICE FORMS ====================
function submitBooking(e) {
    e.preventDefault();
    const booking = { name:document.getElementById('bookName').value, phone:document.getElementById('bookPhone').value, address:document.getElementById('bookAddress').value, size:document.getElementById('bookSize').value, date:document.getElementById('bookDate').value, notes:document.getElementById('bookNotes').value, timestamp:Date.now() };
    const bookings = JSON.parse(localStorage.getItem('solar_bookings') || '[]');
    bookings.unshift(booking); localStorage.setItem('solar_bookings', JSON.stringify(bookings));
    showToast('Installation Booking Submitted!');
    e.target.reset();
    window.open('https://wa.me/923237927923?text=New Installation Booking:%0AName: ' + booking.name + '%0APhone: ' + booking.phone + '%0ASize: ' + booking.size + '%0ADate: ' + booking.date, '_blank');
}

function submitSurvey(e) {
    e.preventDefault();
    const survey = { name:document.getElementById('surveyName').value, phone:document.getElementById('surveyPhone').value, address:document.getElementById('surveyAddress').value, property:document.getElementById('surveyProperty').value, roof:document.getElementById('surveyRoof').value, bill:document.getElementById('surveyBill').value, timestamp:Date.now() };
    const surveys = JSON.parse(localStorage.getItem('survey_requests') || '[]');
    surveys.unshift(survey); localStorage.setItem('survey_requests', JSON.stringify(surveys));
    showToast('Site Survey Request Submitted!'); e.target.reset();
}

function submitNetMetering(e) {
    e.preventDefault();
    const nm = { name:document.getElementById('nmName').value, phone:document.getElementById('nmPhone').value, size:document.getElementById('nmSize').value, disco:document.getElementById('nmDisco').value, address:document.getElementById('nmAddr').value, timestamp:Date.now() };
    const nms = JSON.parse(localStorage.getItem('nm_applications') || '[]');
    nms.unshift(nm); localStorage.setItem('nm_applications', JSON.stringify(nms));
    showToast('Net Metering Application Submitted!'); e.target.reset();
}

function submitWarranty(e) {
    e.preventDefault();
    const war = { name:document.getElementById('warName').value, phone:document.getElementById('warPhone').value, orderId:document.getElementById('warOrderId').value, product:document.getElementById('warProduct').value, serial:document.getElementById('warSerial').value, date:document.getElementById('warDate').value, timestamp:Date.now() };
    const wars = JSON.parse(localStorage.getItem('warranty_registrations') || '[]');
    wars.unshift(war); localStorage.setItem('warranty_registrations', JSON.stringify(wars));
    showToast('Warranty Registered Successfully!'); e.target.reset();
}

function submitDealer(e) {
    e.preventDefault();
    const dealer = { business:document.getElementById('dealerBiz').value, name:document.getElementById('dealerName').value, phone:document.getElementById('dealerPhone').value, city:document.getElementById('dealerCity').value, ntn:document.getElementById('dealerNTN').value, volume:document.getElementById('dealerVolume').value, timestamp:Date.now() };
    const dealers = JSON.parse(localStorage.getItem('dealer_applications') || '[]');
    dealers.unshift(dealer); localStorage.setItem('dealer_applications', JSON.stringify(dealers));
    showToast('Dealer Application Submitted!'); e.target.reset();
}

function populateWarrantyProducts() {
    const sel = document.getElementById('warProduct');
    if (!sel) return;
    products.forEach(p => { const o = document.createElement('option'); o.value = p.name; o.textContent = p.name; sel.appendChild(o); });
}

// ==================== SOLAR QUIZ ====================
const quizSteps = [
    { q:'What Type Of Property?', opts:['Home / Apartment','Shop / Office','Factory / Warehouse'] },
    { q:'Your Monthly Electricity Bill?', opts:['Under Rs. 10,000','Rs. 10,000 - 20,000','Rs. 20,000 - 40,000','Rs. 40,000+'] },
    { q:'Which Appliances Do You Run?', opts:['Lights, Fans, TV Only','+ 1 AC + Fridge','+ 2-3 ACs + Fridge + Washing Machine','+ Heavy Machinery'] },
    { q:'How Many Hours Backup Needed?', opts:['No Backup Needed','4-6 Hours','8-12 Hours','24 Hours'] },
    { q:'Your Budget Range?', opts:['Under Rs. 3 Lac','Rs. 3-6 Lac','Rs. 6-12 Lac','Rs. 12 Lac+'] }
];
let quizStep = 0, quizAnswers = [];

function renderQuiz() {
    const card = document.getElementById('quizCard');
    if (!card) return;
    if (quizStep >= quizSteps.length) { showQuizResult(); return; }
    const s = quizSteps[quizStep];
    const pct = ((quizStep) / quizSteps.length) * 100;
    card.innerHTML = '<div class="quiz-progress"><div class="quiz-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="quiz-question">Step ' + (quizStep + 1) + ' of ' + quizSteps.length + ': ' + s.q + '</div>' +
        '<div class="quiz-options">' + s.opts.map((o, i) => '<button class="quiz-option" onclick="quizSelect(' + i + ')">' + o + '</button>').join('') + '</div>';
}

function quizSelect(idx) {
    quizAnswers.push(idx);
    quizStep++;
    renderQuiz();
}

function showQuizResult() {
    const billIdx = quizAnswers[1] || 0;
    const sizes = ['3kW', '5kW', '8kW', '10kW+'];
    const recSize = sizes[Math.min(billIdx, 3)];
    const card = document.getElementById('quizCard');
    card.innerHTML = '<div class="quiz-progress"><div class="quiz-progress-fill" style="width:100%"></div></div>' +
        '<div style="text-align:center;padding:20px 0;">' +
        '<h2 style="color:var(--orange);margin-bottom:12px;">&#9889; Your Recommended System: ' + recSize + '</h2>' +
        '<p style="color:var(--text-dim);margin-bottom:24px;">Based on your answers, we recommend a ' + recSize + ' solar system for your needs.</p>' +
        '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">' +
        '<a href="#" class="btn btn-primary" onclick="showPage(\'packages\')">View Packages</a>' +
        '<a href="#" class="btn btn-outline" onclick="showPage(\'calculator\')">Detailed Calculator</a>' +
        '<a href="#" class="btn btn-outline" onclick="quizStep=0;quizAnswers=[];renderQuiz();">Retake Quiz</a>' +
        '</div></div>';
}

// ==================== ELECTRICITY RATE CALCULATOR ====================
function calculateRate() {
    const units = parseInt(document.getElementById('rateUnits').value);
    if (!units || units < 1) { alert('Enter Valid Units'); return; }
    let rate;
    if (units <= 100) rate = 12;
    else if (units <= 200) rate = 22;
    else if (units <= 300) rate = 35;
    else if (units <= 500) rate = 50;
    else if (units <= 700) rate = 58;
    else rate = 65;
    const energy = units * rate;
    const fuel = Math.round(units * 5.5);
    const tax = Math.round(energy * 0.17);
    const total = energy + fuel + tax + 250;
    document.getElementById('rateUnitsDisplay').textContent = units + ' Units';
    document.getElementById('ratePerUnit').textContent = 'Rs. ' + rate;
    document.getElementById('rateEnergy').textContent = 'Rs. ' + energy.toLocaleString();
    document.getElementById('rateFuel').textContent = 'Rs. ' + fuel.toLocaleString();
    document.getElementById('rateTax').textContent = 'Rs. ' + tax.toLocaleString();
    document.getElementById('rateTotalBill').textContent = 'Rs. ' + total.toLocaleString();
    document.getElementById('rateSavings').textContent = 'Rs. ' + Math.round(total * 0.85).toLocaleString() + ' / Month';
    document.getElementById('rateResult').style.display = 'block';
}

// ==================== SAVINGS TRACKER ====================
function addTrackerEntry() {
    const month = document.getElementById('trackerMonth').value;
    const before = parseInt(document.getElementById('trackerBefore').value);
    const after = parseInt(document.getElementById('trackerAfter').value);
    if (!month || !before) { alert('Enter Month And Bill Amount'); return; }
    const tracker = JSON.parse(localStorage.getItem('savings_tracker') || '[]');
    tracker.push({ month, before, after: after || 0 });
    tracker.sort((a, b) => a.month.localeCompare(b.month));
    localStorage.setItem('savings_tracker', JSON.stringify(tracker));
    document.getElementById('trackerBefore').value = '';
    document.getElementById('trackerAfter').value = '';
    renderTracker();
}

function renderTracker() {
    const tracker = JSON.parse(localStorage.getItem('savings_tracker') || '[]');
    const chart = document.getElementById('trackerChart');
    const summary = document.getElementById('trackerSummary');
    if (!chart) return;
    if (tracker.length === 0) { chart.innerHTML = '<p style="text-align:center;color:var(--text-dim);padding:20px;">No Records Yet. Add Your Monthly Bills Above.</p>'; summary.innerHTML = ''; return; }
    const maxVal = Math.max(...tracker.map(t => t.before), 1);
    chart.innerHTML = '<h3 style="margin-bottom:16px;">Monthly Comparison</h3><div class="tracker-bars">' +
        tracker.map(t => '<div class="tracker-bar-col"><div class="tracker-bar before" style="height:' + (t.before / maxVal * 100) + '%;" title="Before: Rs.' + t.before.toLocaleString() + '"></div><div class="tracker-bar after" style="height:' + ((t.after || 0) / maxVal * 100) + '%;" title="After: Rs.' + (t.after || 0).toLocaleString() + '"></div><div class="tracker-bar-label">' + t.month.slice(5) + '</div></div>').join('') +
        '</div><div style="display:flex;gap:16px;justify-content:center;margin-top:10px;font-size:0.78rem;"><span style="color:var(--danger);">&#9632; Before Solar</span><span style="color:var(--green);">&#9632; After Solar</span></div>';
    const totalSaved = tracker.reduce((s, t) => s + (t.before - (t.after || 0)), 0);
    summary.innerHTML = '<div style="text-align:center;margin-top:20px;padding:20px;background:rgba(232,122,30,0.06);border-radius:var(--radius-sm);"><p style="font-size:0.85rem;color:var(--text-dim);">Total Saved</p><p style="font-size:1.8rem;font-weight:900;color:var(--green);">Rs. ' + totalSaved.toLocaleString() + '</p></div>';
}

// ==================== TIP OF THE DAY ====================
const solarTips = [
    'Clean your solar panels every 2 weeks for maximum efficiency.',
    'A 5kW system can save up to Rs. 15,000/month on electricity.',
    'LiFePO4 batteries last 6000+ cycles — 10x more than lead acid.',
    'Solar panels work even on cloudy days, just at reduced output.',
    'Net metering lets you sell excess electricity back to WAPDA.',
    'Hybrid inverters can work with both solar and grid power.',
    'Solar panels have a 25-30 year performance warranty.',
    'A 1kW solar system generates about 4-5 units per day in Karachi.',
    'Summer is the best time for solar — longer days mean more power.',
    'Dust can reduce solar panel output by 15-25% — keep them clean.',
    'Solar energy is the cheapest source of electricity in Pakistan.',
    'A properly sized battery can provide 8-12 hours of backup.',
    'N-Type solar panels perform better in hot climates like Karachi.',
    'Solar panels add 4-6% value to your property.',
    'The payback period for solar in Pakistan is typically 3-4 years.',
    'Solar systems require almost zero maintenance after installation.',
    'Inverter efficiency matters — look for 97%+ efficiency rating.',
    'Bifacial panels can generate up to 10% more power from reflected light.',
    'Solar energy reduces your carbon footprint by 6 tons CO2 per year.',
    'Peak solar generation in Karachi is between 10 AM and 3 PM.',
    'Always buy Tier-1 certified solar panels for reliability.',
    'WiFi-enabled inverters let you monitor power generation on your phone.',
    'Solar panel angle matters — 25-30 degrees is ideal for Karachi.',
    'DC wiring should be done by certified professionals only.',
    'Solar panels are rated to withstand winds up to 140 km/h.',
    'A 10kW system can power a large villa with 3-4 ACs.',
    'Battery backup eliminates the need for generators during load shedding.',
    'Solar energy is tax-free under current Pakistani regulations.',
    'IP65/IP66 rated inverters are weather-resistant for outdoor installation.',
    'Regular monitoring helps detect performance drops early.'
];

function showTipOfDay() {
    const el = document.getElementById('tipText');
    if (!el) return;
    const dayIndex = new Date().getDate() % solarTips.length;
    el.innerHTML = '<strong>Solar Tip:</strong> ' + solarTips[dayIndex];
}

// ==================== SOLAR WEATHER WIDGET ====================
function showSolarWidget() {
    const month = new Date().getMonth();
    const data = [
        {icon:'&#9728;',text:'Good solar day',gen:'4.5'},{icon:'&#9728;',text:'Good solar day',gen:'5.0'},
        {icon:'&#9728;',text:'Excellent solar day',gen:'5.8'},{icon:'&#9728;',text:'Peak solar season',gen:'6.2'},
        {icon:'&#9728;',text:'Maximum solar generation',gen:'6.5'},{icon:'&#9728;',text:'Hot & sunny - great for solar',gen:'6.0'},
        {icon:'&#127783;',text:'Monsoon - variable output',gen:'3.5'},{icon:'&#127783;',text:'Monsoon - reduced output',gen:'3.8'},
        {icon:'&#9728;',text:'Good solar recovery',gen:'5.2'},{icon:'&#9728;',text:'Excellent solar day',gen:'5.5'},
        {icon:'&#9728;',text:'Good solar generation',gen:'4.8'},{icon:'&#9728;',text:'Moderate solar day',gen:'4.2'}
    ];
    const d = data[month];
    const iconEl = document.getElementById('weatherIcon');
    const textEl = document.getElementById('weatherText');
    const genEl = document.getElementById('weatherGen');
    if (iconEl) iconEl.innerHTML = d.icon;
    if (textEl) textEl.textContent = d.text + ' expected in Karachi';
    if (genEl) genEl.textContent = d.gen;
}

// ==================== INIT ====================
renderProducts();
updateCartUI();
populateEMIProducts();
renderPackages();
renderBlog();
populateReviewProducts();
renderCustomerReviews();
selectStar(5);
initTheme();
initLanguage();
updateWishlistHearts();
renderRecentlyViewed();
populateWarrantyProducts();
showTipOfDay();
showSolarWidget();
renderTracker();
startOrderTicker();
initLeadPopup();
initCartReminder();
