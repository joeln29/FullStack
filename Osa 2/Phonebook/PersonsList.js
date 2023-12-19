import React from "react";

const PersonsList = ({filteredPersons}) => {
    return (
       <ul>
        {filteredPersons.map(person => <li key={person.id}> {person.name} {person.number}</li>)}
       </ul> 
    );
}

export default PersonsList;