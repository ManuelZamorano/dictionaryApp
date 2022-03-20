import { React, useState } from "react";
import Axios from "axios";
import "./App.css";
import { FaSearch } from "react-icons/fa";
function App() {
// Setting up the initial states using react hook 'useState'
const [data, setData] = useState("");
const [searchWord, setSearchWord] = useState("");
// Function to fetch information on button
// click, and set the data accordingly
function getMeaning() {
	Axios.get(
	`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
	).then((response) => {
	setData(response.data[0]);
	});
}
// Function to searched word
function searchDict() {
	
}
return (
	<div className="App">
	<h1>Lookup in Dictionary</h1>
	<div className="searchBox">
		
		<input
		type="text"
		placeholder="Search..."
		onChange={(e) => {
			setSearchWord(e.target.value);
		}}
		/>
		<button
		onClick={() => {
      // Calls API to get results
			getMeaning();
		}}
		>
		<FaSearch size="20px" />
		</button>
	</div>
	{data && (
		<div className="showResults">
	
		<h4>Parts of speech:</h4>
		
<p>{data.meanings[0].partOfSpeech}</p>

		<h4>Definition:</h4>
		
<p>{data.meanings[0].definitions[0].definition}</p>

		<h4>Example:</h4>
		
<p>{data.meanings[0].definitions[0].example}</p>
		</div>
	)}
	</div>
);
}
export default App;