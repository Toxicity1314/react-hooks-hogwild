import React from "react";
import Card from './Card'


function CardList({sortedHogs}){
    

    return(
        <div className ="ui grid container">
            {sortedHogs.map(hog => <Card key={hog.name} hog={hog} />)}
        </div>

    )
}

export default CardList