
const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const errorHandler=require('./midelware/errorhandled');
//const upload = multer({ dest: '/uploads' });



const user = require('./routes/user');
const categories = require('./routes/categories');
const client = require('./routes/client');
const setting = require('./routes/setting');
const product = require('./routes/product');
const order = require('./routes/orders');
const orders = require('./routes/order_item');
const auth = require('./routes/auth');

app.use(express.json());
app.use(errorHandler);


app.use('/user',user);
app.use('/categories',categories);
app.use('/client',client);
app.use('/setting', setting);
app.use('/product', product );
app.use('/order', order);
app.use('/orders', orders);
app.use('/auth',auth);



app.use(express.urlencoded({ extended:true }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

 (async () => {
    await db.sequelize.sync({alert:true});
})();

app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString());
    next();
})

app.get('/', [
    (req, res, next) => {
        res.send('This is the home page!')
    }
]);


app.use(function(request, response, next) {
    console.log('This is global middleware!');
    next();
});


app.listen(578);