import {Router} from 'express'
import { addProduct, deleteProduct, getAllProduct, getProductId, updateProduct } from '../controller/Product'

const routerProduct = Router()
routerProduct.get('/', getAllProduct)
routerProduct.get('/:id', getProductId)
routerProduct.delete('/:id', deleteProduct)
routerProduct.post('/', addProduct)
routerProduct.put('/:id', updateProduct)
export default routerProduct