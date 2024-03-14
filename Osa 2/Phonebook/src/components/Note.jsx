const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className="note">
      {note.content} 
      <button onClick={toggleImportance}>{label}kissa</button>
    </li>
  )
}

export default Note