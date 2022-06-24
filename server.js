const express = require("express")
const app = express
const PORT = 8000
const cors = require("cors")

app.use(cors())

const bands = {

}

app.get('/', (req,res) =>{
    res.sendFile(__dirname + "index.html")
})

app.get('/api/:bandName', (req, res) =>{
    const bandName = req.params.bandName.toLowerCase()
    if(bands[bandName]){
        res.json(bands[bandName])
    }else{
        res.json(bands['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is running on ${PORT}. You better go catch it!`)
})
