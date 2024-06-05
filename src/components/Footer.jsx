import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer(){
    return(
        <div>
            <div className="footer_links">
                <Link to="https://www.youtube.com/@moversbodega">
                    Youtube
                </Link>

                <Link to="https://www.instagram.com/battle101nyc/">
                    Battle 101 IG
                </Link>
               
                <a className="footer_inner" href="https://www.instagram.com/lifeisgood.nyc/">Life is Good</a>

                <a className="footer_inner" href="https://www.36chambazofstylz.org/">36 chambaz of stylz</a>

            </div>
        {/* <h1 className ='h1_title'>BATTLE 101</h1> */}

        </div >
       
    )
}