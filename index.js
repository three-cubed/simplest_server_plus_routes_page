const express = require('express');
const app = express();
app.use(express.static(__dirname)); // To access stylesheet.css
app.set('view engine', 'ejs');

// If you want to use app.use(express.json()); then put it before the router!
const router = require('./routes/routes');
app.use('/', router);

app.listen(process.env.port || 3000, () => {
    console.log('listening to 3000');
});
