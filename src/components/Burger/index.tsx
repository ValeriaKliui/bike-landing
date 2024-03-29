import { useContext } from 'react';
import { BurgerLine, Container } from './styled';
import { AppContext } from '@/providers/App';
import { AppContextType } from '@/providers/App/interfaces';

export const Burger = () => {
    const { openMenu } = useContext(AppContext) as AppContextType;

    return (
        <Container onClick={openMenu}>
            {[
                ...Array(3)
                    .fill(1)
                    .map(() => <BurgerLine />),
            ]}
        </Container>
    );
};
