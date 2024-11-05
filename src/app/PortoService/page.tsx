"use client"

import React, { useState } from 'react';
import './page.css';
import Link from 'next/link';
import Footer from '../Footer/page';

interface Endereco {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

const PortoService: React.FC = () => {
  const [cep, setCep] = useState<string>('');
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [error, setError] = useState<string>('');

  const consultarCep = async () => {
    if (!cep) {
      setError('Por favor, insira um CEP.');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data: Endereco & { erro?: boolean } = await response.json();

      if (data.erro) {
        throw new Error('CEP não encontrado.');
      }

      setEndereco(data);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setEndereco(null);
    }
  };

  return (
    <>
      <div className="auto-center-page">
        <section className="banner-section">
          <div className="banner-image">
            <img src="/mechanic-service.jpg" alt="Serviço de mecânica" />
          </div>
          <div className="banner-content">
            <h1>Centro Automotivo Porto Seguro</h1>
            <p>Conheça todos os serviços disponíveis para cuidar do seu veículo.</p>
            <Link href="https://www.portoseguro.com.br/centros-automotivos-porto-seguro">
              <button className="cta-button">Conheça mais</button>
            </Link>
          </div>
        </section>

        <section className="services-section">
          <div className="service-list">
            <h2>Serviços prestados nos Centros Automotivo</h2>
            <ul>
              <li>alinhamento de direção;</li>
              <li>amortecedor e molas;</li>
              <li>ar-condicionado (limpeza e assepsia);</li>
              <li>arrefecimento;</li>
              <li>bateria;</li>
              <li>balanceamento de rodas;</li>
              <li>cabos;</li>
              <li>cambagem / caster;</li>
              <li>correias do motor;</li>
              <li>direção;</li>
              <li>extintor de incêndio;</li>
              <li>filtros;</li>
              <li>freios;</li>
              <li>ignição;</li>
              <li>injeção eletrônica;</li>
              <li>óleo do motor;</li>
              <li>palhetas do limpador;</li>
              <li>pneus;</li>
              <li>suspensão.</li>
            </ul>
            <p className="note">* Consulte o Centro Automotivo mais próximo da sua região para saber quais estão disponíveis.</p>
          </div>

          <div className="service-list">
            <h2>Serviços Gratuitos para Segurados do Seguro Auto</h2>
            <ul>
              <li>desinfecção automotiva;**</li>
              <li>cristalização de para-brisas e do vigia traseiro;</li>
              <li>regulagem do foco dos faróis;*</li>
              <li>troca de lâmpadas externas (exceto para lâmpadas xenon, leds e similares);*</li>
              <li>diagnóstico do óleo do motor e filtros;</li>
              <li>diagnóstico de bateria e alternador;</li>
              <li>diagnóstico do sistema de freios;</li>
              <li>diagnóstico de rodízio de pneus;</li>
              <li>diagnóstico de suspensão e direção;</li>
              <li>leva e traz* (envio do automóvel para realizar serviços pagos em um Centro Automotivo).</li>
            </ul>
            <p className="note">* Consulte localidade. Serviços gratuitos vinculados ao tipo de cobertura, região de contratação e modelo do veículo. Verifique em sua apólice quais serviços o veículo segurado tem direito. **Para mais informações, <a href="#">acesse o site</a>.</p>
          </div>
        </section>
      </div>

      <section className="Consult">
        <h2>Consulta de CEP</h2>
        
        <input className='input'
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          required
          onChange={(e) => setCep(e.target.value)}
        />

        <br />
        <br />

        <button onClick={consultarCep}>Consultar</button>
        
        {error && <p className="error">{error}</p>}
        {endereco && (
          <div className="endereco">
            <h3>Endereço encontrado:</h3>
            <p>Logradouro: {endereco.logradouro || 'N/A'}</p>
            <p>Bairro: {endereco.bairro || 'N/A'}</p>
            <p>Cidade: {endereco.localidade || 'N/A'}</p>
            <p>Estado: {endereco.uf || 'N/A'}</p>
          </div>
        )}


      </section>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default PortoService;
