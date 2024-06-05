import {useState} from 'react'

export default function PosterForm({posters, setPosters}){

    const [cover_img, setCover_img] = useState("")
    const [group_img, setGroup_img] = useState("")
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
        body:JSON.stringify({cover_img, group_img, name, words, url})
    })
    .then(res=>res.json())
    .then(newPoster =>
        setPosters([...posters, newPoster])
    )
}

return(
    <form className="poster_form" onSubmit={handleSubmit}>
        <h2>Add A New Event</h2>
        <div>
            <label htmlFor="cover_img">- Cover Image -  </label>
            <input name="cover_img" onChange={e=>setCover_img(e.target.value)} placeholder="Event Image" value={cover_img} />
        </div>
        <div>
        <label htmlFor="group_img"> - Group Image -  </label>
        <input name="group_img" onChange={e=>setGroup_img(e.target.value)} placeholder="Group Image" value={group_img} />
        </div>
        <div>
        <label htmlFor="name">- Event Name -  </label>
        <input name="name" onChange={e=>setName(e.target.value)} placeholder="Event Name" value={name}/>
        </div>
        <div>
        <label htmlFor="words">- Event words - </label>
        <input name="words" onChange={e=>setWords(e.target.value)} placeholder="Event Words" value={words}/>
        </div>
        <div>
        <label htmlFor="url">- Event Video Url - </label>
        <input name="url" onChange={e=>setUrl(e.target.value)} placeholder="Event Video Link" value={url}/>
        </div>
        <label htmlFor="url">💫 SUBMIT 💫  </label>
        <input type="submit" value="Add Poster"/>


    </form>
)

}