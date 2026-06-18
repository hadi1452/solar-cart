// ==================== PRODUCT DATA ====================
const products = [
    // Solar Panels (Official iTel images from itelsolar.com)
    { id:1, name:"iTel 410W N-Type Mono Solar Panel", model:"108 N-Type Mono Cells", category:"panel", price:14350, badge:"", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-410W-Monocrystalline-Solar-Panel-%E2%80%93-Rooftop-Solar-for-Homes-Shops-Offices-High-Efficiency-IP68-Rated-2.jpg", specs:["Power: 410W","Type: N-Type Mono","Efficiency: 20.97%","Warranty: 12 Yr / 25 Yr"], perWatt:"~Rs. 35/watt", featured:false },
    { id:2, name:"iTel 550W N-Type Mono Solar Panel", model:"144 N-Type Mono Cells", category:"panel", price:19250, badge:"Best Seller", badgeClass:"best", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/iTel-550W-Solar-Panel-21.29-module-efficiency-with-144-N-Type-Mono-cells-11.jpg", specs:["Power: 550W","Type: N-Type Mono","Efficiency: 21.29%","Warranty: 12 Yr / 25 Yr"], perWatt:"~Rs. 35/watt", featured:true },
    { id:3, name:"iTel 590W N-Type Bifacial Solar Panel", model:"N-Type Bifacial Cells", category:"panel", price:23600, badge:"Premium", badgeClass:"premium", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/iTel-550W-Solar-Panel-21.29-module-efficiency-with-144-N-Type-Mono-cells-1-3.jpg", specs:["Power: 590W","Type: N-Type Bifacial","Efficiency: 21.29%","Warranty: 15 Yr / 30 Yr"], perWatt:"~Rs. 40/watt", featured:true },

    // Inverters (Official iTel images from itelsolar.com/product-category/hybrid-inverter/)
    { id:4, name:"iTel 3.6kW Hybrid Inverter", model:"IPV-3K624S", category:"inverter", price:80000, badge:"", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-3.6kVA-Hybrid-Solar-Inverter-Powers-TVs-Fridges-1HP-ACs-24V-IP31-Rated-2.jpg", specs:["Capacity: 3.6kW / 4.5kVA","Type: Hybrid IP31","Voltage: 24V","MPPT: Built-in","Warranty: 5 Years"], featured:false },
    { id:5, name:"iTel 4kW Pro Hybrid Inverter", model:"IPV-4K24UPRO", category:"inverter", price:113000, badge:"Popular", badgeClass:"", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/07/itel-4kW-Hybrid-Solar-Inverter-%E2%80%93-Powers-ACs-Fridges-TVs-24V-IP54-Rated-1.jpg", specs:["Capacity: 4kW","Type: Hybrid IP54","MPPT: Dual","Display: LCD + WiFi","Warranty: 5 Years"], featured:true },
    { id:6, name:"iTel 6kW Pro Hybrid Inverter", model:"IPV-6K48UPRO", category:"inverter", price:145000, badge:"Best Seller", badgeClass:"best", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/07/itel-6kW-Hybrid-Solar-Inverter-%E2%80%93-Dual-AC-Output-for-Homes-Clinics-48V-IP54-Rated-2.jpg", specs:["Capacity: 6kW","Type: Hybrid IP54","MPPT: Dual","Display: LCD + WiFi","Warranty: 5 Years"], featured:true },
    { id:7, name:"iTel 6kW IP54 Hybrid Inverter", model:"IPV-6K48U", category:"inverter", price:208000, badge:"", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/07/itel-6kW-Hybrid-Solar-Inverter-%E2%80%93-Dual-AC-Output-for-Homes-Clinics-48V-IP54-Rated-3.jpg", specs:["Capacity: 6kW","Type: Hybrid IP54","MPPT: Dual","Dual AC Output: Yes","Warranty: 5 Years"], featured:false },
    { id:8, name:"iTel 8kW IP56 Hybrid Inverter", model:"IPV-8K48T", category:"inverter", price:213000, badge:"", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/10/8kw-inverter-8k48T-dual-output-8kva.webp", specs:["Capacity: 8kW / 8kVA","Type: Hybrid IP56","MPPT: 16kW PV Input","Dual Output: Yes","Warranty: 5 Years"], featured:false },
    { id:9, name:"iTel 8kW IP66 3-Phase Inverter", model:"IHY-8KL3", category:"inverter", price:450000, badge:"Premium", badgeClass:"premium", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-8kW-3-Phase-Hybrid-Solar-Inverter-%E2%80%93-Commercial-Power-for-Offices-Estates-IP66-2.jpg", specs:["Capacity: 8kW","Type: 3-Phase Hybrid","Protection: IP66","MPPT: Triple","Warranty: 7 Years"], featured:false },
    { id:10, name:"iTel 12kW 48V Hybrid Inverter", model:"IPV-12K48U", category:"inverter", price:525000, badge:"Heavy Duty", badgeClass:"premium", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-12kW-Hybrid-Solar-Inverter-%E2%80%93-Heavy-Duty-Backup-for-Estates-Clinics-Offices-48V-Dual-MPPT-2.jpg", specs:["Capacity: 12kW","Type: Hybrid IP54","Voltage: 48V","MPPT: Dual + WiFi","Warranty: 7 Years"], featured:false },

    // Batteries (Official iTel images from itelsolar.com/product-category/lithium-battery/)
    { id:11, name:"iTel 12.8V 100Ah Lithium Battery", model:"IPB-12100", category:"battery", price:68000, badge:"", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2026/01/itel-Energy-1280Wh-12V-Lithium-Battery-LiFePO%E2%82%84-%E2%80%93-Smart-Solar-Storage-Solution.webp", specs:["Capacity: 1.28 kWh","Voltage: 12.8V","Type: LiFePO4","Cycles: 6000+","Warranty: 5 Years"], featured:false },
    { id:12, name:"iTel 25.6V 100Ah Lithium Battery", model:"IPW-25100", category:"battery", price:110000, badge:"Best Seller", badgeClass:"best", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-2.56kWh-Lithium-Battery-Wall-Mounted-Backup-for-Homes-Shops-25.6V-LiFePO4-2-1.jpg", specs:["Capacity: 2.56 kWh","Voltage: 25.6V","Type: LiFePO4 Wall Mounted","Cycles: 6000+","Warranty: 5 Years"], featured:true },
    { id:13, name:"iTel 51.2V 100Ah Lithium Battery", model:"IPL-51100", category:"battery", price:203000, badge:"Popular", badgeClass:"", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-5.12kWh-Lithium-Battery-%E2%80%93-Long-Backup-for-Homes-Clinics-Offices-48V-LiFePO4-2.jpg", specs:["Capacity: 5.12 kWh","Voltage: 51.2V","Type: LiFePO4 Stackable","Cycles: 6000+","Warranty: 7 Years"], featured:true },
    { id:14, name:"iTel 24V 200Ah Lithium Battery", model:"IPL-25200X", category:"battery", price:245000, badge:"", bgColor:"#e8f4f8", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-5120Wh-Lithium-Battery-Wall-Mounted-48V-100Ah-5.12kWh-IPW-51100.webp", specs:["Capacity: 5.12 kWh","Voltage: 24V","Type: LiFePO4 Wall Mounted","Cycles: 6000+","Warranty: 7 Years"], featured:false },
    { id:15, name:"iTel 48V 200Ah Lithium Battery", model:"IPL-51200X", category:"battery", price:495000, badge:"", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-10.24kWh-Lithium-Battery-%E2%80%93-Long-Backup-for-Homes-Clinics-Offices-LiFePO4-48V-2.jpg", specs:["Capacity: 10.24 kWh","Voltage: 48V","Type: LiFePO4 Standing","Cycles: 6000+","Warranty: 10 Years"], featured:false },
    { id:16, name:"iTel 48V 280Ah Lithium Battery", model:"IPL-51280", category:"battery", price:535000, badge:"", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-14.3kWh-Silent-Power-Battery-%E2%80%93-Long-Backup-for-Big-Homes-Offices-48V-2.jpg", specs:["Capacity: 14.33 kWh","Voltage: 48V","Type: LiFePO4 Standing","Cycles: 6000+","Warranty: 10 Years"], featured:false },
    { id:17, name:"iTel 48V 314Ah Lithium Battery", model:"IPL-51314Y", category:"battery", price:630000, badge:"Premium", badgeClass:"premium", bgColor:"#f0e6f6", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-10240Wh-Lithium-Battery-Standing-48V-200Ah-10.24kWh-IPL-51200.webp", specs:["Capacity: 16 kWh","Voltage: 48V","Type: LiFePO4 Outdoor IP65","Cycles: 6000+","Warranty: 10 Years"], featured:false },
    { id:18, name:"iTel Power Tank 500W AIO", model:"IESS-05K10N", category:"battery", price:72500, badge:"New", badgeClass:"best", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-Energy-500W-Inverter-1kWh-LifePo4-Battery-All-in-One-Solar-Power-System-1.jpg", specs:["Output: 500W","Battery: 1000Wh","Ports: AC, USB-C, USB-A","Charging: Solar/AC/Car","Warranty: 2 Years"], featured:true }
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
    const specsHTML = product.specs.map(s => `<li><strong>${s.split(':')[0]}:</strong>${s.split(':')[1]}</li>`).join('');
    const perWattHTML = product.perWatt ? `<span class="price-per-watt">${product.perWatt}</span>` : '';

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
                <ul class="product-specs">${specsHTML}</ul>
                <div class="product-price">
                    <span class="price">Rs. ${product.price.toLocaleString()}</span>
                    ${product.category === 'panel' ? '<span class="price-unit"> / panel</span>' : ''}
                </div>
                ${perWattHTML}
                <div class="qty-row">
                    <button class="qty-btn" onclick="changeQty(${product.id}, -1)">-</button>
                    <input type="number" class="qty-input" id="qty-${product.id}" value="1" min="1" max="99">
                    <button class="qty-btn" onclick="changeQty(${product.id}, 1)">+</button>
                </div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart &#128722;</button>
            </div>
        </div>
    `;
}

function changeQty(id, change) {
    const input = document.getElementById('qty-' + id);
    let val = parseInt(input.value) + change;
    if (val < 1) val = 1;
    if (val > 99) val = 99;
    input.value = val;
}

// ==================== RENDER PAGES ====================
function renderProducts() {
    const featured = document.getElementById('featuredProducts');
    const panels = document.getElementById('panelProducts');
    const inverters = document.getElementById('inverterProducts');
    const batteries = document.getElementById('batteryProducts');

    if (featured) featured.innerHTML = products.filter(p => p.featured).map(createProductCard).join('');
    if (panels) panels.innerHTML = products.filter(p => p.category === 'panel').map(createProductCard).join('');
    if (inverters) inverters.innerHTML = products.filter(p => p.category === 'inverter').map(createProductCard).join('');
    if (batteries) batteries.innerHTML = products.filter(p => p.category === 'battery').map(createProductCard).join('');
}

// ==================== PAGE NAVIGATION ====================
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');

    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navMap = { home:0, panels:1, inverters:2, batteries:3, contact:4 };
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
    const delivery = total >= 50000 ? 0 : 2000;
    document.getElementById('summarySubtotal').textContent = 'Rs. ' + total.toLocaleString();
    document.getElementById('summaryDelivery').textContent = delivery === 0 ? 'Free' : 'Rs. ' + delivery.toLocaleString();
    document.getElementById('summaryTotal').textContent = 'Rs. ' + (total + delivery).toLocaleString();
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
    const delivery = total >= 50000 ? 0 : 2000;

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
    msg += `*Delivery:* ${delivery === 0 ? 'Free' : 'Rs.' + delivery.toLocaleString()}%0A`;
    msg += `*Total:* Rs.${(total + delivery).toLocaleString()}%0A`;
    msg += `*Payment:* ${paymentNames[payment]}`;

    // Show success
    document.getElementById('orderIdDisplay').textContent = 'Order ID: ' + orderId;
    document.getElementById('successDetails').innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Payment:</strong> ${paymentNames[payment]}</p>
        <p><strong>Total:</strong> Rs. ${(total + delivery).toLocaleString()}</p>
    `;

    // Clear cart
    cart = [];
    saveCart();
    document.getElementById('checkoutForm').reset();

    showPage('success');

    // Open WhatsApp with order details
    window.open('https://wa.me/92300XXXXXXX?text=' + msg, '_blank');
}

// ==================== SEARCH ====================
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!query) {
        showPage('home');
        return;
    }

    const results = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.model.toLowerCase().includes(query) ||
        p.category.includes(query)
    );

    const featured = document.getElementById('featuredProducts');
    if (results.length > 0) {
        featured.innerHTML = results.map(createProductCard).join('');
    } else {
        featured.innerHTML = '<p style="text-align:center;color:var(--gray-500);grid-column:1/-1;padding:40px;">No products found for "' + query + '"</p>';
    }
    showPage('home');
    document.querySelector('.featured .section-title').innerHTML = 'Search Results for "<span class="highlight">' + query + '</span>"';
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

// ==================== INIT ====================
renderProducts();
updateCartUI();
