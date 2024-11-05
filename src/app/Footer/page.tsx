import './page.css';

const Footer = () => {

    return (

        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>Will </h3>
                        <ul>
                            <li><a href="#">Diagnóstico</a></li>
                            <li><a href="#">Panoramas</a></li>
                            <li><a href="#">Orçamentação</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Tecnologias</h3>
                        <ul>
                            <li><a href="#">Watson</a></li>
                            <li><a href="#">Html, Css and JavaScript</a></li>
                            <li><a href="#">Python</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Serviços ao Cliente</h3>
                        <ul>
                            <li><a href="#">Rede Concessionária</a></li>
                            <li><a href="#">Preço Revisão Will</a></li>
                            <li><a href="#">Will Service Express</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Will AG. All Rights Reserved.</p>
                </div>


            </footer>
        </>
    )
}

export default Footer;