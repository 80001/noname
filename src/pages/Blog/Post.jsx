import { useEffect, useRef, useState } from "react"
import Button from "../../components/Button"
import { deletePosts } from "../../utils/firebase.utils"

const Post = ({ post }) => {
	const { title, subtitle, img, text } = post
	const [buttonName, setButtonName] = useState('X')
	const [hintTitle, setHintTitle] = useState('delete post')
	const [deleteCheck, setDeleteCheck] = useState(null)
	const [timer, setTimer] = useState(5)
	const [cancel, setCancel] = useState(true)

	useEffect(() => {
		let intervalId

		if (timer > 0 && !cancel) {
			intervalId = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1)
			}, 1000)
		} else if (timer === 0 && !cancel) {
			setCancel(true)
			setTimer(5)
			setButtonName("X")
			setHintTitle("delete post")
			deletePosts(post.id)
		}

		return () => clearInterval(intervalId)
	}, [timer, cancel])

	const handleClick = () => {
		if (cancel) {
			setCancel(false)
			setTimer(5)
		} else {
			setCancel(true)
			setTimer(5)
			setButtonName("X")
			setHintTitle("delete post")
		}
	}

	useEffect(() => {
		if (timer > 0 && !cancel) {
			setButtonName(timer)
		}
	}, [timer, cancel])

	return (
		<div className="post">
			<div className="post__context">
				<h2 className="post__title">{title}</h2>
				<h3 className="blog__subtitle">{subtitle}</h3>
				<div className="post__img-wrapper">
					<img src={img} alt="" className="post__img" />
					<Button
						className="post__delete inverted"
						onClick={handleClick}
						type="button"
						title={hintTitle}
					>
						{buttonName}
					</Button>
				</div>
				<div className="post__text-wrapper">
					<p className="post__text">{text}</p>
				</div>
			</div>
		</div>
	)
}

export default Post
