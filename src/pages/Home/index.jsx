import './styles.scss'
import { Outlet } from 'react-router-dom'
import Aside from '../../components/Aside'
import Galery from '../../components/Galery'
import Comments from '../../components/Comments'
import Footer from '../Footer'

const Home = () => {
    return (
        <>
            <div className='wrapper'>
                <Outlet />
                <Aside />
                <Galery />
                <Comments />
            </div>
            <Footer />
        </>
    )
}
export default Home