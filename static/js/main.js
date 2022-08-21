const apiURL = "http://localhost:8000/api/"
// const apiURL = "https://emo-band-songs-api.herokuapp.com/api/"

document.addEventListener("submit", getBestSong)

function testInput(e){
    e.preventDefault()
    console.log("Input submitted")
    const bandName = document.querySelector("input").value
    console.log(bandName)
    document.querySelector("h2").innerText = bandName
}

async function getBestSong(e){
    e.preventDefault()
    const bandName = document.querySelector("input").value
    console.log(bandName)
    try{
        const res = await fetch(`${apiURL}${bandName}`)
        const data = await res.json()

        console.log("form submitted")
        console.log(data)
        document.querySelector("h2").innerText = `${data[0]["band"]} - ${data[0]["song"]}`
    }catch(error){
        console.log(error)
    }
}
