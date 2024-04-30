function Star({posX, posY}) {
    return (
      <span className="star" style={{position: "fixed", left: posX, top: posY}}>★</span>
    )
  }
  
  export default Star
  