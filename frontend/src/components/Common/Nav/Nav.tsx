import { useAuth } from "../../../contexts/AuthContext";
import logoutImg from '../../../assets/logout-2-svgrepo-com.svg';
import { AddItem, Container, Li, LogoutContainer, StyledSVG } from "./Styles";


export default function Nav() {

    const { logout } = useAuth();

    return (
        <Container>
            <Li>
                <AddItem to='/user/create'>
                    Adicionar mais pessoas
                </AddItem>
            </Li>
            <Li>
                <LogoutContainer onClick={logout}>
                    <StyledSVG src={logoutImg} stroke="#fff" />
                    Logout
                </LogoutContainer>
            </Li>
        </Container>
    )

}