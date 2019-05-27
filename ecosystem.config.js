module.exports = {
  apps : [{
    name   : "meat-api",
    script : "./meat-api/dist/main.js",
    instances: 0,
    exec_mode: "cluster",
    env: {
      SERVER_PORT: 5000,
      DB_URL: 'mongodb://fiap1blc:4omGp7rUcrZ53xWU9Me9BUhpylfM2KljSyJWL2A4uG4B7I9gl3uVCIvqUcKLmPWQi1LRbW0c2kV19RXwxSMDdg==@fiap1blc.documents.azure.com:10255/?ssl=true&replicaSet=globaldb',
      NODE_ENV: "production"
    },
  }]
}
