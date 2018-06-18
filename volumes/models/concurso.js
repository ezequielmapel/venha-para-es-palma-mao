var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var concursos = new mongoose.Schema({
    _id: ObjectId,
    orgao: String,
    edital: String,
    cod: String,
    listaVagas: [String]
});

var Concurso = mongoose.model('Concurso', concursos);
module.exports = Concurso;