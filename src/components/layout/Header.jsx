import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
import "./Header.css";

const Header = () => {
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
    const { isScrolled } = useScrollPosition({
      threshold: 130,
      mobileOnly: true,
      mobileBreakpoint: 768
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1075 && dropdownMenuOpen === true) {
            setDropdownMenuOpen(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [dropdownMenuOpen]);

    const handleDropdownMenu = () => {
        dropdownMenuOpen === false ? setDropdownMenuOpen(true) : setDropdownMenuOpen(false);
    };

    return (
        <nav className="navbar">
          <div className="navbar-content">
            <div className={`navbar-left ${isScrolled && 'hidden'}`}>
              <div className="navbar-logo">
                <Link to="/">
                  <img src="/SummitLodgeLogo.png" alt="Summit Lodge Logo" className="logo-image" />
                </Link>
              </div>
              <div className='navbar-text'>
                <Link to="/" className="navbar-brand" onClick={() => window.scrollTo(0, 0)}>Summit Lodge Big Bear</Link>
                <div className="navbar-info">
                  <p>Luxury Vacation Rental - Secluded - Celebrity Home</p>
                  <p>Close to Summit Mountain Resort</p>
                  <p>Sleeps 16, 4 bedrooms, 3 bathrooms, 3287 sq-ft</p>
                </div>
              </div>
            </div>
            <div className="navbar-actions">
              <div className="navbar-social-links">
                <a 
                  href="https://facebook.com/SummitLodgeBigBear"
                  className="navbar-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="https://www.instagram.com/summitlodgebigbear?igsh=ZjIwdmFjNmZ0YTVk" 
                  className="navbar-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a 
                  href="https://youtube.com" 
                  className="navbar-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
              <a 
                href='https://bearadise.com/property/summit-lodge'
                className="navbar-book-btn"
                target='_blank'
                rel="noreferrer"
              >
                Check Availability
              </a>
              <div 
                className='navbar-dropdown-icon'
                onClick={handleDropdownMenu}
              >
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className={`navbar-dropdown-links ${dropdownMenuOpen ? 'visible' : ''}`}>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                  <a 
                    href='https://www.bigbear.com/dining-nightlife/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Local Dining & Nightlife
                  </a>
                </div>
              </div>
              <div className='navbar-links'>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                <a 
                  href='https://www.bigbear.com/dining-nightlife/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Local Dining & Nightlife
                </a>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Header;