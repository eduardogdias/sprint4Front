"use client";

import { useState, useEffect } from 'react';
import './page.css';
import Location from '../Location/page';
import Link from 'next/link';
import HeaderProps from '../HeaderProps/page';

interface FormData {
    cpf: string;
    nome: string;
    email: string;
    telefone: string;
}

interface Endereco {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

const Cadastre = () => {
    const [cep, setCep] = useState<string>('');
    const [endereco, setEndereco] = useState<Endereco | null>(null);
    const [error, setError] = useState<string>('');

    const [formData, setFormData] = useState<FormData>({
        cpf: '',
        nome: '',
        email: '',
        telefone: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        const { cpf, nome, email, telefone } = formData;

        if (!cpf) {
            newErrors.cpf = 'CPF deve ter 11 dígitos';
        }
        if (!nome) {
            newErrors.nome = 'Nome é obrigatório';
        }
        if (!email) {
            newErrors.email = 'Email inválido';
        }
        if (!telefone) {
            newErrors.telefone = 'Formato esperado: (XX) XXXXX-XXXX';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Cadastro realizado com sucesso!');
            localStorage.setItem('formData', JSON.stringify(formData));
            window.location.href = '/Diagnostic';
            setFormData({
                cpf: '',
                nome: '',
                email: '',
                telefone: '',
            });
            setErrors({});
        }
    };

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
            <section className="container2">
                <img className='Will2' src="/Designer.jpeg" alt="" />
                <div className="container3">
                    <h1 className="title">Cadastre-se</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">CPF:</label>
                            <input
                                type="text"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleChange}
                                className="input"
                            />
                            {errors.cpf && <span className="error">{errors.cpf}</span>}
                        </div>

                        <div className="field">
                            <label className="label">Nome:</label>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                className="input"
                            />
                            {errors.nome && <span className="error">{errors.nome}</span>}
                        </div>

                        <div className="field">
                            <label className="label">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input"
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>

                        <div className="field">
                            <label className="label">Telefone:</label>
                            <input
                                type="text"
                                name="telefone"
                                placeholder="(XX) XXXXX-XXXX"
                                value={formData.telefone}
                                onChange={handleChange}
                                className="input"
                            />
                            {errors.telefone && <span className="error">{errors.telefone}</span>}
                        </div>
                        
                        <div className="field">
                        <select name="estado" className='Estados'> 
    <option value="estado">Selecione o Estado</option> 
    <option value="ac">Acre</option> 
    <option value="al">Alagoas</option> 
    <option value="am">Amazonas</option> 
    <option value="ap">Amapá</option> 
    <option value="ba">Bahia</option> 
    <option value="ce">Ceará</option> 
    <option value="df">Distrito Federal</option> 
    <option value="es">Espírito Santo</option> 
    <option value="go">Goiás</option> 
    <option value="ma">Maranhão</option> 
    <option value="mt">Mato Grosso</option> 
    <option value="ms">Mato Grosso do Sul</option> 
    <option value="mg">Minas Gerais</option> 
    <option value="pa">Pará</option> 
    <option value="pb">Paraíba</option> 
    <option value="pr">Paraná</option> 
    <option value="pe">Pernambuco</option> 
    <option value="pi">Piauí</option> 
    <option value="rj">Rio de Janeiro</option> 
    <option value="rn">Rio Grande do Norte</option> 
    <option value="ro">Rondônia</option> 
    <option value="rs">Rio Grande do Sul</option> 
    <option value="rr">Roraima</option> 
    <option value="sc">Santa Catarina</option> 
    <option value="se">Sergipe</option> 
    <option value="sp">São Paulo</option> 
    <option value="to">Tocantins</option> 
</select>
    <br />
                        </div>

                        <div className="cep">
                            <h2>Consulta de CEP</h2>
                            <input
                                className='Inp'
                                type="text"
                                placeholder="Digite o CEP"
                                value={cep}
                                required
                                onChange={(e) => setCep(e.target.value)}
                            />
                            <br />
                            <br />
                            <button className='Cliccc' onClick={consultarCep}>Consultar</button>
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
                        </div>
                        <br />
                        <button type="submit" className="button3">
                            Cadastrar
                        </button>
                    </form>

                    <Link href="/Login"><h6>Já sou cadastrado</h6></Link>
                </div>
            </section>
        </>
    );
};

export default Cadastre;
