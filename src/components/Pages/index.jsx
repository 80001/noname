import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"

const Pages = (data) => {
	const { page, setPage } = useContext(SearchContext)
	const { lastPage } = data
	const pageDisabledMin = () => {
		if (page === 1) {
			return true
		}
		return false
	}
	const pageDisabledMax = () => {
		if (page === lastPage) {
			return true
		}
		return false
	}
	const pageSetPlus = () => {
		if (page === lastPage) {
			setPage(lastPage)
		}
		setPage(Number(page) + 1)
		console.log('page+', page)
	}
	const pageSetMinus = () => {
		if (page <= 1) {
			return page
		}
		setPage(Number(page) - 1)
		console.log('page-', page)
	}
	const pageEnter = (e) => {
		setPage(e.target.value)
	}

	return (
		<div className="galery__pages">
			<button className="galery__page"
				disabled={pageDisabledMin()}
				onClick={pageSetMinus}>Prev</button>
			<input
				type="number"
				min={1}
				max={lastPage}
				onChange={pageEnter}
				value={page}
				placeholder='69'
				className="galery__page galery__page-input" />
			<button className="galery__page"
				disabled={pageDisabledMax()}
				onClick={pageSetPlus}>Next</button>
			<button className="galery__page">{lastPage}</button>
		</div>
	)
}
export default Pages