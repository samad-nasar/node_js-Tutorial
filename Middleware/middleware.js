// created a middleware named reqFilter
const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('no age given')
    }
    if (req.query.age < 18) {
        res.send('age must be greater than 18')
    } else { next() }//with next(), the following code will not execute if the condition is not pulfilled
}
module.exports=reqFilter;