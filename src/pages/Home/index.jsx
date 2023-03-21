import './styles.scss'
import { Outlet } from 'react-router-dom'
import Aside from '../../components/Aside'
import Galery from '../../components/Galery'
import Comments from '../../components/Comments'
import Footer from '../Footer'
import { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext'
import CommentsWrite from '../../components/Galery/PhotoComp'



const Home = () => {

    window.addEventListener('scroll', e => {
        document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
        const hide = document.querySelector('.button-up')
        if (window.scrollY >= 1000) {
            hide.classList.remove('hide')
        } else {
            hide.classList.add('hide')
        }
    })
    const scrollUp = () => {
        window.scrollTo(0, 0)
    }
    const { showComments, writeComments } = useContext(SearchContext)


    return (
        <>
            <div className='wrapper' >
                <Outlet />
                <Aside />
                <Galery />
                {showComments && <Comments />}
                {showComments}
                {writeComments && <CommentsWrite />}
            </div>
            <button
                className='button-up button-container hide'
                onClick={scrollUp}>↑↟↑</button>
            <Footer />
        </>
    )
}
export default Home