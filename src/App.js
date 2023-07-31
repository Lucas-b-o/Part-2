import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) =>
    setNewName(event.target.value)


  const handleSubmitForm = (event) => {
    event.preventDefault()
    persons.filter((person) => person.name === newName).length > 0 ?
      alert(`${newName} is already added to phonebook`)
      :
      setPersons(persons.concat({ name: newName }))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmitForm}>
        <div>
          name: <input onChange={handleInputChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <p key={person.name}>{person.name}</p>)}
      ...
      <div>debug: {newName}</div>
    </div>
  )
}

export default App