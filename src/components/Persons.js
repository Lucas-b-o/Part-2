import React from 'react'

const Persons = ({filterName, persons}) => {
    return (
        <>
            {filterName === '' ? (
                persons.map((person) => <p key={person.name}>{person.name} {person.number}</p>)
            ) : persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase())).map(
                (person) => <p key={person.name}>{person.name} {person.number}</p>
            )}
        </>
    )
}

export default Persons