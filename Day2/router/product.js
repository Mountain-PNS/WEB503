import {Router} from 'express'
import { deleteProduct, getAllProduct, getProductId } from '../controller/Product'

const routerProduct = Router()
routerProduct.get('/products', getAllProduct)
routerProduct.get('/products/:id', getProductId)
routerProduct.delete('/products/:id', deleteProduct)
export default routerProduct