import { Link } from 'react-router-dom'
 import LOGO from "../assets/LOGO.svg"
 import "../styles/header.css"

function Header() {
    return (
        <div className='k-header'>
        <img src={LOGO} alt='Kasa' className='k-logo' />
        <nav className='k-nav'>
            <Link className='k-accueil k-font' to="/">Accueil</Link>
            <Link className='k-about k-font' to="/A-Propos">A Propos</Link>
        </nav>
        </div>
    )
}

export default Header