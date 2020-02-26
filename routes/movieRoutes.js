const express = require('express');
const router = express.Router();
const Movie = require('./models/Movies')

/* GET users listing. */
//get all movies
router.get('/', (req, res) => {
    Movie.find({}).then((words) => {
        return res.status(200).json(words);
        //return res.render('viewDictionary', {words: words} )
    })
    .catch(err => { res.status(500).json({message: "Server Error", err})
    })
})

router.post('/addmovie', (req, res) => {
    console.log(req.body)
    if(!req.body.title || !req.body.rating || !req.body.synopsis || !req.body.releaseYear || !req.body.genre || !req.body.director) {
        return res.status(400).json({messeage: 'All inputs must be filled'})
    }

    Movie.findOne({ title: req.body.title }).then((movie)=> {
        //if movie is found return message and stop
        if(movie) {
            return res.status(500).json({message: 'Word is already in the dictionary'})
        }

        const newMovie = new Movie();
        newMovie.title = req.body.title;
        newMovie.rating = req.body.rating;
        newMovie.synopsis = req.body.synopsis;
        newMovie.releaseYear = req.body.releaseYear;
        newMovie.genre = req.body.genre;
        newMovie.director = req.body.director;

        newMovie.save().then((movie) => {
            return res.status(200).json({message: 'Movie added', title});
        }).catch(err => {
            return res.status(500).json({message: 'Word was not created', err})
        });

    }).catch(err => {
        return res.status(500).json({message: 'Server Error', err});
    })

})

module.exports = router;