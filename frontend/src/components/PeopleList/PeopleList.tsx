import React, { useEffect, useState } from 'react';
import {
    Container,
    Item,
    TextsContainer,
    ActionsRow,
    ActionButton,
    Text
} from './Styles';

export default function PeopleList() {

    const [ users, setUsers ] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    useEffect(() => {

        const getUsers = async () => {
            
            const users = await fetch('http://localhost:8000/user');
            const data = await users.json();

            setTimeout(() =>{ console.log(data.success?.data); setUsers(data.success?.data)}, 500);

        }
        
        getUsers();

    }, [])
    

    return (
        <Container>
            <Item onClick={handleCardClick} className={isFlipped ? 'flipped' : ''}>
                <div className="card-front">
                    <Text 
                        before="Username:"
                        after="bia1013"
                    />
                    <Text 
                        before="Nome:"
                        after="Beatriz Donateli" 
                    />
                    <Text 
                        before="Idade:"
                        after="18" 
                    />
                    <Text
                        before="Nascimento:"
                        after={"11/12/2004"} 
                    />
                </div>
                <div className="card-back">
                    <TextsContainer>
                        <Text 
                            before="Estado:"
                            after="Espírito Santo"
                        />
                        <Text 
                            before='Cidade'
                            after='Linhares'
                        />
                        <Text 
                            before='Rua:'
                            after="Rua X"
                        />
                        <Text 
                            before="Número:"
                            after="89"
                        />
                    </TextsContainer>
                </div>
                <ActionsRow>
                    <ActionButton type="edit" />
                    <ActionButton type="delete" />
                </ActionsRow>
            </Item>
            {
                users.map((item: any, index) => {
                    return (
                        <Item key={index} onClick={handleCardClick} className={isFlipped ? 'flipped' : ''}>
                            <div className="card-front">
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
                            <div className="card-back">
                                <TextsContainer>
                                    <Text 
                                        before="Estado:"
                                        after="Espírito Santo"
                                    />
                                    <Text 
                                        before='Cidade'
                                        after='Linhares'
                                    />
                                    <Text 
                                        before='Rua:'
                                        after="Rua X"
                                    />
                                    <Text 
                                        before="Número:"
                                        after="89"
                                    />
                                </TextsContainer>
                            </div>
                        </Item>
                    )
                })
            }
            <Item onClick={handleCardClick} className={isFlipped ? 'flipped' : ''}>
                <div className="card-front">
                    <Text 
                        before="Username:"
                        after="bia1013"
                    />
                    <Text 
                        before="Nome:"
                        after="Beatriz Donateli" 
                    />
                    <Text 
                        before="Idade:"
                        after="18" 
                    />
                    <Text
                        before="Nascimento:"
                        after={"11/12/2004"} 
                    />
                </div>
                <div className="card-back">
                    <TextsContainer>
                        <Text 
                            before="Estado:"
                            after="Espírito Santo"
                        />
                        <Text 
                            before='Cidade'
                            after='Linhares'
                        />
                        <Text 
                            before='Rua:'
                            after="Rua X"
                        />
                        <Text 
                            before="Número:"
                            after="89"
                        />
                    </TextsContainer>
                </div>
                <ActionsRow>
                    <ActionButton type="edit" />
                    <ActionButton type="delete" />
                </ActionsRow>
            </Item>
        </Container>
    );
}
