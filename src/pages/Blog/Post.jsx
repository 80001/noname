import { async } from "@firebase/util"
import { useEffect, useRef, useState } from "react"
import Button from "../../components/Button"
import { deletePosts } from "../../utils/firebase.utils"

const Post = ({ post }) => {
	const { title, subtitle, img, text } = post
	const [buttonName, setButtonName] = useState('X')
	const [hintTitle, setHintTitle] = useState('delete post')
	const [deleteCheck, setDeleteCheck] = useState(false)
	let time = 5

	const deletePost = (bool) => {
		setDeleteCheck(true)
		console.log(deleteCheck)
		let timer = setInterval(() => {
			console.log('start')
			console.log(deleteCheck)
			if (deleteCheck) {
				console.log('delete check true')
				setHintTitle('cancel')
				if (time <= 0) {
					console.log('finish')
					time = 5
					setButtonName('X')
					clearInterval(timer)
					setDeleteCheck(false)
				} else {
					console.log('delete check start 5to0')
					console.log(deleteCheck)
					if (deleteCheck === false) {
						console.log('cancel')
						clearInterval(timer)
						setButtonName('X')
						return
					} else {
						setButtonName(time)
						//console.log(time)
						--time
					}
				}
			} else {
				console.log('delete check false')
				setHintTitle('delete post')
				clearInterval(timer)
				time = 5
				setDeleteCheck(false)
			}
		}, 1000)
	}
		const [timer1, setTimer] = useState(null);
		const [counter, setCounter] = useState(5);
		const timerRef = useRef();

		const handleClick = () => {
			if (timer1) {
				clearInterval(timer1);
				setTimer(null);
				setCounter(5);
			} else {
				timerRef.current = setInterval(() => {
					setCounter((prevCounter) => prevCounter - 1);
				}, 1000);
				setTimer(timerRef.current);
			}
	}

	return (
		<div className="post">
			<div className="post__context">
				<h2 className="post__title">{title}</h2>
				<h3 className="blog__subtitle">{subtitle}</h3>
				<div className="post__img-wrapper">
					<img src={img} alt="" className="post__img" />
					<Button className='post__delete inverted' onClick={deletePost} type='button' title={hintTitle}>{buttonName}</Button>
				</div>

				<div>
					<button onClick={handleClick}>
						{timer1 ? `Cancel (${counter})` : "Start Timer"}
					</button>
				</div>
				<div className="post__text-wrapper">
					<p className="post__text">{text}</p>
				</div>
			</div>
		</div>
	)
}
export default Post