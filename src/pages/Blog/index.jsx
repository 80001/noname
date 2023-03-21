import React, { useContext, useState } from 'react'
import Button from '../../components/Button'
import { BlogContext } from '../../context/BlogContext'
import CreatePost from './CreatePost'
import Post from './Post'
import './styles.scss'

const Blog = () => {
    const { posts } = useContext(BlogContext)
    const [modal, setModal] = useState(false)
    const showModal = () => {
        setModal(!modal)
    }
    const buttonTitle = () => {
        if (!modal) return 'Create Post'
        return 'Cancel'
    }
    const modalBg = () => {
        if (modal) return 'modal-bg'
        return ''
    }

    return (
        <div className="blog">
            <div className="blog__container">
                <h1 className="blog__main-title title-up">Blog or Not</h1>
                <h2 className="blog__main-subtitle title-up">Retard! You can read or write a post by yourself! If you can write, ofcourse!</h2>
                {posts.map(post => {
                    console.log(post)
                    return (
                        <Post
                            key={post.id}
                            post={post} />
                    )
                })}
                <div className="write">
                    <div className={modalBg()}></div>
                    <div className="write__modal">
                        <Button className='blog__button'
                            onClick={showModal}>{buttonTitle()}</Button>
                        {modal &&
                            <CreatePost />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog