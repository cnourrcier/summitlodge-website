import { Link } from 'react-router-dom';
import staycation from '../../assets/images/staycation.png';

const Footer = () => {

    return (
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img src={staycation} alt="Staycation TV" className="footer-staycation" />
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-social">
                <a 
                  href="https://facebook.com/SummitLodgeBigBear" 
                  className="footer-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="https://www.instagram.com/summitlodgebigbear?igsh=ZjIwdmFjNmZ0YTVk" 
                  className="footer-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a 
                  href="https://youtube.com" 
                  className="footer-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
              <div className="footer-buttons">
                <Link to="/contact" className="footer-btn" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
                <a 
                  href='https://bearadise.com/property/summit-lodge'
                  className="footer-btn book-btn"
                  target='_blank'
                  rel="noreferrer"
                >
                  Book it!
                </a>
              </div>
              <div className="footer-address">
                Summit Lodge – Big Bear<br />
                42243 Evergreen Dr, Big Bear Lake, CA 92315
              </div>
            </div>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} Summit Lodge Big Bear
              <div className="footer-credit">Website by DevRise Studio</div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;