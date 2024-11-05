import React from 'react';
import './page.css';
import PortoService from '../PortoService/page';

const ProdPage = () => {
  return (
    <>
      <div className="prod-page">
        <section className="service-section">
          <div className="service-content">
            <h1>Serviços para seu carro</h1>
            <p>Profissionais especializados e serviços de qualidade, com um preço justo e em um ambiente ideal</p>
          </div>
          <div className="service-image">
            <img src="/car-service.jpg" alt="Serviço para carro" />
          </div>
        </section>

        <section className="assurance-section">
          <h2>Garantia de atendimento com o padrão Porto Seguro para segurados e não segurados.</h2>
          <p>Nos Centros Automotivos você encontra profissionais especializados para realizar serviços de manutenção e revisão do seu carro. Tudo de maneira eficiente e segura. Os serviços estão disponíveis para segurados e não segurados.</p>
        </section>
      </div>
      
    <PortoService />
  </>
    

  );
};

export default ProdPage;
