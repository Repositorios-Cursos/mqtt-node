const aedes = require('aedes')()
const net = require('net') // Corrigido: importa o módulo corretamente
const server = net.createServer(aedes.handle) // usa o método createServer

const port = 1883

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

aedes.on('publish', (packet, client) => {
    if (client) {
        console.log('Mensagem recebida do cliente:', packet.payload.toString())
    }
})
