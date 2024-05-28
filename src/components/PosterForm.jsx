import {useState} from 'react'

export default function PosterForm({posters, setPosters}){

    const [cover_img, setCover_img] = useState("")
    const [name, setName]= useState("")
    const [words, setWords]=useState("")
    const [url, setUrl]=useState("")

function handleSubmit(e){
    e.preventDefault()

    fetch('http://localhost:3000/posters',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify({cover_img, name, words, url})
    })
    .then(res=>res.json())
    .then(newPoster =>
        setPosters([...posters, newPoster])
    )
}

return(
    <form className="poster_form" onSubmit={handleSubmit}>
        <h2>Add A New Event</h2>

        <label htmlFor="cover_img">Image:</label>
        <input name="cover_img" onChange={e=>setCover_img(e.target.value)} placeholder="Event Image" value={cover_img} />

        <label htmlFor="name">Event Name:</label>
        <input name="name" onChange={e=>setName(e.target.value)} placeholder="Event Name" value={name}/>

        <label htmlFor="words">Event words:</label>
        <input name="words" onChange={e=>setWords(e.target.value)} placeholder="Event Words" value={words}/>

        <label htmlFor="url">Event Video Url:</label>
        <input name="url" onChange={e=>setUrl(e.target.value)} placeholder="Event Video Link" value={url}/>

        <input type="submit" value="Add Event Poster"/>


    </form>
)

}