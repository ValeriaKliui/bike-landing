import { FooterContainer, WorkData } from './styled';

export const Footer = () => (
    <FooterContainer className="wrapper">
        <div>
            <p>© 2010 - 2021 Xiaomi.</p>
            <p> Все права защищены.</p>
        </div>
        <WorkData>
            <p> 8 800 775 66 15</p>
            <p> Часы работы с 9:00 до 20:00 МСК, Пн. – Пт.</p>
        </WorkData>
    </FooterContainer>
);
