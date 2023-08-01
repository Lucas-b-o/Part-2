import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data)
    })
  },[])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterNameChange = (event) => setFilterName(event.target.value)

  const handleSubmitForm = (event) => {
    event.preventDefault()
    persons.filter((person) => person.name === newName).length > 0 ?
      alert(`${newName} is already added to phonebook`)
      :
      setPersons(persons.concat({ name: newName, number: newNumber }))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterNameChange={handleFilterNameChange} filterName={filterName}/>
      <h2>add a new</h2>
      <PersonForm
        handleSubmitForm={handleSubmitForm}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons filterName={filterName} persons={persons} />
    </div>
  )
}

export default App