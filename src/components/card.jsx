import '../App.css'
import image1 from '../img/cardImage.webp'
import image3 from '../img/ordi.webp'
import image4 from '../img/pink.webp'
import image5 from '../img/tunnel.jpg'

function Card() {
    return(
        <>
        <div className="test">
            <div className="wrapper">

                <a href="/designer" className="redirect">
                    <div className="card">
                        <div className="card-image">
                            <img src={image1} alt="" className="image-card" />
                        </div>
                        <div className="card-texte">
                            <span className="mini-title">editorial</span>
                            <h1 className="h1-how">How Can Designers Prepare<br/>For The Future?</h1>
                            <span className="date">May 2, 2022</span>
                        </div>
                    </div>
                </a>

                <a href="/career" className="redirect">
                    <div className="card">
                        <div className="card-image">
                            <img src={image5} alt="" className="image-cardSP" />
                        </div>
                        <div className="card-texte">
                            <span className="mini-title" style={{color: "#00ccdd"}}>editorial</span>
                            <h1 className="h1-how">Starting and Growing a Career<br/>in Web Design in 2022</h1>
                            <span className="date">May 2, 2022</span>
                        </div>
                    </div>
                </a>

                <a href="/navigation" className="redirect">
                    <div className="card">
                        <div className="card-image">
                            <img src={image3} alt="" className="image-card" />
                        </div>
                        <div className="card-texte">
                            <span className="mini-title" style={{color: "#ff6699"}}>guides</span>
                            <h1 className="h1-how">Building a Navigation<br/>Component with Variables</h1>
                            <span className="date">April 13, 2022</span>
                        </div>
                    </div>
                </a>
                
                <a href="/landing" className="redirect">
                    <div className="card">
                        <div className="card-image">
                            <img src={image4} alt="" className="image-card" />
                        </div>
                        <div className="card-texte">
                            <span className="mini-title" style={{color: "#0055ff"}}>guides</span>
                            <h1 className="h1-how">Create a Landing Page That<br/>Performs Great</h1>
                            <span className="date">March 26, 2022</span>
                        </div>
                    </div>
                </a>

                <a href="/effective" className="redirect">
                    <div className="card">
                        <div className="card-image">
                            <img src={image5} alt="" className="image-card" />
                        </div>
                        <div className="card-texte">
                            <span className="mini-title" style={{color: "#ff5522"}}>guides</span>
                            <h1 className="h1-how">How to Create an Effective<br/>Design Portfolio</h1>
                            <span className="date">February 14, 2022</span>
                        </div>
                    </div>
                </a>


            </div>
        </div>
        </>
    )
}

export default Card;