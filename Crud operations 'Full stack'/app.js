import cors from 'cors'
import express from 'express'
import userRouter from './modules/users/user.router.js'
import productRouter from './modules/products/product.router.js'
const app = express();
app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(productRouter)

app.listen(3000,()=>{
    console.log('running...................')
})
