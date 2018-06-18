var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var candidatos = new mongoose.Schema({
    _id : ObjectId,
    nome: String,
    cpf: String,
    prof: [String],
});

var Candidato = mongoose.model('Candidato', candidatos);
module.exports = Candidato;