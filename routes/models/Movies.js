const mongoose = require('mongoose')

//create blueprint for inputs into database
//word will have type string
const WordSchema = new mongoose.Schema({
    title: {type: String, unique:true, default: '', lowercase:true},
    rating: {type: String, default: ''},
    synopsis: {type: String, default: '', lowercase: true },
    releaseYear: {type: Number, default: '', lowercase: true },
    genre: {type: String, default: '', lowercase: true},
    director: {type: String, default: '', lowercase: true},

})

module.exports = mongoose.model('movies', WordSchema);

