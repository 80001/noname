import { Outlet } from 'react-router-dom'
import './styles.scss'

const Navigation = () => {

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
                    </ul>
                </div>
            </header>
            <Outlet />
        </>
    )
}
export default Navigation