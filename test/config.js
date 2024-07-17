const path = require('path');

const currentDate = new Date();
const testDir = path.resolve(__dirname);
const dbName = 'test-' + currentDate.getTime() + '.fdb';

exports.default = {
    database: process.env.FIREBIRD_DB ? process.env.FIREBIRD_DB.replace(new RegExp(/<TS>/,'gi'), Date.now()) : path.join(process.env.FIREBIRD_DATA || testDir, dbName),
    databaseGds: process.env.FIREBIRD_DB_GDS ? process.env.FIREBIRD_DB.replace(new RegExp(/<TS>/,'gi'), Date.now()) : path.join(process.env.FIREBIRD_DATA || testDir, dbName),
    host: process.env.FIREBIRD_HOST || '127.0.0.1',
    port: process.env.FIREBIRD_PORT || 3050,
    user: process.env.FIREBIRD_USER || 'SYSDBA',
    password: process.env.FIREBIRD_PW || 'masterkey',
    role: null,
    pageSize: 4096,
    timeout: 3000,
    lowercase_keys: true,
    retryConnectionInterval: 100
};
console.log(exports.default)
exports.currentDate = currentDate;
exports.testDir = testDir;

exports.extends = function(base, args) {
    return Object.assign({}, base, args);
}

