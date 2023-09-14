import express from 'express'
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js'
import formidable from 'express-formidable'
import { createProductController, getProductController, singleProductController, productPhotoController, deleteProductController, updateProductController, productFilterController, productCountController, productListController, searchController, relatedProductController, productCategoryController, braintreeTokenController, braintreePaymentsController} from '../controllers/productController.js'

const router = express.Router()

router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController)
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController)
router.get('/get-product',  getProductController)
router.get('/single-product/:slug',  singleProductController)
router.get('/product-photo/:pid',  productPhotoController)
router.delete('/delete-product/:pid', requireSignIn, isAdmin,  deleteProductController)
router.post('/product-filter',  productFilterController)
router.get('/product-count',  productCountController)
router.get('/product-list/:page',  productListController)
router.get('/search/:keyword',  searchController)
router.get('/related-product/:pid/:cid',  relatedProductController)
router.get('/product-category/:slug',  productCategoryController)
router.get("/braintree/token", braintreeTokenController);
router.post("/braintree/payments", requireSignIn, braintreePaymentsController);

export default router