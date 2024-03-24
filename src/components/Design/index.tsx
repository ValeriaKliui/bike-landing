import { DESIGN_CARDS_INFO } from '@/constants';
import { DesignCard } from './DesignCard';
import { Container } from './styled';

export const Design = () => (
    <section className="wrapper">
        <h2>
            Лаконичный современный дизайн, в котором нет ничего лишнего
        </h2>
        <Container>
            {DESIGN_CARDS_INFO.map(({ title, text, imageSrc }) => (
                <DesignCard title={title} text={text} imageSrc={imageSrc} />
            ))}
        </Container>
    </section>
);
