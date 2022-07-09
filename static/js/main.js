//get band/song on index.ejs
/*
document.querySelector("button").addEventListener("click", getBestSong)

async function getBestSong(){
    const bandName = document.querySelector("input").value
    try{
        const res = await fetch(`https://emo-band-songs-api.herokuapp.com/api/${bandName}`)
        const data = await res.json()

        console.log(data)
        document.querySelector("h2").innerText = data.song
    }catch(error){
        console.log(error)
    }
}*/

const update = document.querySelector("#update-button")

//TODO: change body to form data
update.addEventListener("click", _ =>{
    fetch("/songs", {
        method: "put",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            band: "Fall Out Boy",
            song: "Grand Theft Autumn"
        })
    })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            console.log(response)
            window.location.reload(true)
        })
})
