

export default function PosterFacts({poster}){
    return(
        <div >
            <p className="cardfacts" >WINNER THIS EDITION</p>
            
            <p className="winner" >{poster.words}</p>
        
        </div>
    )
}