import styled from 'styled-components';

export const Container = styled.div`
flex-direction: column;
display: flex;
padding: 4rem 0 2rem 0;
`

export const H2 = styled.h2`
text-align: center;
font-size: 1.5rem;
` 

export const Form = styled.form`
width: 50vw;
display: flex;
flex-direction: column;
align-self: center;
gap: 1rem;
`

export const Button = styled.button`
padding: 1rem;
border-radius: .8rem;
border: none;
color: #fff;
font-weight: 700;
background: #000;
transition: .2s ease-in-out;

&:hover {
    transform: scale(1.05); 
}
`
