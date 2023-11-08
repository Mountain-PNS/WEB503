import express from 'express'
import routerHome from './router/home.js'
import routerProduct from './router/product.js'
const app = express()
const port = 8000

app.use(express.json())

app.use(routerHome)
app.use(routerProduct)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// app.post('/products/:slug',(req,res)=>{
//     const {params,query,body} = req;
//     console.log("param",params)
//     console.log("query",query)
//     console.log("body",body)
//     res.send('Add new product')
// })
