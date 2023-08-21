import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const Container = styled.ul`
position: fixed;
width: 100vw;
height: 4rem;
display: flex;
top: 0;
justify-content: center;
align-items: center;
gap: 2rem;
background-color: #000;
margin: 0;
padding: 1rem 2rem;
`

export const Li = styled.li`
list-style: none;
font-size: .9rem;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const A = styled(Link)`
    color: #fff;
    text-decoration: none;
`

export const LogoutContainer = styled.button`
    padding: .5rem;
    border: 1px solid transparent;
    background-color: transparent;
    display: flex;
    height: 3rem;
    width: auto;
    color: #fff;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    font-size: 1rem;
`

export const StyledSVG = styled(ReactSVG)` 
    height: 60%;
    & * {
        height: 100%;
        width: 100%;
    }
    & path {
        stroke: #fff;
        transition: .2s ease-in-out;
    }

    &:hover path {
        stroke: #666;
    }
    
`

export const AddItem = styled(Link)`
color: #fff;
border-radius: .5rem;
border: 1px solid #fff;
padding: .5rem;
background: transparent;
display: flex;
text-decoration: none;
align-items: center;
text-align: center;
justify-content: center;
`