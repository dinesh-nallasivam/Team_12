const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT;


app.get("/",(_,res)=>{
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});