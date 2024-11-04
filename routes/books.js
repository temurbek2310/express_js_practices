const { Router } = require('express');
const router = Router();
const books = require('../books');


// Get all books
router.get('/', (req, res) => {
    res.json(books);
});


// Get one book by id
// params.id
router.get('/:id', (req, res) => {
    const isExist = books.some(book => book.id === parseInt(req.params.id));
    if (isExist) {
        res.json(books.filter(book => book.id === parseInt(req.params.id)));
    } else {
        res.status(404).send({ message: `Book with id-${req.params.id} not found.` });
    }
});


// Post new book
router.post('/', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
    }

    if (!req.body.title || !req.body.author) {
        return res.status(400).json({ message: 'Please provide title and author.' });
    } else {
        books.push(newBook);
        res.json(books);
    }
});


// Update book
router.put('/:id', (req, res) => {
    const isExist = books.some(book => book.id === parseInt(req.params.id));
    if (isExist) {
        const updatedBook = req.body;
        books.forEach(book => {
            if (book.id === parseInt(req.params.id)) {
                book.title = updatedBook.title ? updatedBook.title : book.title
                book.author = updatedBook.author ? updatedBook.author : book.author
            }
            res.status(200).json({ message: 'Book updated', book });
        })
    } else {
        res.status(404).json({ message: `Book with id-${req.params.id} not found.` });
    }
})

// Delete book
router.delete('/:id', (req, res) => {
    const isExist = books.some(book => book.id === parseInt(req.params.id));
    if (isExist) {
        res.json({
            message: 'Book deleted',
            books: books.filter(book => book.id !== parseInt(req.params.id))
        });
    } else {
        res.status(404).json({ message: `Book with id-${req.params.id} not found.` });
    }
})

// Exports
module.exports = router;