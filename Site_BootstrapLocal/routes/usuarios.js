// não mexa nestas 3 linhas!
var express = require('express');
var router = express.Router();
var banco = require('../app-banco');
// não mexa nessas 3 linhas!

router.post('/entrar', function(req, res, next) {

    banco.conectar().then(pool => {
        console.log(`Chegou p/ login: ${JSON.stringify(req.body)}`);
        var email = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
        var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login
        if (email == undefined || senha == undefined) {
            throw new Error(`Dados de email não chegaram completos: ${email} / ${senha}`);
        }
        return pool.request().query(`select email, senha from produtor where email='${email}' and senha='${senha}' or nomeUsuario = '${email}' and senha='${senha}'`);
    }).then(consulta => {

        console.log(`Usuários encontrados: ${JSON.stringify(consulta.recordset)}`);

        if (consulta.recordset.length == 1) {
            res.send(consulta.recordset[0]);
        } else {
            res.sendStatus(404);
        }

    }).catch(err => {

        var erro = `Erro no login: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.mysql.close();
        console.log('Fechou');
    });

});

router.post('/registrar', function(req, res, next) {

    banco.conectar().then(pool => {
        console.log(`Chegou p/ login: ${JSON.stringify(req.body)}`);
        var nome = req.body.nome; // depois de .body, use o nome (name) do campo em seu formulário de login
        var sobrenome = req.body.sobrenome;
        var cnpj = req.body.cnpj;
        var telefone = req.body.telefone;
        var data = req.body.data;
        var estado = req.body.estado;
        var cidade = req.body.cidade;
        var cep = req.body.cep;
        var email = req.body.email;
        var nome_usuario = req.body.nome_usuario;
        var senha = req.body.senha;
        return pool.request().query(`insert into produtor (nome,sobrenome,cnpj,telefone,dataNasc,estado,cidade,cep,email,nomeUsuario,senha) values ('${nome}','${sobrenome}','${cnpj}','${telefone}','${data}','${estado}','${cidade}',
              '${cep}','${email}','${nome_usuario}','${senha}')`);
    }).then(() => {
        res.send(200);

    }).catch(err => {

        var erro = `Erro no Registro: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
        console.log('Fechou');
    });

});

// não mexa nesta linha!
module.exports = router;