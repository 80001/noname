import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import Button from '../Button'
import './styles.scss'



const Aside = () => {

  const { setSearch, setHistory, history, search, setOrientation, setPage } = useContext(SearchContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleHistory()
    setSearch('')
  }
  const handleChange = (e) => {
    setPage(1)
    setSearch(e.target.value)
  }
  const handleHistory = () => {
    const maxLenght = 5
    if (history.length < maxLenght) {
      return setHistory([...history, search])
    }

    const slicedHistory = history.filter((item, index) => index !== 0)
    setHistory([...slicedHistory, search])
  }

  return (
    <div className='aside'>
      <div className="aside__container">
        <div className="aside__search">
          <div className="search">
            <h3 className="search__title aside-title">Search:</h3>
            <form onSubmit={handleSubmit} className="search__form">
              <input className="search__input" onChange={handleChange} value={search} placeholder='Search...' />
              <Button>Find</Button>
            </form>
            <div className="search__history">
              <span className="history__title">Search history:</span>
              <ul className='history__block'>
                {history.reverse().map((item, index) => (
                  <li className="history__item" key={index}>
                    {item}
                  </li>))}
              </ul>
            </div>
          </div>
          <div className="filter">
            <h3 className="filter__title aside-title">Filter:</h3>
            <div className="filter__orientation">
              <h5 className="filter__subtitle">Orientation</h5>
              <select
                name="orientation"
                id="orientation"
                className="filter__or"
                onChange={(value) => setOrientation(value.target.value)}>
                <option defaultValue="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
                <option value="squarish">Squarish</option>
              </select>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Aside