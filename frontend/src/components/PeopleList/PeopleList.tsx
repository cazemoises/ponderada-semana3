import React, { useEffect, useState } from 'react';
import {
    Container,
    Item,
    TextsContainer,
    ActionsRow,
    ActionButton,
    Text,
    Empty,
    EditButton
} from './Styles';
import { SuccessToast } from '../toasts/Toasts';

export default function PeopleList() {

    const [ users, setUsers ] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    useEffect(() => {

        alert("Toque nos cards para ver mais detalhes!")

        const getUsers = async () => {
            
            const users = await fetch('http://localhost:8000/user');
            const data = await users.json();

            setTimeout(() =>{ 
                console.log(data.success?.data); setUsers(data.success?.data)
            }, 500);

        }
        
        getUsers();

    }, []);

    const handleDelete = async (user_id: string) => {

        await fetch('http://localhost:8000/user/' + user_id, {
            method: "DELETE"
        });

        window.location.reload();
        
    }

    return (
        <Container>
            {
                users.length !== 0 ? users.map((item: any, index) => {
                    return (
                        <Item key={index} className={isFlipped ? 'flipped' : ''}>
                            <div onClick={handleCardClick} className="card-front">
                                <Text 
                                    before="Username:"
                                    after={item.username}
                                />
                                <Text 
                                    before="Nome:"
                                    after={item.first_name + " " + item.last_name} 
                                />
                                <Text 
                                    before="Idade:"
                                    after={item.age}
                                />
                                <Text
                                    before="Nascimento:"
                                    after={item.birthdate}
                                />
                            </div>
                            <div onClick={handleCardClick} className="card-back">
                                <TextsContainer>
                                    <Text 
                                        before="Estado:"
                                        after={item.address?.state}
                                    />
                                    <Text 
                                        before='Cidade'
                                        after={item.address?.city}
                                    />
                                    <Text 
                                        before='Rua:'
                                        after={item.address?.street}
                                    />
                                    <Text 
                                        before="Número:"
                                        after={item.address?.number}
                                    />
                                </TextsContainer>
                            </div>
                            <ActionsRow>
                                <EditButton to={`/user/edit/${item.id}`} type='edit' />
                                <ActionButton onClick={() => {handleDelete(item.id)}} type="delete" />
                            </ActionsRow>
                        </Item>
                    )
                }) :
                <Empty>Nenhum usuário encontrado.</Empty>
                }
        </Container>
    );
}
