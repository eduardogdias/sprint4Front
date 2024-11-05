"use client"
import React from 'react';
import { useLocation } from 'react-router-dom';
 
interface HeaderProps {
  title: string;
}
 
const Header: React.FC<HeaderProps> = ({ title }) => {
  return <header>{title}</header>;
};
 
const HeaderProps: React.FC = () => {
  const location = useLocation();
 
  // Define a URL onde o componente não deve ser exibido
  const urlParaOcultarHeader = '/Cadastre' + '/Login';


  return (
<div>
      {/* O Header só será renderizado se a URL atual não for '/cadastro' */}
      {location.pathname !== urlParaOcultarHeader && <Header title="Meu Projeto" />}
      {/* Conteúdo principal da página */}
<main>
        {/* Conteúdo da aplicação */}
</main>
</div>
  );
};
 
export default HeaderProps;