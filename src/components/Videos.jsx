import {useLoaderData} from 'react-router-dom'
import {useState} from 'react'

export default function Videos (){

    const videos = useLoaderData()
    if (!videos || videos.length === 0) {
        return <h1>Loading...</h1>;
      } //not working, whyy?? ask Chett aahaaaahhhh
  
    const [search, setSearch] = useState('')

    const mappedVideos = videos
        .filter(video =>video.name.toLowerCase().includes(search.toLowerCase()))
        .map(video=>{
            return(
                <div className="video_frame" style={{height: '340px', width: '580px',border: 'solid white 1px'}}>
                    <iframe 
                    key={video.id} 
                    className="video_frame"
                    width="560" 
                    height="315" 
                    src={video.url} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                    </iframe>

                </div>
            )
        })

    return(
        <div>
            {/* <h2>Search Battle</h2> */}
            <label htmlFor="cover_img"> -- Search Battle --</label>
            <div className="video_search_container">
            <input type="text" onChange={e=>setSearch(e.target.value)} value={search} placeholder="do what you gonna do"/>
            </div>
            {mappedVideos}
        </div>
    )
}