"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import About from "./About/page";
import Footer from "./Footer/page";
import Service from "./Service/page";
import './page.css';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleScanCarClick = () => {
        if (!isLoggedIn) {
            alert('Você precisa estar logado para acessar essa funcionalidade.');
        } else {
            alert('Acessando a funcionalidade de escanear carro.');
        }
    };

    return (
        <>
            <section id="home">
                <div className="shape"></div>

                <div id="cta">
                    <h1 className="Tittle">
                        Diagnóstico agora no
                        <span>WILL</span>
                    </h1>

                    <p className="description">
                        Otimize seu tempo realizando um diagnóstico através do assistente <span>Will</span>, faça o diagnóstico, orçamentação e tenha seu carro com uma devolutiva rápida.
                    </p>

                    <Link href="/Diagnostic" className="btn-default">
                        <div id="cta-buttons">
                            <div className="fancy">
                                <span className="top-key"></span>
                                <span className="text" onClick={handleScanCarClick}> Diagnosticar carro </span>
                                <span className="bottom-key-1"></span>
                                <span className="bottom-key-2"></span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div id="banner">
                    <img src="/porsche-model.png" id="car" alt="porsche-carro" />
                    <img src="/caixaferramenta.png" id="caixa" alt="caixa de ferramentas" />
                </div>
            </section>

            <Service />

            <br />

            <About />

            <Footer />
        </>
    );
}
