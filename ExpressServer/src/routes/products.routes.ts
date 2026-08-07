import { Router } from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct} from '../controllers/products.controller';

const router = Router();

router.post('/', (req, res) => {
    return getProducts(req, res);
});
router.post('/create', (req, res) => { return createProduct(req, res); });
router.post('/update', (req, res) => { return updateProduct(req, res); });
router.post('/remove', (req, res) => { return deleteProduct(req, res); });

export default router;
