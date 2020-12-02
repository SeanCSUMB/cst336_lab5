const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "l9uy9s6tdmlsf1wy",
    password: "ntrcto167n3d9w49",
    database: "dwjcmnvycbm4fznu"
});

module.exports = pool;
