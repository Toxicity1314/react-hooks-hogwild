import React, { useState } from "react";

function Card({hog}){
    const defaultClass ={
        normalText: "normalText",
        achievementText: "achievementText"
}
const [pigDisplay, setPigDisplay] = useState('')
    const handlePigDisplay = ()=>{
        if(pigDisplay === "none"){
            setPigDisplay("")
        }else{
            setPigDisplay('none')
        }
    }
    const starterDisplay= ([])


    
    const [display, setDisplay]= useState("none")
    const handleClick = ()=>{
        if(display === "none"){
            setDisplay("")
        }else{
            setDisplay('none')
        }
    }
    return(
        <div className="ui eight wide column">
            <div className="pigTile" >
            <button onClick={handlePigDisplay}>hide hog</button>
            <div style={{display:[pigDisplay]}}>
                <h3 className='hoggyText'>{hog.name}</h3>,
                <img src={hog.image} alt="hello" className='minPigTile' onClick={handleClick}/>
                    <ul >
                        <li className="normalText" style={{display: [display]}}>specialty {hog.specialty}</li>
                        <li className="normalText" style={{display: [display]}}>{hog.weight}Lbs</li>
                        <li className="normalText" style={{display: [display]}}>{hog.greased ? "is greased": "is not greased"}</li>
                        <li className="achievementText" style={{display: [display]}}>Highest medal achieved {hog["highest medal achieved"]}</li>
                    </ul>
            </div>    
            </div>
        </div>
    )
}

export default Card