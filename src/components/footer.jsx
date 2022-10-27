import '../App.css'
import twitter from '../svg/twitter.svg'
import instagram from '../svg/instagram.svg'
import dribble from '../svg/dribble.svg'

function Footer() {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="textBox">
                        <p className="textBig">solutions</p>
                        <p className="textLittle">Marketing</p>
                        <p className="textLittle">Analytics</p>
                    </div>
                    <div className="textBox">
                        <p className="textBig">support</p>
                        <p className="textLittle">Pricing</p>
                        <p className="textLittle">Docs</p>
                    </div>
                    <div className="textBox">
                        <p className="textBig">company</p>
                        <p className="textLittle">About</p>
                        <p className="textLittle">Blog</p>
                    </div>
                    <div className="textBox">
                        <p className="textBig">legal</p>
                        <p className="textLittle">Privacy</p>
                        <p className="textLittle">Terms</p>
                    </div>
                </div>

                <div className="footer-icons">
                    <div className="footer-images">
                        <img src={twitter} alt="" className='logoSvg' />
                        <img src={instagram} alt="" className='logoSvg' />
                        <img src={dribble} alt="" className='logoSvg' />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;