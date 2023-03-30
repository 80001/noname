import './styles.scss'
import { Outlet } from 'react-router-dom'
import Aside from '../../components/Aside'
import Galery from '../../components/Galery'
import Footer from '../Footer'
import { useContext, useEffect } from 'react'
import { SearchContext } from '../../context/SearchContext'
import BlogWrite from '../../components/BlogWrite'
import PhotoComp from '../../components/Galery/PhotoComp'
import { BlogContext } from '../../context/BlogContext'
import { getPosts } from '../../utils/firebase.utils'

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
    const { posts, setPostsMap } = useContext(BlogContext)
    useEffect(() => {
        const getPostsMap = async () => {
            const postMap = await getPosts()
            setPostsMap(postMap)
        }
        getPostsMap()
    }, [posts])

    return (
        <>
            <div className='wrapper' >
                <Outlet />
                <Aside />
                <Galery />
                {showComments && <BlogWrite />}
                {showComments}
                {writeComments && <PhotoComp />}
            </div>
            <button
                className='button-up button-container hide'
                onClick={scrollUp}>↑↟↑</button>
            <Footer />
        </>
    )
}
export default Home