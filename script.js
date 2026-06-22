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

    return `
        <div class="product-card${disabledClass}" data-name="${product.name.toLowerCase()}" data-category="${product.category}">
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
    const navMap = { home:0, panels:1, inverters:2, batteries:3, ess:4, contact:5 };
    const links = document.querySelectorAll('.nav-links a');
    if (links[navMap[page]]) links[navMap[page]].classList.add('active');

    const navLinksEl = document.getElementById('navLinks');
    if (navLinksEl) navLinksEl.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'checkout') renderCheckout();
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
    document.getElementById('summarySubtotal').textContent = 'Rs. ' + total.toLocaleString();
    document.getElementById('summaryDelivery').textContent = 'Rs. 2,000';
    document.getElementById('summaryTotal').textContent = 'Rs. ' + (total + 2000).toLocaleString();
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
    msg += `%0A*Subtotal:* Rs.${total.toLocaleString()}%0A`;
    msg += `*Total:* Rs.${total.toLocaleString()}%0A`;
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

const statsSection = document.querySelector('.stats-section');
if (statsSection) counterObserver.observe(statsSection);

// ==================== SOCIAL MEDIA DASHBOARD ====================
function generateSocialPosts() {
    const platform = document.getElementById('socialPlatform').value;
    const category = document.getElementById('socialCategory').value;
    const container = document.getElementById('socialPosts');

    let filtered = category === 'all' ? products : products.filter(p => p.category === category);
    if (filtered.length === 0) { container.innerHTML = '<p style="color:var(--gray-500);padding:20px;">No products in this category.</p>'; return; }

    container.innerHTML = filtered.map(p => {
        const caption = generateCaption(p, platform);
        return `
            <div class="social-post-card">
                <div class="post-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
                <div class="post-body">
                    <div class="post-platform">${platform.toUpperCase()}</div>
                    <div class="post-caption" id="caption-${p.id}">${caption}</div>
                    <div class="post-actions">
                        <button class="btn-copy" onclick="copyCaption(${p.id}, this)">Copy Caption</button>
                    </div>
                    <div class="post-actions" style="margin-top:6px;">
                        <button class="btn-whatsapp-share" onclick="shareToStatus(${p.id}, 'whatsapp', this)">WhatsApp</button>
                        <button class="btn-insta-share" onclick="shareToStatus(${p.id}, 'instagram', this)">Instagram</button>
                        <button class="btn-fb-share" onclick="shareToStatus(${p.id}, 'facebook', this)">Facebook</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function generateCaption(product, platform) {
    const price = 'Rs. ' + product.price.toLocaleString();
    const specs = product.specs.map(s => s).join(' | ');
    const hashtags = getHashtags(product);

    if (platform === 'instagram') {
        return `${product.name}\n\nPrice: ${price}\n${specs}\nWarranty: ${product.warranty}\n\nOrder now at https://solar-cart-apvs.vercel.app\nCall/WhatsApp: 0323-7927923\n\n${hashtags}`;
    } else if (platform === 'facebook') {
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
    btn.textContent = 'Loading...';
    btn.disabled = true;

    const imgUrl = product.localImage || product.image;

    fetch(imgUrl)
        .then(r => r.blob())
        .then(blob => {
            const file = new File([blob], product.model + '.jpg', { type: blob.type || 'image/jpeg' });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                navigator.share({ text: caption, files: [file] })
                    .then(() => {
                        btn.textContent = 'Done!';
                        btn.style.background = '#2ecc71';
                        setTimeout(() => { btn.textContent = origText; btn.style.background = ''; btn.disabled = false; }, 2000);
                    })
                    .catch(() => { btn.textContent = origText; btn.disabled = false; });
            } else {
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = product.model + '-' + platform + '.jpg';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                navigator.clipboard.writeText(caption).catch(() => {});
                btn.textContent = 'Saved!';
                btn.style.background = '#2ecc71';
                setTimeout(() => { btn.textContent = origText; btn.style.background = ''; btn.disabled = false; }, 2500);
            }
        })
        .catch(() => { btn.textContent = origText; btn.disabled = false; });
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

// ==================== INIT ====================
renderProducts();
updateCartUI();
