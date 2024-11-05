"use client"

import { useEffect, useState } from 'react';
import './page.css'
import Footer from '../Footer/page';

const Diagnostic = () => {

  const [car, setCar] = useState('');
  const [marca, setMarca] = useState('');
  const [placa, setPlaca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [info, setInfo] = useState('');
  const [panorama, setPanorama] = useState('');
  const [diagnostic, setDiagnostic] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleCarRegistration = () => {
    setSuccessMessage('Carro cadastrado com sucesso!');
    setPlaca('');
    setModelo('');
    setAno('');
    setPanorama('');
    setDiagnostic('');
  };

  const handleGeneratePanorama = () => {
    setPanorama(`Panorama para o carro: ${marca}, com informações: ${info}`);
  };

  const handleGenerateDiagnostic = () => {
    setDiagnostic(`Diagnóstico gerado com base nas informações fornecidas para o carro: ${marca}`);
  };

  const handleSendEmail = () => {
    alert(`Orçamento enviado para ${email}`);
  };
  
  return (
  <>
    <div className="container">
      <h1>Diagnóstico de Carros</h1>
      
      <div className="section">
        <h2>Cadastrar Carro</h2>

        <input
          type="text"
          placeholder="Placa"
          value={placa} 
          onChange={(e) => setPlaca(e.target.value)}
        />
        <input
          type="text"
          placeholder="Marca"
          value={marca} 
          onChange={(e) => setMarca(e.target.value)}
        />
        <input
          type="text"
          placeholder="Modelo"
          value={modelo} 
          onChange={(e) => setModelo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ano"
          value={ano} 
          onChange={(e) => setAno(e.target.value)}
        />
        <button onClick={handleCarRegistration}>Cadastrar</button>
        {successMessage && <p className="successMessage">{successMessage}</p>}
      </div>

      <div className="section">
        <h2>Adicionar Informações do Carro</h2>
        <textarea
          placeholder="Informações do carro"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
      </div>

      <div className="section">
        <h2>Gerar Panorama</h2>
        <button onClick={handleGeneratePanorama}>Gerar Panorama</button>
        {panorama && <p className="result">{panorama}</p>}
      </div>

      <div className="section">
        <h2>Mostrar Diagnóstico</h2>
        <button onClick={handleGenerateDiagnostic}>Mostrar Diagnóstico</button>
        {diagnostic && <p className="result">{diagnostic}</p>}
      </div>

      <div className="section">
        <h2>Cadastrar E-mail para Orçamento</h2>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSendEmail}>Enviar Orçamento</button>
      </div>
    </div>
    <Footer />  
  </>
  );
};

export default Diagnostic;
