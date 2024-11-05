import './page.css'

const Service = () => {
    return(

        <>
            <section id="Serviços">

                <h3 className="section-sub-tittle">
                    <span></span></h3>


                <div className='Local'>

                

                <div className="card">
                    <img src="/red.png" alt="" />
                        <div className="card__content">
                            <p className="card__title">Will Diagnóstico</p>
                            <p className="card__description">Um diagnóstico através do assistente Will
                            rápido, prático e com ótima eficiência.</p>
                        </div>
                </div>

                <div className="card">
                    <div className="ddd">
                        <img src="Ddd.png" className='Ddd'  alt="" />
                    </div>
                    
                        <div className="card__content">
                            <p className="card__title">Dúvidas</p>
                            <p className="card__description">Um canal direcionado aos nossos clientes
                            que possuem dúvidas sobre o serviço.</p>
                        </div>
                </div>

                <div className="card">
                <div className="ddd">
                        <img src="pessoa.png"   alt="" />
                    </div>
                        <div className="card__content">
                            <p className="card__title">Avaliação</p>
                            <p className="card__description">Que tal dar uma passadinha nesse canal
                            e dar uma avaliação aos colaboradoes?</p>
                        </div>
                        
                </div>

                </div>  
            <br />
            <br />
            </section> 
        </>

    )
}

export default Service;