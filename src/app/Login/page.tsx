
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './page.css';

const Login = () => {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            const { nome, email } = JSON.parse(storedData);
            setNome(nome);
            setEmail(email);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            const { nome: storedNome, email: storedEmail } = JSON.parse(storedData);
            if (nome === storedNome && email === storedEmail) {
                alert(`Bem-vindo, ${nome}!`);
                router.push('/Diagnostic');
            } else {
                setError('Nome ou email inválidos.');
            }
        } else {
            setError('Nenhum dado encontrado no cadastro.');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="login-field">
                    <label className="login-label">Nome:</label>
                    <input 
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="login-input"
                    />
                </div>
                <div className="login-field">
                    <label className="login-label">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                    />
                </div>
                {error && <span className="login-error">{error}</span>}
                <button type="submit" className="login-button">
                    Entrar
                </button>
            </form>
            <p className="login-link">
                Não tem uma conta? <Link href="/Cadastre">Cadastre-se</Link>
            </p>
        </div>
    );
};

export default Login;
