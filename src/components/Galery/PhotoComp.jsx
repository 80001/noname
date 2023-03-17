
export const PhotoComp = ({ photo }) => {
    const { user, urls, width, height, links } = photo
    const dwnld = `Size: ${width}x${height}`

    return (
        <div>
            <img
                src={urls.regular}
                alt="img"
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
                className="galery__credit">{user.name}</a>
        </div>
    )
}
