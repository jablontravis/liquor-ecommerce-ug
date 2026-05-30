import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'API is running', timestamp: new Date() });
});

// Products Route (Placeholder)
app.get('/api/products', (req: Request, res: Response) => {
  res.json({
    message: 'Products endpoint',
    products: [
      { id: 1, name: 'Johnnie Walker Red Label', category: 'Whisky', price: 45000, image: '' },
      { id: 2, name: 'Smirnoff Vodka', category: 'Vodka', price: 35000, image: '' },
      { id: 3, name: 'Tusker Lager', category: 'Beer', price: 3000, image: '' },
    ],
  });
});

// Error Handling Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
