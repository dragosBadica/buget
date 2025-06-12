// Mock API endpoint for development - Dragoș Bădică Landing Page
// In production, replace this with your actual backend API

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, gdpr } = req.body;

    // Basic validation
    if (!name || !email || !phone || !gdpr) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    // Simulate saving to database
    console.log('New lead for Dragoș Bădică:', {
      name,
      email,
      phone,
      gdpr,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      source: 'dragos-badica-landing-page'
    });

    // Return success with download URL
    res.status(200).json({
      success: true,
      downloadUrl: '/budget-template.xlsx',
      message: 'Thank you! Your download is ready from Dragoș Bădică.'
    });

  } catch (error) {
    console.error('Error processing lead:', error);
    res.status(500).json({ 
      error: 'Internal server error' 
    });
  }
}