import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [countries, setCountries] = useState(null)
  const [list, setList] = useState(null)
  const [text, setText] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response =>
      setCountries(response.data)
    )
  }, [])

  useEffect(() => {
    if (countries) {
      setList(countries?.filter((countrie) => {
        return (countrie.name.common.toUpperCase()).includes(text.toUpperCase())
      }))
    }
  }, [countries, text])

  if (!countries) {
    return null
  }

  const handleInput = (event) => setText(event.target.value)

  return (
    <div>
      <p> find countries <input value={text} onChange={handleInput} /></p>
      {list?.length === 1 ? (
        <>
          <h2>{list[0].name.common}</h2>
          <div>
            <p>Capital {list[0].capital}</p>
            <p>Area {list[0].area}</p>
          </div>
          <div>
            <h3>Languages</h3>
            <ul>
              {Object.entries(list[0].languages).map(([key, value]) => (
                <li key={key}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <img alt="flag" src={list[0].flags.png}/>
        </>
      ) : (
        list?.length < 11 ? (
          list?.map(content => <p key={content.name.common}>{content.name.common}</p>)
        ) : 'Too many matches, specify another filter')}
    </div>
  )
}

export default App