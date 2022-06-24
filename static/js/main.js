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
}