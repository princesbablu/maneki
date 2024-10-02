import logo from '../assets/img/logo.svg'
import favicon from '../assets/img/favicon.svg'
import {Link} from 'react-scroll'

export default function Logo() {
  return (
    <Link className="logo" to="banner" spy={true} smooth={true} duration={600} offset={0}>
        <img src={logo} className='d-md-none d-lg-block' alt="site-logo" />
        <img src={favicon} className='d-none d-md-block d-lg-none' alt="site-logo" />
    </Link>
  )
}
