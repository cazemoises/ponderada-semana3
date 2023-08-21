import styled from 'styled-components';

export interface InputProps {

    variant: "otp" | "gray" | "white",
    value: string,
    onChange: (e: any) => void,
    placeholder: string,
    type: string,
    name?: string,
    disabled?: boolean,
    label?: string

}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
`

export const Label = styled.label`
font-size: .9rem;
`

export const InputElement = styled.input<InputProps>`
    display: flex;
    align-items: center;
    text-align: ${(props) => props.variant === "otp" ?
    "center" : "initial"};
    border: ${(props) => 
        props.variant === "gray" ? "1px solid transparent" :
        props.variant === "otp" ? "1px solid #D0D5DD" :
        "1px solid #D0D5DD"};
    border-radius: .5rem;
    width: ${(props) => props.variant === "otp" ?
    "3.5rem" : "100%"};
    height: ${(props) => props.variant === "otp" ? 
    "3.5rem" : "100%"};
    padding: .5rem;
    transition: .2s ease-in-out;
    background-color: ${(props) => 
        props.variant === "gray" ? "#F7F7F7" : "trasparent"
    };
    color: ${(props) => props.variant === "gray" ? "black" : "#4B5768"};

    &::placeholder {
        color: ${(props) => 
            props.variant === "gray" ? "#808080"
            : "#999DA3" };
    }

    &:focus, &:hover {
        outline: none;
        border: ${(props) => 
            props.variant === "white" ?
            "1px solid #4B5768;" :
            props.variant === "otp" ?
            "1px solid var(--green)"
            : ""
        };
    }

    &:disabled {
        cursor: not-allowed;
    }

    &[type="number"] {
        -moz-appearance: textfield;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
        margin: 0;
    }
`