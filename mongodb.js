const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-commerce';
const client = new MongoClient(url);
async function dbConnect(params) {
    const result = await client.connect();//- Research: names other than 'result', are not working.
    const db = result.db('e-commerce');
    const collection = db.collection('products');
    return collection;//this will return a promise, when dbConnect is called.
}
module.exports=dbConnect;