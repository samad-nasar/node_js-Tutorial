let dbConnect=require('./mongodb');

const insert= async ()=>{
    let collection= await dbConnect();
    try {
        // code inside try block is automatically returned
        await collection.insertOne({ name: 'iphone 9', brand: 'apple', price: 350 })
    } catch (error) {
        console.error('Oops! '+error)
    }
    // console.log(result);
}
insert()