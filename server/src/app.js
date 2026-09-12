import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'ausorum-api' });
});

app.get('/api/services', (_req, res) => {
  res.json({
    services: [
      'Web Development',
      'AI & Automation',
      'Product Engineering',
      'Custom Software'
    ]
  });
});

app.get('/api/projects', (_req, res) => {
  res.json({ projects: [] });
});

app.post('/api/contact', (req, res) => {
  const { name, email, company = '', message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' });
  }

  console.log('New Ausorum enquiry:', { name, email, company, message });
  return res.status(201).json({ success: true, message: 'Enquiry received.' });
});

app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Ausorum API running on http://localhost:${PORT}`);
});
