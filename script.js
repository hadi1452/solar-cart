// ==================== PRODUCT DATA ====================
const products = [
    // Solar Panels - Longi
    { id:1, name:"LONGi Hi-MO X10 645W Monofacial Panel", model:"LR7-72HVH-645M", category:"longi", price:32250, badge:"New", badgeClass:"best", warranty:"12 Yr Product / 30 Yr Performance", image:"https://sunsolar.pk/wp-content/uploads/2025/05/Design-ohne-Titel-35-3.png", specs:["Power: 645W","Type: N-Type HPBC 2.0","Efficiency: 24.1%"], perWatt:"~Rs. 50/watt", featured:true },
    { id:2, name:"Longi 610W Hi-Mo 7 Bifacial Series Solar Panel", model:"LR8-66HGD-610M", category:"longi", price:27450, badge:"Popular", badgeClass:"", warranty:"12 Yr Product / 30 Yr Performance", image:"https://cdn11.bigcommerce.com/s-o8a7xpro4o/images/stencil/760x760/products/987/4078/1__55057.1705069390.png?c=1", specs:["Power: 610W","Type: N-Type HPDC Bifacial","Efficiency: 22.8%"], perWatt:"~Rs. 45/watt", featured:true },

    // Solar Panels - Jinko
    { id:3, name:"JINKO 585W N-Type Bifacial Solar Panel", model:"JKM585N-72HL4-BDV", category:"jinko", price:29250, badge:"Tier 1", badgeClass:"best", warranty:"12 Yr Product / 30 Yr Performance", image:"https://www.sunevosolar.com/uploadfile/202402/26/f0645231480db88bfff1bdee41323bf7_medium.jpg", specs:["Power: 585W","Type: N-Type Bifacial","Efficiency: 22.6%"], perWatt:"~Rs. 50/watt", featured:true },

    // Inverters (Official iTel images from itelsolar.com)
    { id:4, name:"iTel 3KW Pro IP54 Hybrid Solar Inverter", model:"IPV-3K24UPRO", category:"inverter", price:80000, badge:"", warranty:"3 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-3kW-Hybrid-Solar-Inverter-%E2%80%93-24V-Pure-Sine-Wave-Powers-ACs-TVs-Fridge-1.jpg", specs:["Capacity: 3kW / 4.5kVA","Type: Hybrid IP54","Voltage: 24V"], featured:false },
    { id:5, name:"iPV-4K24U Pro itel Inverter 4kW 24V SP Hybrid", model:"IPV-4K24UPRO", category:"inverter", price:113000, badge:"Popular", badgeClass:"", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/07/itel-4kW-Hybrid-Solar-Inverter-%E2%80%93-Powers-ACs-Fridges-TVs-24V-IP54-Rated-1.jpg", specs:["Capacity: 4kW","Type: Hybrid IP54","MPPT: Dual + WiFi"], featured:true },
    { id:6, name:"itel 6kw Inverter Hybrid 48V IP54 IPV-6K48UPRO with Wifi", model:"IPV-6K48UPRO", category:"inverter", price:145000, badge:"Best Seller", badgeClass:"best", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/07/itel-6kW-Hybrid-Solar-Inverter-%E2%80%93-Dual-AC-Output-for-Homes-Clinics-48V-IP54-Rated-2.jpg", specs:["Capacity: 6kW","Type: Hybrid IP54","MPPT: 8kW PV + WiFi"], featured:true },
    { id:7, name:"IHY-6KL1A itel 6kW IP66 Hybrid Solar Inverter", model:"IHY-6KL1A", category:"inverter", price:225000, badge:"IP66", badgeClass:"premium", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-8kW-3-Phase-Hybrid-Solar-Inverter-%E2%80%93-Commercial-Power-for-Offices-Estates-IP66-2.jpg", specs:["Capacity: 6kW","Type: Hybrid IP66","PV Input: 12kW + WiFi"], featured:false },
    { id:8, name:"ITEL 8KW (IP54) Hybrid Solar Inverter", model:"IPV-8K48U", category:"inverter", price:213000, badge:"Best Value", badgeClass:"best", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/10/8kw-inverter-8k48T-dual-output-8kva.webp", specs:["Capacity: 8kW / 8kVA","Type: Hybrid IP54","PV Input: 16kW Max"], featured:false },
    { id:9, name:"itel 12kw Inverter Hybrid 48V IP54 IPV-12K48U with Wifi", model:"IPV-12K48U", category:"inverter", price:525000, badge:"Heavy Duty", badgeClass:"premium", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-12kW-Hybrid-Solar-Inverter-%E2%80%93-Heavy-Duty-Backup-for-Estates-Clinics-Offices-48V-Dual-MPPT-2.jpg", specs:["Capacity: 12kW","Type: Hybrid IP54","MPPT: Dual + WiFi"], featured:false },
    { id:10, name:"IP66-rated 6.6kW Hybrid itel Inverter", model:"IHY-6K6L1A", category:"inverter", price:210000, badge:"IP66", badgeClass:"premium", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-8kW-3-Phase-Hybrid-Solar-Inverter-%E2%80%93-Commercial-Power-for-Offices-Estates-IP66-2.jpg", specs:["Capacity: 6.6kW","Type: Hybrid IP66","AI SmartGo + WiFi"], featured:false },

    // ESS Solution (Official iTel images from itelsolar.com)
    { id:16, name:"itel Energy 500W Power Tank + 1kWh LiFePO4 All-in-One", model:"IESS-05K10N", category:"ess", price:72500, badge:"All-in-One", badgeClass:"best", warranty:"2 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-Energy-500W-Inverter-1kWh-LifePo4-Battery-All-in-One-Solar-Power-System-1.jpg", specs:["Output: 500W / 1kWh","Battery: LiFePO4 6000+ Cycles","Ports: AC, USB-C, USB-A"], featured:true },
    { id:17, name:"Itel Combo 3.6KW Hybrid + 8KWH Li-Battery", model:"IESS-3K680N", category:"ess", price:350000, badge:"Complete System", badgeClass:"premium", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/07/itel-3.6kW-All-in-One-Solar-Power-System-with-8kWh-Battery-Complete-Home-Energy-Storage-Solution-1.jpg", specs:["Inverter: 3.6kW Pure Sine","Battery: 8kWh LiFePO4","UPS Switchover: <16ms"], featured:true },
    { id:18, name:"itel Power Go 320Wh Portable Power Station", model:"IESS-320T", category:"ess", price:35000, badge:"Portable", badgeClass:"best", warranty:"2 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2026/01/itel-130W-Portable-Power-Station-%E2%80%93-320Wh-Smart-Backup-Power-Solution-IESS-320T.webp", specs:["Output: 130W / 320Wh","Battery: 100,000mAh LiFePO4","USB-C: 65W Fast Charge"], featured:true },

    // Batteries (Official iTel images from itelsolar.com)
    { id:11, name:"Itel 100Ah 12V Lithium Battery 1.28kWh", model:"IPB-12100", category:"battery", price:70000, badge:"", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2026/01/itel-Energy-1280Wh-12V-Lithium-Battery-LiFePO%E2%82%84-%E2%80%93-Smart-Solar-Storage-Solution.webp", specs:["Capacity: 1.28 kWh","Voltage: 12.8V","Type: LiFePO4 IP54"], featured:false },
    { id:12, name:"IPW-25100 Itel LiFePO4 Battery 25.6V 100Ah - 2.56kWh IP21", model:"IPW-25100", category:"battery", price:110000, badge:"Best Seller", badgeClass:"best", warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-2.56kWh-Lithium-Battery-Wall-Mounted-Backup-for-Homes-Shops-25.6V-LiFePO4-2-1.jpg", specs:["Capacity: 2.56 kWh","Voltage: 25.6V","Type: LiFePO4 Wall Mounted"], featured:true },
    { id:13, name:"IPL-51100 Itel LiFePO4 Battery 51.2V 100Ah - 5.12kWh IP20", model:"IPL-51100", category:"battery", price:250000, badge:"Popular", badgeClass:"", warranty:"7 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-5.12kWh-Lithium-Battery-%E2%80%93-Long-Backup-for-Homes-Clinics-Offices-48V-LiFePO4-2.jpg", specs:["Capacity: 5.12 kWh","Voltage: 51.2V","Type: LiFePO4 Stackable"], featured:true },
    { id:14, name:"Itel IPL-51280 51.2V 280Ah (14.5kWh) Lithium Battery", model:"IPL-51280", category:"battery", price:495000, badge:"", warranty:"10 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-14.3kWh-Silent-Power-Battery-%E2%80%93-Long-Backup-for-Big-Homes-Offices-48V-2.jpg", specs:["Capacity: 14.33 kWh","Voltage: 51.2V","Type: LiFePO4 Standing"], featured:false },
    { id:15, name:"Itel IPL-51314Y 51.2V 16kWh Lithium Battery", model:"IPL-51314Y", category:"battery", price:535000, badge:"Premium", badgeClass:"premium", warranty:"10 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-10240Wh-Lithium-Battery-Standing-48V-200Ah-10.24kWh-IPL-51200.webp", specs:["Capacity: 16 kWh","Voltage: 51.2V","Type: LiFePO4 Outdoor IP65"], featured:false }
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

// ==================== PRODUCT CARDS ====================
function createProductCard(product) {
    const badgeHTML = product.badge ? `<div class="product-badge ${product.badgeClass || ''}">${product.badge}</div>` : '';
    const topSpecs = product.specs.slice(0, 3);
    const specsHTML = topSpecs.map(s => `<li><strong>${s.split(':')[0]}:</strong>${s.split(':')[1]}</li>`).join('');
    const perWattHTML = product.perWatt ? `<span class="price-per-watt">${product.perWatt}</span>` : '';
    const warrantyHTML = product.warranty ? `<div class="warranty-badge">&#128737; ${product.warranty} Official Warranty</div>` : '';

    return `
        <div class="product-card" data-name="${product.name.toLowerCase()}" data-category="${product.category}">
            ${badgeHTML}
            <div class="product-img ${product.bgColor ? 'has-bg' : ''}" style="${product.bgColor ? 'background:' + product.bgColor : ''}" onclick="openZoom('${product.image}', '${product.name.replace(/'/g, "\\'")}')">
                <img src="${product.image}" alt="${product.name}" loading="lazy" style="${product.bgColor ? 'object-fit:contain;padding:15px;' : ''}">
                <div class="img-zoom-hint">Click to zoom</div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-model">${product.model}</p>
                ${warrantyHTML}
                <ul class="product-specs">${specsHTML}</ul>
                <div class="product-price">
                    <span class="price">Rs. ${product.price.toLocaleString()}</span>
                    ${product.category === 'panel' ? '<span class="price-unit"> / panel</span>' : ''}
                </div>
                ${perWattHTML}
                <div class="qty-row">
                    <button class="qty-btn" onclick="changeQtyBtn(this, -1)">-</button>
                    <input type="number" class="qty-input" data-pid="${product.id}" value="1" min="1" max="99">
                    <button class="qty-btn" onclick="changeQtyBtn(this, 1)">+</button>
                </div>
                <button class="btn-add-cart" onclick="addToCartBtn(this, ${product.id})">Add to Cart &#128722;</button>
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
    document.getElementById('page-' + page).classList.add('active');

    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navMap = { home:0, panels:1, inverters:2, batteries:3, ess:4, contact:5 };
    const links = document.querySelectorAll('.nav-links a');
    if (links[navMap[page]]) links[navMap[page]].classList.add('active');

    document.getElementById('navLinks').classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'checkout') renderCheckout();
}

// ==================== CHECKOUT ====================
function renderCheckout() {
    const container = document.getElementById('checkoutItems');
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
    document.getElementById('summaryDelivery').textContent = 'Contact for rates';
    document.getElementById('summaryTotal').textContent = 'Rs. ' + total.toLocaleString();
}

// Payment method - Meezan Bank only, always show transaction ID
document.getElementById('trxIdGroup').style.display = 'block';
document.getElementById('trxId').setAttribute('required', 'required');

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

    const paymentNames = { meezan:'Meezan Bank' };

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
    const BLOB_ID = '019edb05-e87f-7360-8c1e-b6e82e509b83';
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

document.getElementById('searchInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') searchProducts();
});

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
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

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

document.getElementById('zoomModal').addEventListener('click', function(e) {
    if (e.target === this || e.target === document.getElementById('zoomBody')) closeZoom();
});

document.addEventListener('keydown', function(e) {
    if (!document.getElementById('zoomModal').classList.contains('active')) return;
    if (e.key === 'Escape') closeZoom();
    if (e.key === '+' || e.key === '=') zoomIn();
    if (e.key === '-') zoomOut();
});

document.getElementById('zoomBody').addEventListener('wheel', function(e) {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
});

const zoomBody = document.getElementById('zoomBody');
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

// Touch support for mobile zoom
let touchStartDist = 0;
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
                        <button class="btn-share" onclick="shareWhatsApp(${p.id})">WhatsApp Share</button>
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
        return `${product.name}\n\nPrice: ${price}\n${specs}\nWarranty: ${product.warranty}\n\nOrder now at www.solarcart.com\nCall/WhatsApp: 0323-7927923\n\n${hashtags}`;
    } else if (platform === 'facebook') {
        return `${product.name}\n\nPrice: ${price}\n${specs}\nWarranty: ${product.warranty}\n\nOrder online: www.solarcart.com\nCall/WhatsApp: 0323-7927923\nDelivery across Pakistan!`;
    } else {
        return `*${product.name}*\n\nPrice: *${price}*\n${specs}\nWarranty: ${product.warranty}\n\nOrder now: www.solarcart.com\nWhatsApp: 0323-7927923`;
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

function shareWhatsApp(productId) {
    const caption = document.getElementById('caption-' + productId).textContent;
    window.open('https://wa.me/?text=' + encodeURIComponent(caption), '_blank');
}

// ==================== SOLAR ANIMATION ====================
(function() {
    const canvas = document.getElementById('solarCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, t = 0;

    function resize() {
        const hero = canvas.parentElement;
        w = canvas.width = hero.offsetWidth;
        h = canvas.height = hero.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const mob = () => w < 768;

    // Sun
    function drawSun(x, y, r) {
        // Outer glow
        const g1 = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
        g1.addColorStop(0, 'rgba(255,200,50,0.12)');
        g1.addColorStop(0.5, 'rgba(232,122,30,0.04)');
        g1.addColorStop(1, 'transparent');
        ctx.fillStyle = g1;
        ctx.beginPath(); ctx.arc(x, y, r * 3, 0, Math.PI * 2); ctx.fill();

        // Core
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, 'rgba(255,220,80,0.9)');
        g2.addColorStop(0.6, 'rgba(232,150,30,0.7)');
        g2.addColorStop(1, 'rgba(232,122,30,0.3)');
        ctx.fillStyle = g2;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();

        // Rays
        for (let i = 0; i < 12; i++) {
            const angle = (Math.PI * 2 / 12) * i + t * 0.3;
            const len = r * (1.8 + 0.5 * Math.sin(t * 2 + i));
            const grad = ctx.createLinearGradient(x, y, x + Math.cos(angle) * len, y + Math.sin(angle) * len);
            grad.addColorStop(0, 'rgba(255,200,50,0.3)');
            grad.addColorStop(1, 'transparent');
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x + Math.cos(angle) * r * 1.1, y + Math.sin(angle) * r * 1.1);
            ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
            ctx.stroke();
        }
    }

    // Solar panel shape
    function drawPanel(x, y, pw, ph, angle) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        // Panel frame
        ctx.fillStyle = 'rgba(20,40,80,0.7)';
        ctx.strokeStyle = 'rgba(100,150,200,0.4)';
        ctx.lineWidth = 1.5;
        ctx.fillRect(-pw/2, -ph/2, pw, ph);
        ctx.strokeRect(-pw/2, -ph/2, pw, ph);

        // Grid cells
        const cellsX = 4, cellsY = 6;
        const cw = pw / cellsX, ch = ph / cellsY;
        ctx.strokeStyle = 'rgba(80,130,180,0.3)';
        ctx.lineWidth = 0.5;
        for (let r = 1; r < cellsY; r++) {
            ctx.beginPath(); ctx.moveTo(-pw/2, -ph/2 + r * ch); ctx.lineTo(pw/2, -ph/2 + r * ch); ctx.stroke();
        }
        for (let c = 1; c < cellsX; c++) {
            ctx.beginPath(); ctx.moveTo(-pw/2 + c * cw, -ph/2); ctx.lineTo(-pw/2 + c * cw, ph/2); ctx.stroke();
        }

        // Reflection shine
        const shine = ctx.createLinearGradient(-pw/2, -ph/2, pw/2, ph/2);
        shine.addColorStop(0, `rgba(255,255,255,${0.03 + 0.03 * Math.sin(t * 1.5)})`);
        shine.addColorStop(0.5, 'transparent');
        shine.addColorStop(1, `rgba(100,180,255,${0.02 + 0.02 * Math.sin(t * 1.5 + 1)})`);
        ctx.fillStyle = shine;
        ctx.fillRect(-pw/2, -ph/2, pw, ph);

        ctx.restore();
    }

    // Inverter box
    function drawInverter(x, y, bw, bh) {
        ctx.save();
        ctx.translate(x, y);

        // Box
        ctx.fillStyle = 'rgba(30,50,80,0.7)';
        ctx.strokeStyle = 'rgba(100,150,200,0.4)';
        ctx.lineWidth = 1.5;
        const r = 6;
        ctx.beginPath();
        ctx.moveTo(-bw/2 + r, -bh/2);
        ctx.lineTo(bw/2 - r, -bh/2); ctx.quadraticCurveTo(bw/2, -bh/2, bw/2, -bh/2 + r);
        ctx.lineTo(bw/2, bh/2 - r); ctx.quadraticCurveTo(bw/2, bh/2, bw/2 - r, bh/2);
        ctx.lineTo(-bw/2 + r, bh/2); ctx.quadraticCurveTo(-bw/2, bh/2, -bw/2, bh/2 - r);
        ctx.lineTo(-bw/2, -bh/2 + r); ctx.quadraticCurveTo(-bw/2, -bh/2, -bw/2 + r, -bh/2);
        ctx.closePath();
        ctx.fill(); ctx.stroke();

        // Screen
        const sw = bw * 0.6, sh = bh * 0.3;
        ctx.fillStyle = `rgba(0,${Math.round(180 + 40 * Math.sin(t * 3))},100,0.15)`;
        ctx.fillRect(-sw/2, -bh/4, sw, sh);
        ctx.strokeStyle = 'rgba(0,255,100,0.3)';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(-sw/2, -bh/4, sw, sh);

        // LED dots
        const colors = ['rgba(0,255,100,0.8)', 'rgba(232,122,30,0.8)', `rgba(0,200,255,${0.4 + 0.4 * Math.sin(t * 4)})`];
        colors.forEach((c, i) => {
            ctx.fillStyle = c;
            ctx.beginPath(); ctx.arc(-bw/4 + i * (bw/4), bh/4, 3, 0, Math.PI * 2); ctx.fill();
        });

        ctx.restore();
    }

    // Battery
    function drawBattery(x, y, bw, bh) {
        ctx.save();
        ctx.translate(x, y);

        // Body
        ctx.fillStyle = 'rgba(30,50,80,0.7)';
        ctx.strokeStyle = 'rgba(100,150,200,0.4)';
        ctx.lineWidth = 1.5;
        ctx.fillRect(-bw/2, -bh/2, bw, bh);
        ctx.strokeRect(-bw/2, -bh/2, bw, bh);

        // Terminal
        ctx.fillStyle = 'rgba(100,150,200,0.5)';
        ctx.fillRect(-bw/6, -bh/2 - 6, bw/3, 6);

        // Charge level animated
        const charge = 0.5 + 0.4 * Math.sin(t * 0.8);
        const chargeH = (bh - 8) * charge;
        const cGrad = ctx.createLinearGradient(0, bh/2 - 4, 0, bh/2 - 4 - chargeH);
        cGrad.addColorStop(0, 'rgba(0,255,100,0.4)');
        cGrad.addColorStop(1, 'rgba(0,200,255,0.2)');
        ctx.fillStyle = cGrad;
        ctx.fillRect(-bw/2 + 4, bh/2 - 4 - chargeH, bw - 8, chargeH);

        // Percentage text
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.font = `bold ${Math.round(bw * 0.25)}px Inter`;
        ctx.textAlign = 'center';
        ctx.fillText(Math.round(charge * 100) + '%', 0, 4);

        ctx.restore();
    }

    // Energy flow particles
    let flowParticles = [];
    for (let i = 0; i < (mob() ? 15 : 30); i++) {
        flowParticles.push({ progress: Math.random(), path: Math.floor(Math.random() * 3), speed: 0.003 + Math.random() * 0.004 });
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        t += 0.016;

        const m = mob();
        const sunX = m ? w * 0.8 : w * 0.88;
        const sunY = m ? h * 0.08 : h * 0.1;
        const sunR = m ? 18 : 30;
        const panelX = m ? w * 0.2 : w * 0.15;
        const panelY = m ? h * 0.25 : h * 0.35;
        const panelW = m ? 55 : 90;
        const panelH = m ? 75 : 120;
        const invX = m ? w * 0.75 : w * 0.82;
        const invY = m ? h * 0.7 : h * 0.65;
        const invW = m ? 40 : 60;
        const invH = m ? 55 : 80;
        const batX = m ? w * 0.45 : w * 0.5;
        const batY = m ? h * 0.75 : h * 0.75;
        const batW = m ? 30 : 45;
        const batH = m ? 50 : 70;

        // Draw sun
        drawSun(sunX, sunY, sunR);

        // Sun rays hitting panel
        for (let i = 0; i < 5; i++) {
            const offset = (i - 2) * (m ? 8 : 15);
            const sx = sunX + offset * 0.5;
            const sy = sunY + Math.abs(offset) * 0.3;
            const grad = ctx.createLinearGradient(sx, sy, panelX + offset, panelY - panelH/2);
            grad.addColorStop(0, `rgba(255,200,50,${0.08 + 0.04 * Math.sin(t * 2 + i)})`);
            grad.addColorStop(1, 'transparent');
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 8]);
            ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(panelX + offset, panelY - panelH/2); ctx.stroke();
            ctx.setLineDash([]);
        }

        // Draw panel tilted
        drawPanel(panelX, panelY, panelW, panelH, -0.15 + 0.02 * Math.sin(t * 0.5));

        // Draw inverter
        drawInverter(invX, invY, invW, invH);

        // Draw battery
        drawBattery(batX, batY, batW, batH);

        // Energy flow paths: panel->inverter, inverter->battery, panel->battery
        const paths = [
            { from: { x: panelX + panelW/2, y: panelY }, to: { x: invX - invW/2, y: invY }, color: [232,180,30] },
            { from: { x: invX, y: invY + invH/2 }, to: { x: batX, y: batY - batH/2 }, color: [0,220,150] },
            { from: { x: panelX, y: panelY + panelH/2 }, to: { x: batX - batW/2, y: batY }, color: [50,180,255] }
        ];

        // Draw flow lines
        paths.forEach((p, idx) => {
            const mx = (p.from.x + p.to.x) / 2;
            const my = (p.from.y + p.to.y) / 2 - 20;
            ctx.strokeStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},0.1)`;
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 6]);
            ctx.beginPath(); ctx.moveTo(p.from.x, p.from.y); ctx.quadraticCurveTo(mx, my, p.to.x, p.to.y); ctx.stroke();
            ctx.setLineDash([]);
        });

        // Animated energy dots along paths
        flowParticles.forEach(fp => {
            fp.progress += fp.speed;
            if (fp.progress > 1) { fp.progress = 0; fp.path = Math.floor(Math.random() * 3); }
            const p = paths[fp.path];
            const mx = (p.from.x + p.to.x) / 2;
            const my = (p.from.y + p.to.y) / 2 - 20;
            const tt = fp.progress;
            const x = (1-tt)*(1-tt)*p.from.x + 2*(1-tt)*tt*mx + tt*tt*p.to.x;
            const y = (1-tt)*(1-tt)*p.from.y + 2*(1-tt)*tt*my + tt*tt*p.to.y;

            // Glow
            const glow = ctx.createRadialGradient(x, y, 0, x, y, 8);
            glow.addColorStop(0, `rgba(${p.color[0]},${p.color[1]},${p.color[2]},0.4)`);
            glow.addColorStop(1, 'transparent');
            ctx.fillStyle = glow;
            ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.fill();

            // Dot
            ctx.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},0.9)`;
            ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2); ctx.fill();
        });

        // Labels
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.font = `${m ? 9 : 11}px Inter`;
        ctx.textAlign = 'center';
        ctx.fillText('SOLAR PANEL', panelX, panelY + panelH/2 + (m ? 14 : 18));
        ctx.fillText('INVERTER', invX, invY + invH/2 + (m ? 14 : 18));
        ctx.fillText('BATTERY', batX, batY + batH/2 + (m ? 14 : 18));

        requestAnimationFrame(draw);
    }
    draw();
})();

// ==================== INIT ====================
renderProducts();
updateCartUI();
