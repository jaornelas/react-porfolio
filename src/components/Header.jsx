// TODO: Have a background image with my name and implement the Navigation component.
import Navigate from 'Navigate.jsx';
import headerBackground from '../img/headerBackground.png';

function Header() {
    const style = {
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className='container-fluid p-3' style={style}>
            <h1 className='text-light pt-3'>Jose Alfredo Ornelas</h1>
            <Navigate />
        </div>
    )
};

export default Header;