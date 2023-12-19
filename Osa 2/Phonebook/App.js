import {useState} from "react";
import AddNameForm from "./AddNameForm";
import FilterInput from "./FilterInput";
import PersonsList from "./PersonsList";

const App = () => {
  const [persons, setPersons] = useState([
	{
	  name: 'Arto Hellas',
	  number: '040-1231244',
	  id: 1
	},
	{name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
	{name: 'Dan Abramov', number: '12-43-234345', id: 3},
	{name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
  ])

  const [newSearch, setNewSearch] = useState('')

  const addName = (name, number) => {
	const nameObject = {
		name,
		number,
		id: persons.length + 1
	};

	// Check if the name already exists
	if(persons.some(person => person.name === nameObject.name)){
	  	alert(`${nameObject.name} is already added to phonebook`);
	} else {
		setPersons(persons.concat(nameObject));
	}
  }

  const handleSearchChange = (event) => {
	  setNewSearch(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
	  person.name.toLowerCase().includes(newSearch.toLowerCase())
  );

  return (
	<div>
	  <h2>Phonebook</h2>
	  <FilterInput handleSearchChange={handleSearchChange} />
	  <h2>add a new</h2>
	  <AddNameForm addName={addName} />
	  <h2>Numbers</h2>
	  <PersonsList filteredPersons={filteredPersons}/>
	</div>
  )
}

export default App