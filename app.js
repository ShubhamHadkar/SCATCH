const express = require('express');
const app = express();
const db = require("./config/mongoose-connection")
// const userModel = require('./models/user-');
// const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const path = require('path');
// const multer = require('multer');
// const crypto = require('crypto');
// const upload = require('./config/multerconfig');
const path = require('path');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const ownersRouter = require('./routes/ownersRouter');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser());

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/images/Upload');
//   },
//   filename: function (req, file, cb) {
//     crypto.randomBytes(12, function(err, bytes)
//     {
//         const fn =  bytes.toString("hex")+ path.extname(file.originalname);
//         cb(null, fn);
//     })
    
//   }
// })

// const upload = multer({ storage: storage })

app.get('/', (req, res)=>{
    // console.log("working");
    res.send('hey');
});


app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


app.listen(3000);