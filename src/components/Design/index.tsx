import { DESIGN_CARDS_INFO } from '@/constants';
import { DesignCard } from './DesignCard';
import { Container, Title, Wrapper } from './styled';

export const Design = () => (
    <section>
        <Wrapper className="wrapper">
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
        </Wrapper>
    </section>
);
