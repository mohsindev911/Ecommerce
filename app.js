const express=require('express');
const app=express();
const path=require('path');
const db=require('./Config/mongoose-connection')
const userRouter=require('./Routes/userRouter')
const productRouter=require('./Routes/productRouter')
const adminRouter=require('./Routes/adminRouter')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')


app.use('/users',userRouter)
app.use('/products',productRouter)
app.use('/admin',adminRouter)

app.listen(300)

