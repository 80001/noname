import { createContext, useEffect, useState } from "react";
import { addPosts } from "../utils/firebase.utils";

export const BlogContext = createContext({
	posts: [],
	setPosts: () => { },
	title: '',
	setTitle: () => { },
	subtitle: '',
	setSubtitle: () => { },
	img: '',
	setImg: () => { },
	text: '',
	setText: () => { },
	id: '',
	setId: () => { },
	modal: false,
	setModal: () => { },

})
export const BlogProvider = ({ children }) => {
	const [id, setId] = useState(0)
	const [title, setTitle] = useState('')
	const [subtitle, setSubtitle] = useState('')
	const [img, setImg] = useState('')
	const [text, setText] = useState('')
	const [modal, setModal] = useState(false)
	const defaultPost = {
		title: 'Title',
		subtitle: 'Subtitle',
		img: 'https://images.unsplash.com/photo-1679032227470-8fe23399deac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, magnam iste consequuntur laudantium distinctio, assumenda soluta temporibus voluptatum, laboriosam aperiam illum provident dolore alias fuga totam cum nobis harum porro.',
		id: 0
	}
	const [posts, setPosts] = useState([defaultPost])

	useEffect(() => {
		addPosts(title, subtitle, img, text, id)
		setTitle('')
		setSubtitle('')
		setImg('')
		setText('')
	}, [posts.length])

	const value = {
		posts,
		title,
		subtitle,
		img,
		text,
		id,
		modal,
		setImg,
		setPosts,
		setSubtitle,
		setText,
		setTitle,
		setId,
		setModal
	}
	return (
		<BlogContext.Provider value={value}>
			{children}
		</BlogContext.Provider>
	)
}