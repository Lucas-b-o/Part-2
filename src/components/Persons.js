import React from 'react'

const Persons = ({filterName, persons, handleDelete}) => {
    return (
        <>
            {filterName === '' ? (
                persons.map((person) => <p key={person.name}>{person.name} {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button></p>)
            ) : persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase())).map(
                (person) => <p key={person.name}>{person.name} {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button></p>
            )}
        </>
    )
}

export default Persons