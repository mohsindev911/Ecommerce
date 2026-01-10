const express=require('express');
const app=express();
const path=require('path');
const db=require('./Config/mongoose-connection')
const userRouter=require('./Routes/userRouter')
const productRouter=require('./Routes/productRouter')
const ownerRouter=require('./Routes/ownerRouter')
const indexRouter=require('./Routes/index')
require('dotenv').config()
const cookieParser=require('cookie-parser')
const flash=require('connect-flash')
const expressSession=require('express-session')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.use(cookieParser())
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret:process.env.EXPRESS_SESSION_SECRET
}))
app.use(flash())




app.use('/users',userRouter)
app.use('/products',productRouter)
app.use('/owner',ownerRouter)
app.use('/',indexRouter)

app.listen(3000)

