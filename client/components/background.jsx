import React from 'react'

const Background = (props) => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return(
        <div id="background">
            {document.getElementById('background').style.color = rgb(r,g,b)}
        </div>
    )
}

export default Background;