import React from "react";

function Filter({sortFunction, filterFunction}){
    const handleFilterChange = (e)=> filterFunction(e.target.value)
    const handleSortChange = (e)=> sortFunction(e.target.value)
    return(
        <div className='filterWrapper'>
            <label>Filter if greased</label>
            <select onChange={handleFilterChange}>
                <option value="All">view all</option>
                <option value= "true" >Is greased</option>
                <option value="">Is not greased</option>
            </select>
            <label>Sort by</label>
            <select onChange={handleSortChange}>
                <option value="All">choose</option>
                <option value= "AToZ" >A to Z</option>
                <option value="ZToA">Z to A</option>
                <option value= "HeaviestToLightest" >Heaviest to lightest</option>
                <option value="LightestToHeaviest">lightest to heaviest</option>
            </select>
        </div>
    )
}

export default Filter