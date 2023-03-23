import React, { useContext, useState } from 'react'
import BlogWrite from '../../components/BlogWrite'
import Button from '../../components/Button'
import { BlogContext } from '../../context/BlogContext'
import Post from './Post'
import './styles.scss'

const Blog = () => {
    const { posts } = useContext(BlogContext)

    return (
        <div className="blog">
            <div className="blog__container">
                <h1 className="blog__main-title title-up">Blog or Not</h1>
                <h2 className="blog__main-subtitle title-up">Retard! You can read or write a post by yourself! If you can write, ofcourse!</h2>
                {posts.map(post => {
                    return (
                        <Post
                            key={post.id}
                            post={post} />
                    )
                })}
                <BlogWrite />
            </div>
        </div>
    )
}

export default Blog