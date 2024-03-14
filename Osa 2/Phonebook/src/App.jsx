// npm run dev
// npm run server

import {useEffect, useState} from "react";
import AddNameForm from "./components/AddNameForm";
import FilterInput from "./components/FilterInput";
import PersonsList from "./components/PersonsList";

import noteService from "./services/notes"

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newSearch, setNewSearch] = useState('');

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

    // Check if the name already exists
    const exists = persons.find(person => person.name === nameObject.name);
    if(exists){
      if(window.confirm(`${nameObject.name} is already added to phonebook, replace the older number with a new one?`)) {
        const updatePerson = {...exists, number};
        noteService
        .update(exists.id, updatePerson)
        .then((returnedPerson => {
        setPersons(persons.map(person => person.id === exists.id ? returnedPerson : person));
        }))
      } 
    } else {
      setPersons(persons.concat(nameObject));
      noteService
      .create(nameObject)
      .then((returnedPerson => {
        setPersons(persons.concat(returnedPerson));
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
    <FilterInput handleSearchChange={handleSearchChange} />
    <h2>Add a new</h2>
    <AddNameForm addName={addName} />
    <h2>Numbers</h2>
    <PersonsList filteredPersons={filteredPersons} setPersons={setPersons} />
  </div>
  )
}

export default App