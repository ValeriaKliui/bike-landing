import { Nav } from '../Nav';
import { Container, HeaderWrapper, HeaderContainer } from './styled';
import { Button } from '../Button';
import { Logo } from '../Logo';

export const Header = () => (
    <HeaderContainer>
        <HeaderWrapper className="wrapper">
            <Container>
                <Logo />
                <Nav />
            </Container>
            <Button text="Купить" />
        </HeaderWrapper>
    </HeaderContainer>
);
