const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
// ------------- Middleware ----------------------------
const app = express();
app.use(express.json())

// ---------------- Database Connection -----------------
mongoose.connect('mongodb://localhost/todo')
  .then(()=> console.log('Connection Successful')
  )
  .catch( err => console.log(err)
  )



// ------------- Application Routes --------------------


// ------------- default error handler ------------------ 
function errorHandler( err, req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({ error: err});
}


app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})
