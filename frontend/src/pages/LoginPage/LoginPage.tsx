import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { SuccessToast } from '../../components/toasts/Toasts';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
`;

const LoginTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
`;

const LoginForm = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const LoginButton = styled.button`
  background-color: #000;
  color: white;
  border: none;
  border-radius: .8rem;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`;

const RegisterButton = styled(Link)`
  background-color: #000;
  color: white;
  border: none;
  border-radius: .8rem;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
  margin: 0 .5rem;

  &:hover {
    background-color: #333;
  }
`;

const LoginPage = () => {
  const { isLoggedIn, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    const response: any = await fetch('http://localhost:8000/user/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      login(); // Chama a função de login do contexto de autenticação
    } else {

      return toast.error("Usuário ou senha inválidos.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });

    }


  };

  // Se o usuário já estiver autenticado, redireciona para a página de dashboard
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <LoginPageContainer>
      <LoginTitle>Bem-vindo de volta!</LoginTitle>
      <LoginForm>
        <LoginInput
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin}>Entrar</LoginButton>
        <RegisterButton to='/user/create'>Cadastrar-se</RegisterButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
