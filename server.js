const express = require('express');
const mongo = require('mongodb');

async function main() {
    try {
        const app = express();
        
        const clienteDoBanco = 
            await mongo.connect('mongodb://ronaldinho:nerdzao1@ds213832.mlab.com:13832/nerdzao-rick-and-morty', {
                useNewUrlParser: true,
            });
        
        const bancoDeDados = clienteDoBanco.db('nerdzao-rick-and-morty');
        const personagens = await bancoDeDados.collection('characters');
    
        // Vai permitir que nossa aplicação escute o pedido
        // de personagens
        app.get('/personagens', async (requisicao, resposta) => {
            const todosOsPersonagens = await personagens.find().toArray();
            resposta.send(todosOsPersonagens);
        });
    
        // Eu falo que a aplicação PODE escutar na porta que eu mandar.
        app.listen(5000, () => console.log('Escutando na porta 5000'));
    }
    catch(e) {
        console.log(`Deu ruim por culpa do ${e}`)
    }
}

main();
