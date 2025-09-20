const express = require('express')
// ------------ Express app initialization -------------
const app = express()
const port = 3000

// ------------- Application Routes --------------------


// ------------- default error handler ------------------ 
function errorHandler( err, req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({ error: err});
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})
