import { useContext, useState } from "react"
import Button from "../Button"
import { BlogContext } from "../../context/BlogContext"

const defaultValues = {
	title: '',
	subtitle: '',
	img: '',
	text: '',
}
export const copyUrl = (url) => {
	defaultValues.img = url
	console.log(defaultValues.img)
}
const CreatePost = () => {
	const [values, setValues] = useState(defaultValues)
	const { setImg,
		setSubtitle,
		setTitle,
		setText,
		setModal,
		setPosts,
		setId,
		setPostsMap,
		posts,
		img,
		title,
		subtitle,
		text,
		id,
		postsMap } = useContext(BlogContext)
	const copyImg = (e) => {
		setImg(e.target.value)
		console.log(img)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setPosts([...posts, { title, subtitle, img, text, id }])
		setModal(false)
		console.log(posts)
	}
	const handleChange = (e) => {
		const { name, value } = e.target
		setId(postsMap.length + 1)
		setValues({ ...values, [name]: value })
		console.log(values)
		if (name === 'title') {
			setTitle(value)
		} else if (name === 'subtitle') {
			setSubtitle(value)
		} else if (name === 'img') {
				setImg(value)
		} else if (name === 'text') {
			setText(value)
		}
	}
	const submitEnable = () => {
		if (img||defaultValues.img
			&& subtitle
			&& text
			&& title) return false
		return true
	}

	return (
		<div className="write__context">
			<div className="write__main-context">
				<h3 className="write__title title-up">Create Your Post</h3>
				<h4 className="write__subtitle title-up">Fill in all fields to  post your shity opinion!</h4>
				<form className="write__form" onSubmit={handleSubmit}>
					<h5 className="write__form-title title-up">Title:</h5>
					<input
						type="text"
						required
						name="title"
						value={values.title}
						onChange={handleChange}
						className="write__add-title"
						minLength={1}
						maxLength={10}
						placeholder="<=10 Symbols" />
					<h5 className="write__form-title title-up">Subtitle:</h5>
					<input
						type="url"
						pattern="url"
						required
						name="subtitle"
						value={values.subtitle}
						onChange={handleChange}
						className="write__add-subtitle"
						minLength={1}
						maxLength={100}
						placeholder="<=100 Symbols" />
					<h5 className="write__form-title title-up">Image-Url:</h5>
					<input
						type="text"
						contentEditable='true'
						required
						name="img"
						id="img"
						value={values.img}
						onInput={copyImg}
						onChange={handleChange}
						minLength={10}
						className="write__add-img"
						placeholder="URL" />
					<h5 className="write__form-title title-up">Text:</h5>
					<input
						type="text"
						required
						name="text"
						value={values.text}
						onChange={handleChange}
						className="write__add-text"
						min={1}
						maxLength={5000}
						placeholder="<=5000 Symbols" />
				</form>
			</div>
			<Button className='write__button' disabled={submitEnable()} onClick={handleSubmit} title='FILL ALL COLUMNS'>Submit</Button>
		</div>
	)
}
export default CreatePost