import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"

export const PhotoComp = ({ photo }) => {

    const { user, urls, width, height, links, description, alt_description, id, created_at } = photo
    const { showComments, setShowComments, writeComments, setWriteComments } = useContext(SearchContext)
    const dwnld = `Size: ${width}x${height}`
    const handleComments = () => {
        console.log(writeComments)
        setWriteComments(!writeComments)
        setShowComments(!showComments)
    }

    return (
        <div>
            <img
                src={urls.regular}
                alt="img"
                onClick={handleComments}
                className="galery__img" />
            <a
                href={links.download}
                className="galery__download"
                title={dwnld}
            >Down⌊✓⌋load</a>
            <a
                href={`https://unsplash.com/@${user.username}`}
                target='_blank'
                title="Author"
                rel="noreferrer"
                className="galery__credit">{user.name}
            </a>
        </div>
    )
}

const CommentsWrite = ({ photo }) => {

    console.log('photo', photo)
    return (
        <div className='sidebar'>
            <div className="sidebar__container">
                <div className="sidebar__write">
                    <h3 className="write__title">Write Comments</h3>
                    <span className="write__text">
                        Write something right now!
                        <br />
                        <br />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CommentsWrite