import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import './styles.scss'

const Comments = () => {
    const { history, search, showComments, orientation, noOrientation } = useContext(SearchContext)
    console.log(orientation)
    console.log(noOrientation)
    const index = history.length - 1
    return (
        <div className='sidebar'>
            <div className="sidebar__container">
                {showComments &&
                    <div className="sidebar__comments">
                        <h3 className="comments__title">Comments</h3>
                        <span className="comments__text">
                            Click on image to write comments
                            <br />
                            <br />
                            <span>{search}</span>
                            <br />
                            <span>Search: {history[index]}</span>
                            <br />
                            <span>{orientation}</span>
                        </span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Comments