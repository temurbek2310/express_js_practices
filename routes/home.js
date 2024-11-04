const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const users = [
        {
            id: 1,
            name: 'John Doe'
        },
        {
            id: 2,
            name: 'Jane Doe'
        }
    ]
    res.render('home', {
        title: 'Home Page',
        users
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        hello: 'Hello from Handlerbars and Express js',
        text: 'lorem1000'
    });
});

// exports
module.exports = router