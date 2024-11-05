
"use client"
import Link from 'next/link'
import Footer from '../Footer/page'
import './page.css'
import FAQ from '../FAQ/page'
import { useEffect, useState } from 'react'

const Services = () => {

    const [produtos,setProdutos] = useState([])

    useEffect(() =>{
        fetch("http://localhost/8080/")
        .then((resp) => resp.json())
        .then((resp) => {
            setProdutos(resp);
        })
        .catch((error) =>{
            console.error(error);
        })
    },[])

    return (

        <>

            <section className="One">

                <h1>Os melhores serviços para seu carro com Will.</h1>
                <p>Passe o Mouse por cima do carro para selecionar a área de serviço.</p>

                <br />

                <div className="Shape">

                    <br />
                    <br />

                    <div className="Two">
                        <img src="/red.png" alt="Carro da Audi Cinza" />

                        <div className="Glass">
                            <Link href="ProdPage">Vidro</Link>
                        </div>

                        <div className="Wheel">
                            <Link href="ProdPage">Roda</Link>
                        </div>

                        <div className="Wheel2">
                            <Link href="ProdPage">Roda</Link>
                        </div>
        
                        <div className="Engine">
                            <Link href="ProdPage">Motor</Link>
                        </div>

                    </div>

                </div>

            </section>

            {/* <section>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th> 
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                </table>
            </section> */}

            <FAQ />

            <Footer />

        </>

    )
}

export default Services