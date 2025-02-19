// TODO: Use the react-router-dom to create links for About Me, Portfolio, Contact, and Resume.
import { Link, useLocation } from 'react-router-dom';

function Navigate() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='nav justify-content-end mb-2'>
            <li className='nav-item'>
                <Link
                    to='/'
                    className={currentPage === '/' ? 'nav-link link-success fs-2' : 'nav-link link-light fs-2'}
                >
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/portfolio'
                    className={currentPage === '/portfolio' ? 'nav-link link-success fs-2' : 'nav-link link-light fs-2'}
                >
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/contact'
                    className={currentPage === '/contact' ? 'nav-link link-success fs-2' : 'nav-link link-light fs-2'}
                >
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to='/resume'
                    className={currentPage === '/resume' ? 'nav-link link-success fs-2' : 'nav-link link-light fs-2'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    );
}

export default Navigate;