import { get, put, list } from '@vercel/blob';

const ORDERS_PREFIX = 'orders/';

function pathFor(orderId) {
  return ORDERS_PREFIX + encodeURIComponent(orderId) + '.json';
}

async function readOrder(orderId) {
  const result = await get(pathFor(orderId), { access: 'private' });
  if (!result || !result.stream) return null;
  return new Response(result.stream).json();
}

async function writeOrder(order) {
  await put(pathFor(order.orderId), JSON.stringify(order), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json'
  });
}

async function readAllOrders() {
  const { blobs } = await list({ prefix: ORDERS_PREFIX });
  const orders = await Promise.all(blobs.map(async (b) => {
    const r = await get(b.pathname, { access: 'private' });
    if (!r || !r.stream) return null;
    return new Response(r.stream).json();
  }));
  return orders.filter(Boolean).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
}

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const orders = await readAllOrders();
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json({ orders });
      return;
    }

    if (req.method === 'POST') {
      const order = req.body;
      if (!order || !order.orderId) { res.status(400).json({ error: 'invalid order' }); return; }
      order.timestamp = order.timestamp || Date.now();
      order.status = order.status || 'new';
      await writeOrder(order);
      res.status(200).json({ status: 'ok' });
      return;
    }

    if (req.method === 'PATCH') {
      const { orderId, status, fields } = req.body || {};
      if (!orderId || (!status && !fields)) { res.status(400).json({ error: 'orderId and status or fields required' }); return; }
      const order = await readOrder(orderId);
      if (!order) { res.status(404).json({ error: 'order not found' }); return; }
      if (status) order.status = status;
      if (fields) Object.assign(order, fields);
      await writeOrder(order);
      res.status(200).json({ status: 'ok' });
      return;
    }

    res.status(405).json({ error: 'method not allowed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
