import React from "react";
import notes from "../services/notes";

const PersonsList = ({ filteredPersons, setPersons, setMessage }) => {

  const deleted = (person) => {
    if(window.confirm(`Delete ${person.name}?`)) {
      notes
      .remove(person.id)
      .then(response => {
        const updated = filteredPersons.filter(p => p.id !== person.id);
        setPersons(updated);
        setMessage(`${person.name} removed succesfully`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch(error => {
        setMessage(`Error deleting ${person.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        console.error("Error deleting contact:", error);
      })
    }
  }
  
  return (
    <div>
      <ul>
        {filteredPersons.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
            <button onClick={() => deleted(person)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonsList;