const Post = ({ post }) => {
	const { title, subtitle, img, text } = post

	return (
		<div className="post">
			<div className="post__context">
				<h2 className="post__title">{title}</h2>
				<h3 className="blog__subtitle">{subtitle}</h3>
				<img src={img} alt="" className="post__img" />
				<div className="post__text-wrapper">
					<p className="post__text">{text}</p>
				</div>
			</div>
		</div>
	)
}
export default Post