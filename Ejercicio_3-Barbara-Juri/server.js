import express from 'express'
import config from './config.js'

import CnxMongoDB from './model/DBMongo.js'

import RouterArticulos from './router/articulos.js'
import RouterClientes from './router/clientes.js'


const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/articulos', new RouterArticulos().start())
app.use('/api/clientes', new RouterClientes().start())

if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
