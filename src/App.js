import Filter from './components/Filter'
import Persons from './components/Persons'
import { useEffect, useState } from 'react'
import personsService from './services/persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response)
    })
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterNameChange = (event) => setFilterName(event.target.value)

  const handleSubmitForm = (event) => {
    event.preventDefault()

    const person = persons.filter(person => person.name === newName)

    if (persons.filter(person => person.name === newName).length > 0) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsService.update(person[0].id, {...person[0], number: newNumber}).then(response => {
          setPersons(persons.map(oldPerson => oldPerson.id !== person[0].id ? oldPerson : response))
          setNotificationMessage('Update ' + newName)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        }).catch(error => {
          setErrorMessage(`Information of ${newName} has already benn removed from server`)
          setErrorMessage(() => {
            setNotificationMessage(null)
          }, 5000)
        })
      }
    } else {
      personsService.create({ name: newName, number: newNumber })
        .then(response => {
          setPersons(persons.concat(response))
          setNotificationMessage('Added ' + newName)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        }).catch(error => {
          setErrorMessage(`Error`)
          setErrorMessage(() => {
            setNotificationMessage(null)
          }, 5000)
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (id) => {
    if (window.confirm("Do you really want delete this number?")) {
      personsService.deleteNumber(id).then(response => {
        setPersons(persons.filter(person => person.id !== id))
      }).catch(error => {
        setErrorMessage(`Error on delete`)
        setErrorMessage(() => {
          setNotificationMessage(null)
        }, 5000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} color='green'/>
      <Notification message={errorMessage} color='red'/>
      <Filter handleFilterNameChange={handleFilterNameChange} filterName={filterName} />
      <h2>add a new</h2>
      <PersonForm
        handleSubmitForm={handleSubmitForm}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons filterName={filterName} persons={persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App