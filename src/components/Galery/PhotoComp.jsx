export const PhotoComp = ({ photo }) => {
    const { user, urls } = photo

    return (
        <div>
            <img
                src={urls.regular}
                alt="img"
                className="galery__img" />
            <a
                href={`https://unsplash.com/@${user.username}`}
                target='_blank'
                rel="noreferrer"
                className="galery__credit">{user.name}</a>
        </div>
    )
}
