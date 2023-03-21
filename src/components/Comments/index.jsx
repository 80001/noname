import './styles.scss'

const Comments = () => {

    return (
        <div className='sidebar'>
            <div className="sidebar__container">
                <div className="sidebar__comments">
                    <h3 className="comments__title">Comments</h3>
                    <span className="comments__text">
                        Click on image to write comments
                        <br />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Comments