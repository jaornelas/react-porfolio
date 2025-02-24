import '../assets/Footer.css';
import GitHub from '../img/github.png';
import LinkedIn from '../img/linkedIn.png';
import X from '../img/xLogo.png';

function Footer() {
    return (
        <div>
            <div className="container text-center">
                <a href="https://github.com/jaornelas" target='blank'><img src={GitHub} className='icon rounded ms-5 p-5'/></a>
                <a href='https://www.linkedin.com/in/jos%C3%A9-alfredo-ornelas-4bb38a166/' target='_blank'><img src={LinkedIn} className='icon p-5'/></a>
                <a href='https://x.com/fredsejo?s=21' target='_blank'><img src={X} className='icon rounded ms-5 p-2' style={{backgroundColor: '#ffffff', width: 50}}/></a>
            </div>
            <div className='text-center ms-3'>
            </div>
        </div>
    );
}

export default Footer;