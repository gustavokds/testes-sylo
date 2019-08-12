// não mexa nestas 3 linhas!
var express = require('express');
var router = express.Router();
var banco = require('../app-banco');

router.get('/vendas', function(req, res, next) {
    console.log(banco.conexao);
    banco.conectar().then(pool => {
        var limite_linhas = 10;
        return pool.request().query(`select top ${limite_linhas}
        descricao,
        nomeCultura,
        qtdSacas,
        receita,
        lucro, 
        FORMAT(r.dataVenda,'dd/MM/yyyy') as data
        from Relatorio_Vendas as r, Producao,Cultura, Silo where fkProducao = idProducao and fkSilo = idSilo and fkCultura = idCultura;`);
    }).then(consulta => {

        console.log(`Resultado da consulta: ${JSON.stringify(consulta.recordset)}`);
        res.send(consulta.recordset);

    }).catch(err => {

        var erro = `Erro na leitura dos últimos registros: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
    });

});

router.get('/qualidade', function(req, res, next) {
    console.log(banco.conexao);
    banco.conectar().then(pool => {
        var limite_linhas = 10;
        return pool.request().query(`select top ${limite_linhas}
        descricao,
        nomeCultura,
        porcentagem,
        mediaTempMes1,
        mediaTempMes2,
        mediaTempMes3,
        mediaTempMes4,
        mediaTempMes5,
        mediaTempMes6,
        mediaUmidMes1,
        mediaUmidMes2,
        mediaUmidMes3,
        mediaUmidMes4,
        mediaUmidMes5,
        mediaUmidMes6,
        FORMAT(r.data_relatorio,'dd/MM/yyyy') as data
        from Relatorio_Qualidade as r, Producao,Cultura, Silo where fkProducao = idProducao and fkSilo = idSilo and fkCultura = idCultura
        order by data desc;`);
    }).then(consulta => {

        console.log(`Resultado da consulta: ${JSON.stringify(consulta.recordset)}`);
        res.send(consulta.recordset);

    }).catch(err => {

        var erro = `Erro na leitura dos últimos registros: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
    });

});

module.exports = router;