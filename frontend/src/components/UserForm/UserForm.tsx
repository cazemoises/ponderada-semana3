import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect, useParams  } from 'react-router-dom';

import { Form } from './Styles';
import Input from '../Common/Input/Input';
import { Container, H2, Button } from './Styles';
import { AutoRedirect } from '../../contexts/AuthContext';

const UserForm = () => {

    const { type, id } = useParams();

    const [formData, setFormData] = useState({
        id: '',
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

    useEffect(() => {

        const getUser = async () => {
            
            const response = await fetch('http://3.213.184.35:8000/user/' + id)
            const data = await response.json();

            console.log(data)
            console.log(data.success.data);

            setFormData({
                id: data.success.data.id,
                first_name: data.success.data.first_name,
                last_name: data.success.data.last_name,
                username: data.success.data.username,
                age: data.success.data.age,
                birthdate: data.success.data.birthdate,
                state: data.success.data.address.state,
                city: data.success.data.address.city,
                street: data.success.data.address.street,
                number: data.success.data.address.number,
                password: ''
            })

        };
    
        type === "edit" && getUser();

    }, [])
    

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
        
        if (type === "edit") {

            const response = await fetch('http://3.213.184.35:8000/user', {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            return toast.success('Atualizado com sucesso.');
            
        }

        const response = await fetch('http://3.213.184.35:8000/user', {
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
        {
            type === "edit" &&
            <AutoRedirect />
        }
      <H2>
        { type === "edit" ?
            "Editar" :
            "Criar"
        } Usuário
      </H2>
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
                disabled={type === "edit"}
                type="text"
                variant='white'
                placeholder='Seu estado aqui'    
                name="state"
                value={formData.state}
                onChange={handleChange}
            />        
        </div>
        <div>
            <Input
                label='Cidade'
                type="text"
                disabled={type === "edit"}
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
                disabled={type === "edit"}
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
                disabled={type === "edit"}
                variant='white'
                placeholder='Número da casa'    
                name="number"
                value={formData.number}
                onChange={handleChange}
            />           
        </div>
        <Button type="submit">
            {type === "edit" ? "Editar" : "Cadastrar" }
        </Button>
        <Button onClick={() => {history.back()}} type="submit">Voltar</Button>
      </Form>
    </Container>
  );
};

export default UserForm;
