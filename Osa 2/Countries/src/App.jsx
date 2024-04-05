import {useEffect, useState} from "react";
import countryServices from "./services/countryServices";
import DisplayCountries from "./components/DisplayCountries";

const App = () => {
	const [search, setSearch] = useState('');
	const [countries, setCountries] = useState([]);
	const [message, setMessage] = useState(null);
	const [filteredCountries, setFilteredCountries] = useState([]);

	useEffect(() => {
		countryServices
		.getAll()
		.then(response => {
			setCountries(response)
		})
	}, [])

	useEffect(() => {
		if(search) {
			const filtered = countries.filter(country => 
				country.name.common.toLowerCase().includes(search.toLowerCase())
			)
			if(filtered.length > 10){
				setMessage(`Too many matches, specify another filter`);
				setFilteredCountries([]);
			} else {
				setMessage(null);
				setFilteredCountries(filtered);
			}
		} else {
			setMessage(null);
			setFilteredCountries([]);
		}
	}, [search])

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const handleShowButton = (country) => {
		setSearch(country.name.common);
	}

	return (
		<div>
			Find countries:
			<input type="text" value={search} onChange={handleSearchChange} id="input"/>
			{message && <p>{message}</p>}
			<DisplayCountries countries={filteredCountries} showCountry={handleShowButton} />
		</div>
	)
}

export default App