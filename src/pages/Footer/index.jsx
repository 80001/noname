import './styles.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__all">
                <div className="footer__img">
                    <a href="/" className="footer__link">LOGO</a>
                </div>
                <div className="footer__nav">
                    <a href="/blog" className="footer__link">Blog</a>
                    <a href="/auth" className="footer__link">Sign in</a>
                </div>
            </div>
            <div className="footer__info">2023 © DISKPISK ™</div>
        </div>
    )
}

export default Footer