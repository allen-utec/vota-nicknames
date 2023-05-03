export function corsMiddleware(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With'
  );
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET, PUT');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
}
