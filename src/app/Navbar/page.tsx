"use client"
import Link from 'next/link';
import './page.css'
import { useState } from 'react';

const Navbar = () =>{

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header>
                <nav className="navigation">
                <img src="/Logo.png" alt="Logo PortoSeguro" className='logo' />
                    <ul>
                        <li><Link href="/">Início</Link></li>
                        <li><Link href="/Services">Serviços</Link></li>
                        <li><Link href="/Cadastre">Login</Link></li>
                        <li><Link href="/#about">Sobre</Link></li>
                    </ul>

                        
                        <Link className="fancy"  href="/Diagnostic"> 
                            <span className="top-key"></span>
                            <span className="textt">Escanear carro </span>
                            <span className="bottom-key-1"></span>
                            <span className="bottom-key-2"></span>
                        </Link>
    

                </nav>
            </header>
        </>
    )

}

export default Navbar;