import '../App.css'
import logo from '../svg/logo.svg'
import twitter from '../svg/twitter.svg'
import instagram from '../svg/instagram.svg'
import dribble from '../svg/dribble.svg'
import gradient from '../img/gradient.webp'

function Header() {
    return(
        <>
        <img src={gradient} alt="" className="gradient" />
            <header>
                <div className="div-logo">
                    <img src={logo} alt="" className="logo" />
                </div>

                <div className="social-media">
                    <img src={twitter} alt="" className='logoSvg' />
                    <img src={instagram} alt="" className='logoSvg' />
                    <img src={dribble} alt="" className='logoSvg' />
                </div>
            </header><div className="separate"></div>
            <div className="gradient"></div>

            <div className="circle"></div>
        </>
    )
}

export default Header;