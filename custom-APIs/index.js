const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Express Server is up')
})
app.listen(3002, () => { console.log('Express Based js') });
// run 'npm start' to start the server
// to restart run 'rs' (only works with nodemon)