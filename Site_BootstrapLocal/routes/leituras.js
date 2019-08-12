// não mexa nestas 3 linhas!
var express = require('express');
var router = express.Router();
var banco = require('../app-banco');
// não mexa nessas 3 linhas!

// teste
var pasta_projeto_site = 'Site_BootstrapAzure';
var porta_serial = require('serialport');
var leitura_recebida = porta_serial.parsers.Readline;

require('events').EventEmitter.defaultMaxListeners = 15;

let portas = 0;
//teste
function portaCOM() {
    porta_serial.list().then(entradas_seriais => {
        var entradas_seriais_arduino = entradas_seriais.filter(entrada_serial => {
            return entrada_serial.vendorId == 2341 && entrada_serial.productId == 43;
        });

        portas = entradas_seriais_arduino.length;
    });
}

router.get('/temporeal', (req, res, next) => {
    console.log(banco.conexao);
    banco.conectar().then(async pool => {
        leituras = [];
        try {
            dado = await pool.request().query(`select top 4
        temperatura,
        umidade,
        FORMAT(momentoLeitura, 'HH:mm:ss') as hora
        from Leitura,Producao as p,Silo,Sensor where fkProducao = idProducao and p.fkSilo = idSilo and 
        fkSensor = idSensor and idSilo = 1 order by momentoLeitura desc,fksensor asc ; 
        `);
            leituras.push(dado.recordset);
            dado = await pool.request().query(`select top 4
        temperatura,
        umidade,
        FORMAT(momentoLeitura, 'HH:mm:ss') as hora
        from Leitura,Producao as p,Silo,Sensor where fkProducao = idProducao and p.fkSilo = idSilo and 
        fkSensor = idSensor and idSilo = 2 order by momentoLeitura desc, fksensor asc ; 
            `);
            leituras.push(dado.recordset);
            dado = await pool.request().query(`select top 4
        temperatura,
        umidade,
        FORMAT(momentoLeitura, 'HH:mm:ss') as hora
        from Leitura,Producao as p,Silo,Sensor where fkProducao = idProducao and p.fkSilo = idSilo and 
        fkSensor = idSensor and idSilo = 3 order by momentoLeitura desc,  fksensor asc ; 
                    `);
            leituras.push(dado.recordset);
            dado = await pool.request().query(`select top 4
        temperatura,
        umidade,
        FORMAT(momentoLeitura, 'HH:mm:ss') as hora
        from Leitura,Producao as p,Silo,Sensor where fkProducao = idProducao and p.fkSilo = idSilo and 
        fkSensor = idSensor and idSilo = 4 order by momentoLeitura desc, fksensor asc; 
                            `);
            leituras.push(dado.recordset);
        } catch (err) {
            console.log(`Erro:${err}`);
        }
        return leituras;
    }).then(consulta => {
        console.log(`Resultado da consultaa : ${JSON.stringify(consulta)}`);
        res.status(200).send(consulta);
    }).catch(err => {
        var erro = `Erro na leitura dos últimos registros: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
        console.log('Fechou leitura');
    });
})

router.get('/ultimas', function(req, res, next) {
    banco.conectar().then(pool => {
        var limite_linhas = 10;
        return pool.request().query(`select top ${limite_linhas} 
                            fkSensor as id_sensor, 
                            temperatura as temp, 
                            umidade, 
                            FORMAT(momentoLeitura,'dd/mm/yyyy') as data,
                            FORMAT(momentoLeitura,'HH:mm:ss') as hora 
                            from leitura order by momentoLeitura desc`);
    }).then(consulta => {

        console.log(`Resultado da consulta: ${JSON.stringify(consulta.recordset)}`);
        res.send(consulta.recordset);

    }).catch(err => {

        var erro = `Erro na leitura dos últimos registros: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
        console.log('Fechou leitura');
    });
});

router.get('/silos', function(req, res, next) {
    console.log(banco.conexao);
    banco.conectar().then( async pool => {
        var limite_linhas = 4;
        var dados = [];
        try {
            dado = await pool.request().query(`select top ${limite_linhas}
    s.descricao,
    fkSensor as idSensor, 
    fkProducao as idProd,
    temperatura as temp, 
    umidade, 
    FORMAT(momentoLeitura,'dd/mm/yyyy') as data,
    FORMAT(momentoLeitura,'HH:mm:ss') as hora 
    from Leitura,Producao as p,Silo as s where fkProducao = idProducao
    and idProducao = 1 
    and fkSilo = idSilo order by fkSensor asc, momentoLeitura desc`);

            dados.push(dado.recordset);
            dado = await pool.request().query(`select top ${limite_linhas}
    s.descricao, 
    fkSensor as idSensor, 
    fkProducao as idProd,
    temperatura as temp, 
    umidade, 
    FORMAT(momentoLeitura,'dd/mm/yyyy') as data,
    FORMAT(momentoLeitura,'HH:mm:ss') as hora 
    from Leitura,Producao as p,Silo as s where fkProducao = idProducao
    and idProducao = 2
    and fkSilo = idSilo order by fkSensor asc, momentoLeitura desc`);
            dados.push(dado.recordset);
            dado = await pool.request().query(`select top ${limite_linhas} 
    s.descricao,
    fkSensor as idSensor, 
    fkProducao as idProd,
    temperatura as temp, 
    umidade, 
    FORMAT(momentoLeitura,'dd/mm/yyyy') as data,
    FORMAT(momentoLeitura,'HH:mm:ss') as hora 
    from Leitura,Producao as p,Silo as s where fkProducao = idProducao
    and idProducao = 3
    and fkSilo = idSilo order by fkSensor asc, momentoLeitura desc`);
            dados.push(dado.recordset);
            dado = await pool.request().query(`select top ${limite_linhas} 
    s.descricao,
    fkSensor as idSensor, 
    fkProducao as idProd,
    temperatura as temp, 
    umidade, 
    FORMAT(momentoLeitura,'dd/mm/yyyy') as data,
    FORMAT(momentoLeitura,'HH:mm:ss') as hora 
    from Leitura,Producao as p,Silo as s where fkProducao = idProducao
    and idProducao = 4
    and fkSilo = idSilo order by fkSensor asc, momentoLeitura desc`);
            dados.push(dado.recordset);
                    
        } catch (err) {
            console.log(err);
        }
        return dados;
    }).then(consulta => {

        console.log(`Resultado da consulta: ${JSON.stringify(consulta)}`);
        res.send(consulta);

    }).catch(err => {

        var erro = `Erro na leitura dos últimos registros: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
        console.log('Fechou leitura');
    });

});

router.get('/estatisticas', function(req, res, next) {
    console.log(banco.conexao);

    var estatisticas = {
        temp_maxima: 0,
        temp_minima: 0,
        temp_media: 0
    };

    banco.conectar().then(pool => {
        return pool.request().query(`
    select 
      max(temperatura) as tempMaxima, 
      min(temperatura) as tempMinima, 
      avg(temperatura) as tempMedia 
    from leitura
    `);
    }).then(consulta => {
        estatisticas.temp_maxima = consulta.recordset[0].tempMaxima;
        estatisticas.temp_minima = consulta.recordset[0].tempMinima;
        estatisticas.temp_media = consulta.recordset[0].tempMedia;
        console.log(`Estatísticas: ${estatisticas}`);
        res.send(estatisticas);
    }).catch(err => {

        var erro = `Erro na leitura dos últimos registros: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
        console.log('Fechou leitura');
    });

});

// router.get('/temporeal', function(req, res, next) {
//     console.log(banco.conexao);
//     leitura = {
//         nivel1: 0,
//         nivel2: 0,
//         nivel3: 0,
//         nivel4: 0
//     }
//     banco.conectar().then(pool => {
//         var limite_linhas = 4;
//         return pool.request().query(`
//     SELECT TOP ${limite_linhas}
//     fkSensor,
//     temperatura,
//     umidade,
//     momentoLeitura
//     from Leitura order by momentoLeitura desc
//     `)
//     }).then(consulta => {

//         console.log(`Resultado da consulta: ${JSON.stringify(consulta.recordset)}`);
//         res.send(consulta.recordset);

//     }).catch(err => {

//         var erro = `Erro na leitura dos últimos registros: ${err}`;
//         console.error(erro);
//         res.status(500).send(erro);

//     }).finally(() => {
//         banco.sql.close();
//     });
// })

router.post('/silo', function(req, res, next) {
    console.log(banco.conexao);
    silo = [];

    banco.conectar().then(pool => {
        console.log(`Chegou nessa bosta: ${JSON.parse(req.body.json)}`);
        var jao = JSON.parse(req.body.json);
        console.log('' + JSON.stringify(jao.id));
        return pool.request().query(`
    SELECT 
    idSilo,
    descricao,
    nomeCultura,
    FORMAT(dataArmazenagem,'dd/MM/yyyy') as momento
    from Silo,Producao,Cultura where fkSilo = idSilo and fkCultura = idCultura and idSilo in (${jao.id}) order by idSilo`)
    }).then(consulta => {
        for (i = 0; i < consulta.recordset.length; i++) {
            silo.push({
                descricao: `${consulta.recordset[i].descricao}`,
                idSilo: `${consulta.recordset[i].idSilo}`,
                data_armazenagem: `${consulta.recordset[i].momento}`,
                cultura: `${consulta.recordset[i].nomeCultura}`
            });
        }
        console.log(`Resultado da consulta dessa : ${JSON.stringify(consulta.recordset)}`);
        res.send(silo);

    }).catch(err => {

        var erro = `Erro na leitura dos últimos registros: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
        console.log('Fechou leitura');
    });
})

router.get('/analytics', function(req, res, next) {
    console.log(banco.conexao);
    banco.conectar().then(async pool => {
        tabela = [];
        try {
            dado = await pool.request().query(`select top 50
        MIN(temperatura) as 'MinTemp',
        MAX(temperatura) as 'MaxTemp', 
        AVG(temperatura) as 'MediaTemp',
        MIN(umidade) as 'MinUmid', 
        MAX(umidade) as 'MaxUmid', 
        AVG(umidade) as 'MediaUmid'
        from Leitura,Producao,Silo,Cultura where fkSensor in (2,3,4) and fkProducao = idProducao and fkSilo = idSilo and idSilo = 1 and fkCultura = idCultura;
        `);
            tabela.push(dado.recordset[0]);
            dado = await pool.request().query(`select top 50
        MIN(temperatura) as 'MinTemp',
        MAX(temperatura) as 'MaxTemp', 
        AVG(temperatura) as 'MediaTemp',
        MIN(umidade) as 'MinUmid', 
        MAX(umidade) as 'MaxUmid', 
        AVG(umidade) as 'MediaUmid'
        from Leitura,Producao,Silo where fkSensor in (6,7,8) and fkProducao = idProducao and fkSilo = idSilo and idSilo = 2
        `);
            tabela.push(dado.recordset[0]);
            dado = await pool.request().query(`select top 50
        MIN(temperatura) as 'MinTemp',
        MAX(temperatura) as 'MaxTemp', 
        AVG(temperatura) as 'MediaTemp',
        MIN(umidade) as 'MinUmid', 
        MAX(umidade) as 'MaxUmid', 
        AVG(umidade) as 'MediaUmid'
        from Leitura,Producao,Silo where fkSensor in (10,11,12) and fkProducao = idProducao and fkSilo = idSilo and idSilo = 3
        `);
            tabela.push(dado.recordset[0]);
            dado = await pool.request().query(`select top 50
        MIN(temperatura) as 'MinTemp',
        MAX(temperatura) as 'MaxTemp', 
        AVG(temperatura) as 'MediaTemp',
        MIN(umidade) as 'MinUmid', 
        MAX(umidade) as 'MaxUmid', 
        AVG(umidade) as 'MediaUmid'
        from Leitura,Producao,Silo where fkSensor in (14,15,16) and fkProducao = idProducao and fkSilo = idSilo and idSilo = 4
        `);
            tabela.push(dado.recordset[0]);
        } catch (err) {
            console.log(`Erro:${err}`);
        }
        return tabela;
    }).then(consulta => {
        console.log(`Resultado da consulta : ${JSON.stringify(consulta)}`);
        res.send(consulta);
    }).catch(err => {
        var erro = `Erro na leitura dos últimos registros: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
        console.log('Fechou leitura');
    });
})

router.get('/temporealmedia', (req, res, next) => {
    console.log(banco.conexao);
    banco.conectar().then(pool => {
        return pool.request().query(`SELECT TOP 1 temperatura,
        umidade,
        FORMAT(momentoLeitura,'HH:mm:ss') as 'hora'
        FROM LEITURA where fkSensor = 4 order by momentoLeitura desc;`);
    }).then(consulta => {
        console.log(`Resultado da consulta : ${JSON.stringify(consulta.recordset)}`);
        res.status(200).send(consulta.recordset);
    }).catch(err => {
        var erro = `Erro na leitura dos últimos registros: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
        console.log('Fechou leitura');
    });

})

// não mexa nesta linha!
module.exports = router;