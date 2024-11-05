"use client"
import React, { useState } from 'react';
import './page.css';

const FAQPage = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const faqs = [
    { id: 1, title: 'Auto' },
    { id: 2, title: 'Cartão de Crédito' },
    { id: 3, title: 'Transporte de Veículos' },
    { id: 4, title: 'Serviços' },
    { id: 5, title: 'Reembolso' },
  ];

  const handleFAQClick = (id: number) => {
    setActiveFAQ(activeFAQ === id ? null : id);
    setMessage(''); // Reseta a mensagem ao selecionar outra opção de FAQ
  };

  const handleSubmit = () => {
    setMessage('Responderemos em breve sua dúvida.');
  };

  return (
    <div className="container">
      <h2 className="title">Como podemos te ajudar?</h2>
      <div className="faq-options">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item ${activeFAQ === faq.id ? 'active' : ''}`}
            onClick={() => handleFAQClick(faq.id)}
          >
            <span>{faq.title}</span>
          </div>
        ))}
      </div>
      {activeFAQ !== null && (
        <div className="faq-content">
          <textarea
            className="text-area"
            placeholder="Digite sua dúvida aqui..."
          />
          <button className="submit-button" onClick={handleSubmit}>Enviar</button>
          {message && <p className="response-message">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default FAQPage;
