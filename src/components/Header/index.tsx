import { Nav } from '../Nav';
import { Container, HeaderContainer } from './styled';
import { Button } from '../Button';
import { Logo } from '../Logo';

export const Header = () => (
    <HeaderContainer className='wrapper'>
        <Container>
            <Logo />
            <Nav />
        </Container>
        <Button text='Купить' />
    </HeaderContainer>
);
