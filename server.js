const express = require('express')


const app = express()


app.get("/", (req,res)=> {
    return res.send('Hello There from aws!!')
})

app.listen(8080, ()=> {
    console.log('listening on port 8080')
})




