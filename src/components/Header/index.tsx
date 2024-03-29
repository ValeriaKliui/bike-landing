import { Nav } from '../Nav';
import {
    Container,
    HeaderWrapper,
    HeaderContainer,
    ButtonWrapper,
} from './styled';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { Burger } from '../Burger';

export const Header = () => (
    <HeaderContainer>
        <HeaderWrapper className="wrapper">
            <Container>
                <Logo />
                <Nav />
            </Container>
            <ButtonWrapper>
                <Button text="Купить" />
            </ButtonWrapper>
            <Burger />
        </HeaderWrapper>
    </HeaderContainer>
);
