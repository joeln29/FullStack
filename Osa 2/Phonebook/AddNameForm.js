import React, {useState} from "react";

const AddNameForm = ({addName}) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    
    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addName(newName, newNumber);
        setNewName('');
        setNewNumber('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddNameForm;