export const config = { runtime: 'edge' };

export default async function handler(req) {
  const url = new URL(req.url);
  url.hostname = '://groq.com';
  url.protocol = 'https:';
  url.port = '';

  const headers = new Headers(req.headers);
  headers.set('Host', '://groq.com');

  return fetch(url.toString(), {
    method: req.method,
    headers,
    body: req.body,
  });
}
