import express, { Application } from 'express';
import cors from 'cors';
import productsRoutes from './src/routes/products.routes';

const app: Application = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

// Enable CORS for all origins (configure as needed for production)
// The methods list reflects that the Syncfusion DataManager uses POST
// for all read and CRUD operations when paired with UrlAdaptor.
app.use(cors({
  origin: '*',
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Mount product routes
app.use('/api/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Products endpoint: http://localhost:${PORT}/api/products`);
});

export default app;