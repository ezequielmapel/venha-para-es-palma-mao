

var mongoose = require('mongoose');
var db = mongoose.connection;
var Candidato = require('../models/candidato');
var Concurso = require('../models/concurso');
module.exports = {
        /* 
            Essa função busca o candidato a partir do seu CPF
            e procura vagas que se encaixem com suas profissões cadastradas
        */
    acharConcurso: function(cpfCandidato, res){
        Candidato.findOne({cpf:cpfCandidato}, function(err, candidatos, callback){
             
            if (err) return console.error(err);
            if(candidatos){
                var arrayVagas = [];
                var i = 0;
               
                Concurso.find({listaVagas: {$in:candidatos["prof"]}}).exec(function(err, vagas){
                        if(vagas){
                            var vagasString =JSON.stringify(vagas);
                            var listaVagas = JSON.parse(vagasString);
                            res.send(listaVagas);
                        }else{
                            res.send("nada");
                        }
                        
                    });
                   
               
                
               
            }
        });
    },
    
    /*
        Essa função busca o concurso se baseando no Código do Concurso
        e retorna candidatos com que tenha como profissão pelo menos 1 item
        da lista de vagas
    */
    acharCandidato: function(codConcurso, res){
        Concurso.findOne({cod:codConcurso}, function(err, concursos){
            if(err) return console.error(err);
            console.log('1');
            if(concursos){
                console.log(concursos);
                Candidato.find({prof:{$in:concursos["listaVagas"]}}).exec(function(err, profissoes){
                    if(profissoes){
                        console.log(profissoes);
                        var profString = JSON.stringify(profissoes);
                        var listaProf = JSON.parse(profString);
                        res.send(listaProf);
                    }
                });
            }
        });
    }
    
   
}

function save(data){
    data.save(function(err, dado){
        if(err) return console.error(err);
        console.log("Salvo!");
    });
}