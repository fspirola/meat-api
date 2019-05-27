"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviroment = {
    /*serverAz: {port: process.env.SERVER_PORT || 3000
    },
    dbAz: {url: process.env.DB_URL || 'mongodb://localhost/meat-api'},
    securityAz: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        apiSecret: process.env.API_SECRET || 'meat-api-secret'
    },*/
    server: { port: process.env.SERVER_PORT || 3000,
    },
    db: { url: process.env.DB_URL || 'mongodb://fiap1blc:4omGp7rUcrZ53xWU9Me9BUhpylfM2KljSyJWL2A4uG4B7I9gl3uVCIvqUcKLmPWQi1LRbW0c2kV19RXwxSMDdg==@fiap1blc.documents.azure.com:10255/?ssl=true&replicaSet=globaldb' },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        apiSecret: process.env.API_SECRET || 'meat-api-secret',
        enableHTTPS: process.env.ENABLE_HTTPS || false,
        certificate: process.env.CERTI_FILE || './security/keys/cert.pem',
        key: process.env.CERT_KEY_FILE || './security/keys/key.pem'
    },
    log: {
        level: process.env.LOG_LEVEL || 'debug',
        name: 'meat-api-logger'
    }
};
