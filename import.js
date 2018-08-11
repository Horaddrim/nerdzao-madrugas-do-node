const data = require('./characters.json');
const mongo = require('mongodb');

(async () => {
    const client = await mongo.connect(
        'mongodb://ronaldinho:nerdzao1@ds213832.mlab.com:13832/nerdzao-rick-and-morty'
    );

    const db = client.db('nerdzao-rick-and-morty');

    const result = await db.collection('characters').insertMany(data.results)

    console.log(result)

    process.exit(0);
})()
