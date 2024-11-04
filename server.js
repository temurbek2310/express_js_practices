const express = require('express');
const logger = require('./middlewares/logger')
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Books api endpoints
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// Set up template enxgine
const hbs = exphbs.create({ extname: '.hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));


app.use('/api/books', require('./routes/books'));

app.use('/', require('./routes/home'));


// Set up static folder and middleware
// app.use(express.static(path.join(__dirname, 'public')))

// app.use(logger)

// Body parser middleware

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));