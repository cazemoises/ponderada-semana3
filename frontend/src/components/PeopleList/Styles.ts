import styled from 'styled-components';

import editImg from '../../assets/edit-svgrepo-com.svg';
import deleteImg from '../../assets/delete-2-svgrepo-com.svg'
import { Link } from 'react-router-dom';

interface TextProps {
    before?: string,
    after?: string
}

export const Container = styled.div`
--grid-layout-gap: 1.5rem;
--grid-column-count: 4;
--grid-item--min-width: 12rem;

--gap-count: calc(var(--grid-column-count) - 1);
--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
--grid-item--max-width: 
    calc((100% - var(--total-gap-width)) / var(--grid-column-count));

grid-template-columns: repeat(
    auto-fill, 
    minmax(max(var(--grid-item--min-width), 
    var(--grid-item--max-width)), 
    1fr
));
grid-gap: var(--grid-layout-gap);

padding: 5rem 3rem;
display: grid;
justify-content: center;
`

export const Item = styled.div`
overflow: auto;
padding: 1rem;
display: flex;
flex-direction: column;
flex: 1;
border-radius: 1rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
transition: 4s;

&.flipped .card-front {
    transform: rotateY(180deg);
    display: none;
}

& .card-back {
    display: none;
}

&.flipped .card-back {
    display: flex;
    flex-direction: column;
    transform: rotateY(0deg);
}
`

export const TextsContainer = styled.div`
overflow: auto;
`

export const Text = styled.p<TextProps>`
    display: flex;
    gap: .4rem;
    
    ${(props) => props.before &&
        `&::before {
            font-weight: 700;
            content: '${props.before}';
            width: 100%;
            text-align: left;
        }`
    }

    ${(props) => props.after &&
        `&::after {
            content: '${props.after}';
            width: 100%;
            text-wrap: nowrap;
            font-weight: initial;
            text-align: right;
        }`
    }
`

export const ActionsRow = styled.div`
    display: flex;
    width: 100%;
    gap: 1rem;
`

export const ActionButton = styled.button<{type: string}>`
    padding: .5rem;
    min-height: 2rem;
    width: 2rem;
    flex: 1;
    background-color: transparent;
    background-image: url(${(props) => props.type === "edit" ? editImg : deleteImg });
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    transition: .2s;

    &:hover {
        transform: scale(1.05);
    }
`

export const EditButton = styled(Link)`
    padding: .5rem;
    min-height: 2rem;
    width: 2rem;
    flex: 1;
    background-image: url(${(props) => props.type === "edit" ? editImg : deleteImg });
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    transition: .2s;

    &:hover {
        transform: scale(1.05);
    }
`

export const CardSide = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: transform 0.5s ease;
`;

export const CardFront = styled(CardSide)`
    transform: rotateY(0deg);
`;

export const CardBack = styled(CardSide)`
    transform: rotateY(180deg);
    /* Additional styles for the back of the card */
`;

export const Empty = styled.p`
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-weight: 500;
`