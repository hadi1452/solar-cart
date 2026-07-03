import { get, put } from '@vercel/blob';

const PATHNAME = 'store-config.json';
const DEFAULTS = { coupons: [], inventory: {} };

async function readConfig() {
  const result = await get(PATHNAME, { access: 'private' });
  if (!result || !result.stream) return { ...DEFAULTS };
  const data = await new Response(result.stream).json();
  return { ...DEFAULTS, ...data };
}

async function writeConfig(data) {
  await put(PATHNAME, JSON.stringify(data), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 60
  });
}

function isAdmin(req) {
  const secret = process.env.ADMIN_API_SECRET;
  return !!secret && req.headers['x-admin-token'] === secret;
}

function validCoupons(coupons) {
  return Array.isArray(coupons) && coupons.every(c =>
    c && typeof c.code === 'string' && c.code.length > 0 &&
    Number.isFinite(c.amount) && c.amount > 0 &&
    (c.type !== 'percent' || c.amount <= 100)
  );
}

export default async function handler(req, res) {
  try {
    // GET stays open -- customers need to see current stock/coupons while shopping.
    // PUT (admin overwriting coupons/inventory) requires the admin token.
    if (req.method === 'GET') {
      const data = await readConfig();
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json(data);
      return;
    }

    if (req.method === 'PUT') {
      if (!isAdmin(req)) { res.status(401).json({ error: 'unauthorized' }); return; }
      const body = req.body || {};
      if (body.coupons !== undefined && !validCoupons(body.coupons)) {
        res.status(400).json({ error: 'invalid coupons payload' });
        return;
      }
      const data = await readConfig();
      if (body.coupons !== undefined) data.coupons = body.coupons;
      if (body.inventory !== undefined) data.inventory = body.inventory;
      await writeConfig(data);
      res.status(200).json({ status: 'ok' });
      return;
    }

    res.status(405).json({ error: 'method not allowed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
