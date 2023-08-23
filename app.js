const express = require('express');
const {connectToDb,getDb} = require('../mongodb/db');
const app = express();

let db;
connectToDb((err) => {
    if (!err) {
        app.listen(8000, () => {
            console.log('The app is listening on the port 8000');
        });
        db = getDb();
    }
})

app.get('/books', (req, res) => {
    const books = [];
    db.collection('books').find().sort({ author: 1 }).forEach((book) => {
        books.push(book)
    }).then(() => {
        res.status(200).json(books)
    }).catch(() => {
        json.error(500).json({error:'could nor fetch the documents'});
    })
});

app.get('./books/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('books').findOne({ _id: ObjectId(req.params.id) }).then(docs => {
            res.status(200).json(docs)
        })
            .catch(err => {
                res.status(500).json({ error: 'Could not fetch the document' });
        })
    }
    else {
        res.status(500).json({ error: 'Not a valid id' });
    }
})

