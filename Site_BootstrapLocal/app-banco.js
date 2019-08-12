var desenvolvimento = false;

const mysql = require('mysql');

const connection = mysql.createPool({
    connectionLimit : 4,
    server: 'LAPTOP-04CTIBD7',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'tcc',
    debug: false
});

// var configuracoes = {
//     producao: {
//         pool: {
//             max: 4,
//             min: 1,
//             idleTimeoutMillis: 30000,
//             connectionTimeout: 5000
//         }
//     }
   
// }

// var sql = require('mssql');
// sql.on('error', err => {
//     console.error(`Erro de Conexão: ${err}`);
// });

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
    //   return sql.connect(configuracoes[perfil])
    return new connection.getConnection();
}

// function conectar2() {
//     return sql.connect(configuracoes[perfil])
//         //   return new sql.ConnectionPool(configuracoes[perfil]).connect();  
// }

connection.getConnection(function (erro){
    if (!erro) {
        connection.query(`select email, senha from produtor where nomeUsuario = 'TesteTeste' and senha='123456'`,(err,rows)=>{
            if(err) throw err;

            console.log(rows)
        }
            );
        console.log("Conexão com banco funcionando corretamente");
    } else {
        console.log("Conexão com banco falhou");
    }
});

module.exports = {
    // conectar2: conectar2,
    conectar: conectar,
    // sql: sql,
    connection: connection
}