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

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const data = await readConfig();
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json(data);
      return;
    }

    if (req.method === 'PUT') {
      const body = req.body || {};
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
