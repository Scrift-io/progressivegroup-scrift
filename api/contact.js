export async function contactHandler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBD8iz77guSihBh90YIUaD3sghp2fQhwaEIupf6LD16LCnwfh5KKKtHYz7sWARQRU9/exec';
  
    try {
      const googleResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });
  
      const data = await googleResponse.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ result: 'error', error: error.message });
    }
  }
  