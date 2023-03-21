import { useContext } from "react"
import Button from "../../components/Button"
import { BlogContext } from "../../context/BlogContext"

const CreatePost = () => {

	const { setImg, setSubtitle, setTitle, setText, setPosts, setId, posts, img, title, subtitle, text, id } = useContext(BlogContext)
	const handleSubmit = (e) => {
		e.preventDefault()
		setPosts([...posts, { title, subtitle, img, text, id }])
		console.log(posts)
	}
	const handleChange = (e) => {
		setTitle(e.target.value)
		setSubtitle(e.target.value)
		setImg(e.target.value)
		setText(e.target.value)
		setId(posts.length + 1)
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
						onChange={handleChange}
						className="write__add-title"
						maxLength={10}
						placeholder="<=10 Symbols" />
					<h5 className="write__form-title title-up">Subtitle:</h5>
					<input
						type="text"
						required
						onChange={handleChange}
						className="write__add-subtitle"
						maxLength={100}
						placeholder="<=100 Symbols" />
					<h5 className="write__form-title title-up">Image-Url:</h5>
					<input
						type="text"
						required
						onChange={handleChange}
						className="write__add-img"
						placeholder="URL" />
					<h5 className="write__form-title title-up">Text:</h5>
					<input
						type="text"
						required
						onChange={handleChange}
						className="write__add-text"
						maxLength={5000}
						placeholder="<=5000 Symbols" />
				</form>
			</div>
			<Button className='write__button' onClick={handleSubmit}>Submit</Button>
		</div>
	)
}
export default CreatePost