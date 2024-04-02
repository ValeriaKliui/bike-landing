import { useContext } from 'react';
import { BurgerLine, Container } from './styled';
import { AppContext } from '@/providers/App';
import { AppContextType } from '@/providers/App/interfaces';

export const Burger = () => {
    const { toggleMenu, isMenuOpened } = useContext(
        AppContext
    ) as AppContextType;

    return (
        <Container onClick={toggleMenu} $isOpened={isMenuOpened}>
            {[
                ...Array(3)
                    .fill(1)
                    .map((_, index) => (
                        <BurgerLine className="burger-line" key={index} />
                    )),
            ]}
        </Container>
    );
};
