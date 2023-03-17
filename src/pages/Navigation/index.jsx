import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Button from '../../components/Button'
import { SearchContext } from '../../context/SearchContext'
import './styles.scss'

const Navigation = () => {
    const { showComments, setShowComments } = useContext(SearchContext)

    const handleComments = () => {
        setShowComments(!showComments)
        console.log(showComments)
    }
    return (
        <>
            <header className="navigation">
                <div className="navigation__container">
                    <div className="navigation__logo">
                        <a href="/" className="logo">
                            <span className="logo-img">
                                LOGO
                            </span>
                        </a>
                    </div>
                    <ul className="navigation__links">
                        <li className="links"><a href="/blog" className="links-link">Blog</a></li>
                        <li className="links"><a href="/auth" className="links-link">Sign In</a></li>
                        <Button onClick={handleComments}>Comments</Button>
                    </ul>
                </div>
            </header>
            <Outlet />
        </>
    )
}
export default Navigation