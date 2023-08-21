import { Container, Label, InputElement } from "./Styles";
import { InputProps } from "./Styles";

export default function Input(props: InputProps) {

    return (
        <Container>
            <Label>
                {props.label}
            </Label>
            <InputElement
                name={props.name}
                variant={props.variant}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                placeholder={props.placeholder}
            />
        </Container>
    )

} 