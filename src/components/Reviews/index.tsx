import { REVIEWS } from '@/constants';
import { Review, Container } from './styled';

export const Reviews = () => (
    <section>
        <Container className="wrapper">
            {REVIEWS.map(({ name, review }, index) => (
                <Review key={index}>
                    <h4>{name || 'Имя скрыто'}</h4>
                    {review}
                </Review>
            ))}
        </Container>
    </section>
);
