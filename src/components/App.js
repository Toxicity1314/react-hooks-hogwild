import React, {useState} from "react";
import Nav from "./Nav";
import CardList from './CardList'
import Filter from './Filter'

import hogs from "../porkers_data";

function App() {
	const [sortedHogs, setSort] = useState(hogs)
	const filterFunction= (value)=>{
		if (value === "All"){
			setSort(hogs)
		}else if(value === 'true' || value === ""){
			const sortThemHogs =value ? hogs.filter(hog => hog.greased) : hogs.filter(hog => !hog.greased)
			setSort(sortThemHogs)
		}
	}
	const sortFunction= (value)=>{
		if(value==="AToZ"){
			sortedHogs.sort((a, b) =>{
				let fa = a.name.toLowerCase(),
				fb = b.name.toLowerCase();
		
			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
			})
		}else if(value==="ZToA"){
			sortedHogs.sort((a, b) =>{
				let fa = a.name.toLowerCase(),
				fb = b.name.toLowerCase();
		
			if (fb < fa) {
				return -1;
			}
			if (fb > fa) {
				return 1;
			}
			return 0;
			})
		}else  if(value==="HeaviestToLightest"){
			sortedHogs.sort((a,b) =>{
				return b.weight - a.weight
				
			})
		}else if(value==="LightestToHeaviest"){
			sortedHogs.sort((a,b) =>{
				return a.weight - b.weight
				
			})
		}
		setSort([...sortedHogs])

	}
	console.log(sortedHogs)
	return (
		<div className="App">
			<Nav />
			<Filter sortFunction={sortFunction} filterFunction={filterFunction}/>
			<CardList className ="ui grid container" sortedHogs={sortedHogs}/>
		</div>
	);
}

export default App;
