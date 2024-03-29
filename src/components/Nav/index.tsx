import { Link } from 'react-router-dom';
import { NavContainer } from './styled';
import { useContext } from 'react';
import { AppContext } from '@/providers/App';
import { AppContextType } from '@/providers/App/interfaces';

export const Nav = () => {
    const { isMenuOpened } = useContext(AppContext) as AppContextType;

    return (
        <NavContainer $isMenuOpened={isMenuOpened}>
            <Link to="#">О продукте</Link>
            <Link to="#">Внешний вид</Link>
            <Link to="#">Безопасность</Link>
            <Link to="#">Отзывы</Link>
            <Link to="#">FAQ</Link>
        </NavContainer>
    );
};
