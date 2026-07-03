import { list, put } from '@vercel/blob';

const ORDERS_PATHNAME = 'orders-data.json';

async function readOrders() {
  const { blobs } = await list({ prefix: ORDERS_PATHNAME, limit: 1 });
  const existing = blobs.find(b => b.pathname === ORDERS_PATHNAME);
  if (!existing) return { orders: [] };
  const r = await fetch(existing.url);
  if (!r.ok) return { orders: [] };
  return r.json();
}

async function writeOrders(data) {
  await put(ORDERS_PATHNAME, JSON.stringify(data), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json'
  });
}

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const data = await readOrders();
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json(data);
      return;
    }

    if (req.method === 'POST') {
      const order = req.body;
      if (!order || !order.orderId) { res.status(400).json({ error: 'invalid order' }); return; }
      const data = await readOrders();
      order.timestamp = order.timestamp || Date.now();
      order.status = order.status || 'new';
      data.orders.unshift(order);
      await writeOrders(data);
      res.status(200).json({ status: 'ok' });
      return;
    }

    if (req.method === 'PATCH') {
      const { orderId, status, fields } = req.body || {};
      if (!orderId || (!status && !fields)) { res.status(400).json({ error: 'orderId and status or fields required' }); return; }
      const data = await readOrders();
      const order = data.orders.find(o => o.orderId === orderId);
      if (!order) { res.status(404).json({ error: 'order not found' }); return; }
      if (status) order.status = status;
      if (fields) Object.assign(order, fields);
      await writeOrders(data);
      res.status(200).json({ status: 'ok' });
      return;
    }

    res.status(405).json({ error: 'method not allowed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
