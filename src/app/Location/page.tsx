"use client"

import { useState } from 'react';
import './page.css'

const Location = () => {
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!cep) {
      setError('Por favor, insira um CEP.');
      return;
    }

    try {

        const response = await fetch(`https://cep.awesomeapi.com.br/:format/:cep`);

      if (!response.ok) {
        throw new Error('CEP não encontrado');
      }
      const data = await response.json();
      setCidade(data.cidade);
      setBairro(data.bairro);
      setError('');
    } catch (err: unknown) { 
      if (err instanceof Error) { 
        setError(err.message);
      } else {
        setError('Ocorreu um erro inesperado');
      }
      setCidade('');
      setBairro('');
    }
  };

  return (
    <div className='Loc'>
      <h2>Adicione sua Localização</h2>
      <input 
        className='Inp'
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button className='Clic' onClick={handleSearch}>Buscar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {cidade && <p>Cidade: {cidade}</p>}
      {bairro && <p>Bairro: {bairro}</p>}
    </div>
  );
};

export default Location;
