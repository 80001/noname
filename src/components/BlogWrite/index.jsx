import React, { useContext, useState } from 'react'
import Button from '../../components/Button'
import { BlogContext } from '../../context/BlogContext'
import CreatePost from './CreatePost'
import './styles.scss'

const BlogWrite = () => {
    const { modal, setModal } = useContext(BlogContext)
    const showModal = () => {
        setModal(!modal)
        console.log(modal)
        setModal(!modal)
        console.log(modal)
    }
    const buttonTitle = () => {
        if (!modal) return 'Create Post'
        return 'Cancel'
    }
    const modalBg = () => {
        if (modal) return 'modal-bg'
        return 'disable'
    }
    const disableModal = () => {
        if (modal) return 'write__modal'
        return 'disable'
    }

    return (
        <div className="write">
            <div className={modalBg()}></div>
            <div className={disableModal()}>
                {modal && 
                <Button className='blog__button'
                onClick={showModal}>{buttonTitle()}
                    </Button>
            }
                {modal &&
                    <CreatePost />
                }
            </div>
        </div>
    )
}

export default BlogWrite