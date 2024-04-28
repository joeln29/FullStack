import {useEffect, useState} from "react";
import AddNameForm from "./components/AddNameForm";
import FilterInput from "./components/FilterInput";
import PersonsList from "./components/PersonsList";
import Notification from "./components/Notification"

import noteService from "./services/notes"

const App = () => {
const [persons, setPersons] = useState([]);
const [newSearch, setNewSearch] = useState('');
const [message, setMessage] = useState(null);

useEffect(() => {
	noteService
	.getAll()
	.then(initialPersons => {
	setPersons(initialPersons)
	})
}, [])

const addName = (name, number) => {
	const nameObject = {
		name,
		number
	};
	
	if(name === ''){
		return;
	}
	
	const exists = persons.find(person => person.name === nameObject.name);
	if(exists){
		const updatePerson = {...exists, number};
		noteService
		.update(exists.id, updatePerson)
		.then((returnedPerson => {
			setPersons(persons.map(person => person.id === exists.id ? returnedPerson : person));
			setMessage(`Updated ${name}`)	
		}))
	} else {
		setPersons(persons.concat(nameObject));
		noteService
		.create(nameObject)
		.then((returnedPerson => {
			setPersons(persons.concat(returnedPerson));
			setMessage(`Added ${name}`)
			setTimeout(() => {
				setMessage(null)
			}, 5000)
		}))
	}
}

const handleSearchChange = (event) => {
	setNewSearch(event.target.value);
};

const filteredPersons = persons.filter(person =>
	person.name && person.name.toLowerCase().includes(newSearch.toLowerCase())
);

return (
<div>
	<h1>Phonebook</h1>
	<Notification message={message} />
	<FilterInput handleSearchChange={handleSearchChange} />
	<h2>Add a new</h2>
	<AddNameForm addName={addName} />
	<h2>Numbers</h2>
	<PersonsList filteredPersons={filteredPersons} setPersons={setPersons} setMessage={setMessage} />
</div>
)}

export default App