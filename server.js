const express = require("express")
const app = express
const PORT = 8000
const cors = require("cors")

app.use(cors())
app.use("static", express.static("./static/"))

const bands = {
    "unknown":
    {
        "song": "no data",
        "youtube": "#"
    },
    "Dance Gavin Dance":
	{
		"song": "Alex English",
		"youtube": "#"
	},
	"Paramore":
	{
		"song": "Pressure",
		"youtube": "#"
	},
	"Panic! At The Disco":
	{
		"song": "Lying Is The Most Fun A Girl Can Have Without Taking Her Clothes Off",
		"youtube": "#"
	},
	"Fall Out Boy":
	{
		"song": "Grand Theft Autumn",
		"youtube": "#"
	},
	"My Chemical Romance":
	{
		"song": "I'm Not Okay (I Promise)",
		"youtube": "#"
	},
	"Hawthorne Heights":
	{
		"song": "Ohio Is For Lovers",
		"youtube": "#"
	},
	"Escape The Fate":
	{
		"song": "This War Is Ours (The Guillotine II)",
		"youtube": "#"
	},
	"Mayday Parade":
	{
		"song": "Three Cheers For Five Years",
		"youtube": "#"
	},
	"Jimmy Eat World":
	{
		"song": "Hear You Me",
		"youtube": "#"
	},
	"Bright Eyes":
	{
		"song": "Lover I Don't Have To Love",
		"youtube": "#"
	}
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
