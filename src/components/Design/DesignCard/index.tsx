import { Container } from './styled';

export const DesignCard = ({ imageSrc, title, text }) => (
    <Container $src={imageSrc}>
        <h4>
            {title}
        </h4>
        <p>{text}</p>
    </Container>
);
