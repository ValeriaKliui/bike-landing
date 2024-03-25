import { DESIGN_CARDS_INFO } from '@/constants';
import { DesignCard } from './DesignCard';
import { Container, Title } from './styled';

export const Design = () => (
    <section>
        <div className="wrapper">
            <Title>
                Лаконичный современный дизайн, в котором нет ничего лишнего
            </Title>
            <Container>
                {DESIGN_CARDS_INFO.map(({ title, text, imageSrc }) => (
                    <DesignCard
                        title={title}
                        text={text}
                        imageSrc={imageSrc}
                        key={title}
                    />
                ))}
            </Container>
        </div>
    </section>
);
