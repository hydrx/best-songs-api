const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const PORT = 8000

app.use(cors())
app.use("/static", express.static("./static/"))
app.use(bodyParser.urlencoded({extended:true}))

const bands = {
    "unknown": {
        "song": "no data",
        "youtube": "#"
    },
    "dance gavin dance": {
        "bandName": "Dance Gavin Dance",
        "song": "Alex English",
        "youtube": "#"
     },
     "paramore": {
        "bandName": "Paramore",
        "song": "Pressure",
        "youtube": "#"
     },
     "panic! at the disco": {
        "bandName": "Panic! At The Disco",
        "song": "Lying Is The Most Fun A Girl Can Have Without Taking Her Clothes Off",
        "youtube": "#"
     },
     "fall out boy": {
        "bandName": "Fall Out Boy",
        "song": "Grand Theft Autumn",
        "youtube": "#"
     },
     "my chemical romance": {
        "bandName": "My Chemical Romance",
        "song": "I'm Not Okay (I Promise)",
        "youtube": "#"
     },
     "hawthorne heights": {
        "bandName": "Hawthorne Heights",
        "song": "Ohio Is For Lovers",
        "youtube": "#"
     },
     "escape the fate": {
        "bandName": "Escape The Fate",
        "song": "This War Is Ours (The Guillotine II)",
        "youtube": "#"
     },
     "mayday parade": {
        "bandName": "Mayday Parade",
        "song": "Three Cheers For Five Years",
        "youtube": "#"
     },
     "jimmy eat world": {
        "bandName": "Jimmy Eat World",
        "song": "Hear You Me",
        "youtube": "#"
     },
     "bright eyes": {
        "bandName": "Bright Eyes",
        "song": "Lover I Don't Have To Love",
        "youtube": "#"
     },
}

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is running on ${PORT}. You better go catch it!`)
})

app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/:band', (req, res) =>{
    const bandData = req.params.band.toLowerCase()
    if(bands[bandData]){
        res.json(bands[bandData])
    }else{
        res.json(bands['unknown'])
    }
})

app.post('/songs', (req,res) =>{
    console.log(req.body)
})
