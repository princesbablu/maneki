import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Social from './Social'
import Logo from './Logo';


export default function Header() {

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 200;
      setScrolled(isScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, setScrolled]);

  return (
    <>
      <header className={`heading ${scrolled ? 'position-fixed' : ''}`}>
        <Container>
          <div className='heading-wrap d-flex align-items-center justify-content-between'>
            <Logo />
            <div className="d-flex align-items-center gap-3 gap-lg-4">
              <div className="d-none d-md-block">
                <Social />
              </div>
              <a href="#" target='_blank' className='btn'>Buy $Maneki</a>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
