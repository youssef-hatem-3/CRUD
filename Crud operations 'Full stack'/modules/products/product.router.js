import {addProduct , getAllproducts, updateProduct , deleteProduct , searchProduct , getproduct} from './controller/product.js'
import {Router} from 'express'
const router = Router() ;
router.put('/updateProduct', updateProduct)
router.get('/getAllproducts', getAllproducts )
router.get('/getproduct/:id', getproduct )
router.post('/addProduct' , addProduct);
router.delete('/delete', deleteProduct )
router.get('/user/search', searchProduct)

export default router ;