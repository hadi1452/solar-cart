const products = [
  { id:1, name:"LONGi Hi-MO X10 645W Monofacial Panel", price:32250, warranty:"12 Yr Product / 30 Yr Performance", image:"https://sunsolar.pk/wp-content/uploads/2025/05/Design-ohne-Titel-35-3.png", specs:["Power: 645W","Type: N-Type HPBC 2.0","Efficiency: 24.1%"] },
  { id:2, name:"Longi 610W Hi-MO 7 Bifacial Series Solar Panel", price:27450, warranty:"12 Yr Product / 30 Yr Performance", image:"https://cdn11.bigcommerce.com/s-o8a7xpro4o/images/stencil/760x760/products/987/4078/1__55057.1705069390.png?c=1", specs:["Power: 610W","Type: N-Type HPDC Bifacial","Efficiency: 22.8%"] },
  { id:3, name:"Jinko 585W N-Type Bifacial Solar Panel", price:29250, warranty:"12 Yr Product / 30 Yr Performance", image:"https://www.sunevosolar.com/uploadfile/202402/26/f0645231480db88bfff1bdee41323bf7_medium.jpg", specs:["Power: 585W","Type: N-Type Bifacial","Efficiency: 22.6%"] },
  { id:4, name:"iTel 3kW Pro IP54 Hybrid Solar Inverter", price:80000, warranty:"3 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-3kW-Hybrid-Solar-Inverter-%E2%80%93-24V-Pure-Sine-Wave-Powers-ACs-TVs-Fridge-1.jpg", specs:["Capacity: 3kW / 4.5kVA","Type: Hybrid IP54","Voltage: 24V"] },
  { id:5, name:"IPV-4K24U Pro iTel Inverter 4kW 24V SP Hybrid", price:113000, warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/07/itel-4kW-Hybrid-Solar-Inverter-%E2%80%93-Powers-ACs-Fridges-TVs-24V-IP54-Rated-1.jpg", specs:["Capacity: 4kW","Type: Hybrid IP54","MPPT: Dual + WiFi"] },
  { id:6, name:"iTel 5kW Hybrid Solar Inverter IPV-5K48U", price:148000, warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-5kW-Hybrid-Solar-Inverter-%E2%80%93-48V-Pure-Sine-Wave-Powers-ACs-TVs-Fridge-1.jpg", specs:["Capacity: 5kW","Type: Hybrid IP54","Voltage: 48V"] },
  { id:7, name:"IHY-6KL1A iTel 6kW IP66 Hybrid Solar Inverter", price:225000, warranty:"5 Years", image:"https://sunsolar.pk/wp-content/uploads/2025/08/Untitled-design-2025-08-02T131826.670.png", specs:["Capacity: 6kW","Type: Hybrid IP66","PV Input: 12kW + WiFi"] },
  { id:8, name:"iTel 8kW (IP54) Hybrid Solar Inverter", price:213000, warranty:"5 Years", image:"https://hajverysolar.com/wp-content/uploads/2026/02/Itel-8KW-IP54-Single-Phase-Hybrid-Inverter.webp", specs:["Capacity: 8kW / 8kVA","Type: Hybrid IP54","PV Input: 16kW Max"] },
  { id:9, name:"iTel 10kW 3-Phase Hybrid Solar Inverter", price:310000, warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-10kW-3-Phase-Hybrid-Solar-Inverter-IP66-Commercial-Solar-Power-1.jpg", specs:["Capacity: 10kW","Type: 3-Phase IP66","PV Input: 20kW"] },
  { id:10, name:"IP66-Rated 6.6kW Hybrid iTel Inverter", price:210000, warranty:"5 Years", image:"https://solar-cart-apvs.vercel.app/images/itel-6k6-v2.jpg", specs:["Capacity: 6.6kW","Type: Hybrid IP66","AI SmartGo + WiFi"] },
  { id:11, name:"iTel 100Ah 12V Lithium Battery 1.28kWh", price:70000, warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2026/01/itel-Energy-1280Wh-12V-Lithium-Battery-LiFePO%E2%82%84-%E2%80%93-Smart-Solar-Storage-Solution.webp", specs:["Capacity: 1.28 kWh","Voltage: 12.8V","Type: LiFePO4 IP54"] },
  { id:12, name:"iTel 200Ah 12V Lithium Battery 2.56kWh", price:130000, warranty:"5 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2026/01/itel-Energy-1280Wh-12V-Lithium-Battery-LiFePO%E2%82%84-%E2%80%93-Smart-Solar-Storage-Solution.webp", specs:["Capacity: 2.56 kWh","Voltage: 12.8V","Type: LiFePO4"] },
  { id:13, name:"iTel IPL-51200 51.2V 200Ah (10.24kWh) Lithium Battery", price:380000, warranty:"10 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-10240Wh-Lithium-Battery-Standing-48V-200Ah-10.24kWh-IPL-51200.webp", specs:["Capacity: 10.24 kWh","Voltage: 51.2V","Type: LiFePO4 Standing"] },
  { id:14, name:"iTel IPL-51280 51.2V 280Ah (14.5kWh) Lithium Battery", price:495000, warranty:"10 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-14.3kWh-Silent-Power-Battery-%E2%80%93-Long-Backup-for-Big-Homes-Offices-48V-2.jpg", specs:["Capacity: 14.33 kWh","Voltage: 51.2V","Type: LiFePO4 Standing"] },
  { id:15, name:"iTel IPL-51314Y 51.2V 16kWh Lithium Battery", price:535000, warranty:"10 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-10240Wh-Lithium-Battery-Standing-48V-200Ah-10.24kWh-IPL-51200.webp", specs:["Capacity: 16 kWh","Voltage: 51.2V","Type: LiFePO4 Outdoor IP65"] },
  { id:16, name:"iTel IESS-1K All-in-One 1kW ESS Solar System", price:130000, warranty:"2 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-1kW-All-in-One-ESS-Solar-Power-System-Portable-Plug-and-Play-Backup-1.jpg", specs:["Output: 1kW / 1kVA","Battery: 1.28kWh LiFePO4","PV Input: 400W Max"] },
  { id:17, name:"iTel IESS-2K All-in-One 2kW ESS Solar System", price:250000, warranty:"2 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2025/04/itel-2kW-All-in-One-ESS-Solar-Power-System-with-LiFePO4-Battery-Plug-and-Play-1.jpg", specs:["Output: 2kW / 2kVA","Battery: 2.56kWh LiFePO4","PV Input: 800W Max"] },
  { id:18, name:"iTel Power Go 320Wh Portable Power Station", price:35000, warranty:"2 Years", image:"https://i0.wp.com/itelsolar.com/wp-content/uploads/2026/01/itel-130W-Portable-Power-Station-%E2%80%93-320Wh-Smart-Backup-Power-Solution-IESS-320T.webp", specs:["Output: 130W / 320Wh","Battery: 100,000mAh LiFePO4","USB-C: 65W Fast Charge"] }
];

export default function handler(req, res) {
  const id = parseInt(req.query.id);
  const product = products.find(p => p.id === id);
  const siteUrl = 'https://solar-cart-apvs.vercel.app';

  if (!product) {
    res.redirect(siteUrl);
    return;
  }

  const title = product.name + ' - Rs. ' + product.price.toLocaleString() + ' | Solar Cart';
  const description = product.specs.join(' | ') + ' | Warranty: ' + product.warranty + ' | Delivery In Karachi | Call/WhatsApp: 0323-7927923';

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <meta property="og:type" content="product">
  <meta property="og:site_name" content="Solar Cart">
  <meta property="og:url" content="${siteUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${product.image}">
  <meta property="og:image:width" content="800">
  <meta property="og:image:height" content="600">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${product.image}">
  <meta http-equiv="refresh" content="0;url=${siteUrl}">
</head>
<body>
  <script>window.location.href = '${siteUrl}';</script>
</body>
</html>`);
}
