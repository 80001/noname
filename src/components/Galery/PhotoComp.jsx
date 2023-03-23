import { useContext } from "react"
import { BlogContext } from "../../context/BlogContext"
import { copyUrl } from "../BlogWrite/CreatePost"

const PhotoComp = ({ photo }) => {

    const { user, urls, width, height, links } = photo
    const { modal, setModal } = useContext(BlogContext)

    const dwnld = `Size: ${width}x${height}`
    const handleComments = (e) => {
        setModal(!modal)
        copyUrl(e.target.currentSrc)
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
export default PhotoComp