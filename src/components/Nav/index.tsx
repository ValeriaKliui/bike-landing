import { Link } from 'react-router-dom';
import { NavContainer } from './styled';

export const Nav = () => (
    <NavContainer>
        <Link to="#">О продукте</Link>
        <Link to="#">Внешний вид</Link>
        <Link to="#">Безопасность</Link>
        <Link to="#">Отзывы</Link>
        <Link to="#">FAQ</Link>
    </NavContainer>
);
