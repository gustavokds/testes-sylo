var desenvolvimento = false;

const mysql = require('mysql');

const connection = mysql.createConnection({
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

// var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

// function conectar() {
//     //   return sql.connect(configuracoes[perfil])
//     return new sql.ConnectionPool(configuracoes[perfil]).connect();
// }

// function conectar2() {
//     return sql.connect(configuracoes[perfil])
//         //   return new sql.ConnectionPool(configuracoes[perfil]).connect();  
// }

module.exports = {
    // conectar2: conectar2,
    // conectar: conectar,
    // sql: sql,
    connection: connection
}