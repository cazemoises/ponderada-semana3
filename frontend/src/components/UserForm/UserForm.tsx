import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect  } from 'react-router-dom';

import { Form } from './Styles';
import Input from '../Common/Input/Input';
import { Container, H2, Button } from './Styles';

const UserForm = () => {

    const [isRedirecting, setIsRedirecting] = useState(false); 

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        age: '',
        birthdate: '',
        state: '',
        city: '',
        street: '',
        number: '',
        password: ''
    });

    const handleChange = (e: any) => {

        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        console.log(formData);
        
        const response: any = await fetch('http://localhost:8000/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.error) {
            return toast.error(data.error.title);
        };
        
        console.log(data);
        return toast.success(data.success.title);
        
    };

    return (
    <Container>
      <H2>Cadastro de Usuário</H2>
      <Form onSubmit={handleSubmit}>
        <div>
            <Input 
                type="text"
                variant='white'
                placeholder='Seu nome aqui'
                label='Nome'
                name="first_name"
                value={formData.first_name} 
                onChange={handleChange} 
            />
        </div>
        <div>
            <Input
                label='Sobrenome'
                type="text"
                name="last_name"
                variant='white'
                placeholder='Seu sobrenome aqui'
                value={formData.last_name}
                onChange={handleChange}
            />
        </div>
        <div>
            <Input 
                label='Nome de Usuário'
                type="text"
                variant='white'
                placeholder='Seu username aqui'
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
        </div>
        <div>
            <Input 
                label='Senha'
                type="password"
                variant='white'
                placeholder='Sua senha aqui'
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
        </div>
        <div>
            <Input
                label='Idade'
                type="number"
                variant='white'
                placeholder='Sua idade aqui'
                name="age"
                value={formData.age}
                onChange={handleChange}
            />
        </div>
        <div>
            <Input
                label='Data de Nascimento'
                type="date"
                variant='white'
                placeholder='Sua data de nascimento aqui'    
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
            />
        </div>
        <div>
          <Input
                label='Estado'
                type="text"
                variant='white'
                placeholder='Seu estado aqui'    
                name="state"
                value={formData.state}
                onChange={handleChange}
            />        </div>
        <div>
            <Input
                label='Cidade'
                type="text"
                variant='white'
                placeholder='Sua cidade aqui'    
                name="city"
                value={formData.city}
                onChange={handleChange}
            />        
        </div>
        <div>
            <Input
                type="text"
                label='Rua'
                variant='white'
                placeholder='Sua rua aqui'    
                name="street"
                value={formData.street}
                onChange={handleChange}
            />        
        </div>
        <div>
            <Input
                type="number"
                label='Número da casa'
                variant='white'
                placeholder='Número da casa'    
                name="number"
                value={formData.number}
                onChange={handleChange}
            />           
        </div>
        <Button type="submit">Cadastrar</Button>
        <Button onClick={() => {history.back()}} type="submit">Voltar</Button>
      </Form>
    </Container>
  );
};

export default UserForm;
