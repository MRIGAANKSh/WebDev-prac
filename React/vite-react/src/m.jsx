import React from "react"

function M(){
    return(
        <div>
            <a href="www.goggle.com" target="_blank"> Click m dumb</a>
        </div>    
    )
}


const areact=React.createElement(
    'a',
    {href:"https://goggle.com",target:"_blank" },
    'click to visit me '
)

export default M

