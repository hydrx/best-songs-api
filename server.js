require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
// const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const mongoString = process.env.DB_STRING


MongoClient.connect(mongoString, {useUnifiedTopology:true})
    .then(client => {
        console.log("Connected to Database")
        const db = client.db("best-songs-api")
        const bands = db.collection("bands")

        app.set("view engine", "ejs")

        app.use(cors())
        app.use("/static", express.static("./static/"))
        app.use(express.json())
        // app.use(bodyParser.urlencoded({extended:true}))
        // app.use(bodyParser.json())

        app.listen(process.env.PORT || PORT, () =>{
            console.log(`The server is running on ${process.env.PORT}. You better go catch it!`)
        })

        app.get("/", (req,res) =>{
            // res.sendFile(__dirname + "/index.html")
            /*db.collection("bands").find().toArray()
                .then(results => {
                    console.log(results)
                })
                .catch(err => console.error(err))*/
            res.render("index.ejs", {})
        })

        app.get("/bands", (req, res) =>{
            bands.find().toArray()
                .then(results => {
                    res.render("bands.ejs", {bands:results})
                })
                .catch(err => console.error(err))
        })

        app.get("/dev", (req, res) =>{
            bands.find().toArray()
                .then(results => {
                    res.render("dev.ejs", {bands:results})
                })
                .catch(err => console.error(err))
        })

        app.get("/api/:band", (req, res) =>{
            //pass from mongodb
            const bandName = titleCase(req.params.band)
            const unknown = [{band: "Unknown Band", song: "No Information"}]

            bands.find({"band": bandName}).toArray()
                .then(results => {
                    if(results[0] !== undefined){
                        res.json(results)
                        console.log(results[0])
                    }else{
                        res.json(unknown)
                    }
                })
        })

        app.post("/songs", (req,res) =>{
            bands.insertOne(req.body)
                .then(result => {
                    console.log(result)
                    res.redirect("/dev")
                })
                .catch(err => console.error(err))
        })

        app.post("/bandsuggest", (req,res) =>{
            //add functionality later
        })

        //TODO: update from old band
        app.put("/songs", (req,res) =>{
            bands.findOneAndUpdate(
                {band: req.body.band},
                {
                    $set: {
                        band: req.body.band,
                        song: req.body.song
                    }
                },
                {
                    upsert: true
                }
            )
                .then(result => {
                    console.log(result)
                    res.json("success")
                })
                .catch(err => console.error(err))
        })

        app.delete("/songs", (req, res) => {
            bands.deleteOne(
                {band: req.body.band}
            )
                .then(result => {
                    if(result.deletedCount === 0){
                        return res.json("No empty data to delete")
                    }
                    res.json("Deleted empty data")
                })
                .catch(err => console.error(err))
        })

    })
    .catch(err => console.error(err))

//temporary location for titleCase function
function titleCase(title) {
    let newTitle = title.toLowerCase().split(" ")
    let titleCased = []

    for(let i=0;i<newTitle.length;i++){
        let word = newTitle[i]
        titleCased.push(word[0].toUpperCase() + word.slice(1))
    }

    return titleCased.join(" ")
}