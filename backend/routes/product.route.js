import express from 'express';
import { createProduct, getAllProducts, getFeaturedProducts, toggleFeaturedProduct, deleteProduct, getRecommendedProducts, getProductsByCategory } from '../controllers/product.controller.js';
import { adminRoute, protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/featured', getFeaturedProducts);
router.get('/recommendations', getRecommendedProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/', protectRoute, adminRoute, getAllProducts);
router.post('/', protectRoute, adminRoute, createProduct);
router.delete('/:id', protectRoute, adminRoute, deleteProduct);
router.patch('/:id', protectRoute, adminRoute, toggleFeaturedProduct);

export default router;