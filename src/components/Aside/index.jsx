import { useState } from 'react'
import Button from '../Button'
import './styles.scss'



const Aside = () => {

    const [search, setSearch] = useState('')
    const [history, setHistory] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        handleHistory()
        setSearch('')
    }
    const handleChange = (e) => {
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
    console.log(search)
    console.log(history)
    return (
        <div className='aside'>
            <div className="aside__container">
                <div className="aside__search">
                    <div className="search">
                        <h3 className="search__title">Search:</h3>
                        <form onSubmit={handleSubmit} className="search__form">
                            <input type="form__text" onChange={handleChange} value={search} placeholder='Search...' />
                            <Button className='form__submit' type='submit'>Find</Button>
                        </form>
                        <div className="search__history">
                            <ul>
                                {history.map((item, index) => (
                                    <li className="" key={index}>
                                        {item}
                                    </li>
                                )
                                )}

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aside