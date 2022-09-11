import firstImage from "../assets/1.jpg"
import secondImage from "../assets/2.jpg"
import thirdImage from "../assets/3.jpg"
import quadImage from "../assets/4.jpg"
import fivImage from "../assets/5.jpg"
import logo from "../assets/logoR.png"

export default function () {


    return <>
    <link rel="stylesheet" id="fontawesome-css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css?ver=4.3.0" type="text/css" media="all"></link>
    <div className="bg" >
        <div className="central">
        <header>
            <a href="#" className="logo"> The Mandalorian</a>

            <input type="checkbox" id="chk-toggle" />
            <label id="toggle" htmlFor="chk-toggle">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <nav>
                <ul>
                    <li><a href="#serie">A SÉRIE</a></li>
                    <li><a href="#videos">VÍDEOS</a></li>
                    <li><a href="#onde">ONDE ASSISTIR</a></li>
                    <li><a href="#redes">REDES SOCIAIS</a></li>
                </ul>
            </nav>
        </header>

        <div className="headline">
            <h1><span>The</span> Mandalorian</h1>
            <div className="ladoAlado">
                <a href="#" className="btn">Assista no Disney+</a>
                <a href="#" className="btn clean">Assista ao trailer</a>
            </div>
        </div>
        </div>

        <div className="degrade"></div>
    </div>
    <section id="serie">
        <article>
            <h2>A SÉRIE</h2>
            <img src={firstImage} alt="Mandalorian" className="esq margdir w43"></img>
            <p>
                Lorem ipsum iaculis sapien nulla nec etiam curabitur mi etiam, amet quis 
                dapibus iaculis orci turpis adipiscing dictumst et neque, praesent imperdiet
                dui hendrerit id phasellus himenaeos commodo. lacus imperdiet faucibus 
                aliquet interdum odio himenaeos rutrum curabitur faucibus, donec arcu nullam
            </p>
        </article>
    </section>
    <section id="videos">
        <article className="spacevid">
            <h2>VÍDEOS</h2>
            <div className="videos">
                <ul>
                    <li>
                        <a href="#">
                            <div className="bgplay">
                                <span className="play">
                                    <span></span>
                                </span>
                            </div>
                            <img src={secondImage} alt=""></img>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <div className="bgplay">
                                <span className="play">
                                    <span></span>
                                </span>
                            </div>
                            <img src={thirdImage} alt=""></img>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <div className="bgplay">
                                <span className="play">
                                    <span></span>
                                </span>
                            </div>
                            <img src={quadImage} alt=""></img>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <div className="bgplay">
                                <span className="play">
                                    <span></span>
                                </span>
                            </div>
                            <img src={fivImage} alt=""></img>
                        </a>
                    </li>
                </ul>
            </div>

        </article>
        <aside id="onde" className="boxassine">
            <h2>Assista Agora no</h2>
            <img src={logo} alt="" className="disney"></img>
            <span className="assin">Assine por</span>
            <span className="preco">R$ 9,99</span>
            <span className="vantagens">e tenha acesso a conteúdos exclusivos disney+</span>
        </aside>
        <div className="clear"></div>
    </section>
    <footer id="redes">
        FOLLOW STAR WARS:
        <div className="redes">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
        </div>
        <span className="copy">TM© Lucasfilm ltd. All Rights Reserved</span>
    </footer>
    </>
}