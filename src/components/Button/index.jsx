import './styles.scss'


const Button = ({ children, ...otherProps }) => {
    const { className } = otherProps
    return (
        <button {...otherProps} className={`button-container ${className}`} >
            {children}
        </button>
    )
}
export default Button