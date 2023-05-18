import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.png'

const Footer = () => {
    return (
        <footer
            className="footer p-10 bg-[#E8F6F7] text-base-content"
            style={{
                backgroundImage: 'url(https://i.ibb.co/bbQQ1Dg/footer.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div >
                <img src={logo} alt="" />
                <p>ToyLand Industries Ltd.<br />Providing reliable tech since </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/alltoys' className="link link-hover">All Toy</Link>
                <Link to='/mytoys' className="link link-hover">My Toy</Link>
                <Link to='/addatoy' className="link link-hover">Add A Toy</Link>

            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='/' className="link link-hover">About us</Link>
                <Link to='/blogs' className="link link-hover">Blog</Link>

            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to='/' className="link link-hover">Terms of use</Link>
                <Link to='/' className="link link-hover">Privacy policy</Link>
                <Link to='/' className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};


export default Footer;
