import css from './header.module.css'
import logo from '../UI/header-logo.png'
const Header = () => {
    return <header className={css.header}>
        <img src={logo} alt="" />
    </header>
}
export default Header;