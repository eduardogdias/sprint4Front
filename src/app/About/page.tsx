import Footer from '../Footer/page'
import './page.css'

const About = () => {
    return(
        <>
        <section id="about">
            <section className="about">
                
                <div className="back">


                    <div className="SubTittle">

                    <h2 className='Tittle'>Sobre o <span>Will</span></h2>
                    

                        <p>Nós somos o começo da mudança, estamos dispostos a ser o <span>FUTURO.</span> <br />
                        Com o Will, alcançaremos lugares jamais vistos no mercado de carros do mundo. <br />
                        O Will é a mudança, o futuro e a solução dos seus problemas.</p>

                        <p>
                            Bem vindos ao Futuro.
                        </p>
                        
                    </div>

                    <div className="will">
                            <img src="/will.jpeg" alt="" />
                    </div>
                    
                </div>

            </section>

            <section className="about">
                
                <div className="back">


                    <div className="SubTittle">

                    <h2 className='Tittle'>Sobre <span>Nós</span></h2>
                    

                        <p>Nós somos os desenvolvedores do <span>Will</span>, a nova Meta. <br />
                        É com grande prazer que viemos nos apresentar.</p>
                        
                    </div>

                    <div className="will">

                        <br />
                        <br />
                        <div id="card">
                            <div className="card_load"><img src="/cauan.png" alt="" /></div>
                            <div className="card_title"><p>Cauan Matos</p></div>
                            <div className="card_descripion"><p>Estudante de ADS na <br /> Fiap Aclimação.</p></div>
                        </div>

                        <div id="card">
                            <div className="card_load"><img src="/Edu.png" alt="" /></div>
                            <div className="card_title"><p>Eduardo Dias</p></div>
                            <div className="card_descripion"><p>Estudante de ADS na <br /> Fiap Aclimação.</p></div>
                        </div>

                        <div id="card">
                            <div className="card_load"><img src="/Sergio.png" alt="" /></div>
                            <div className="card_title"><p>Sérgio Wahhab</p> </div>
                            <div className="card_descripion"><p>Estudante de ADS na <br /> Fiap Aclimação.</p></div>
                        </div>
                    </div>

                </div>
                
            </section>
        </section>    
        </>
    )
}

export default About