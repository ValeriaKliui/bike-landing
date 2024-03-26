import { REVIEWS } from '@/constants';
import { Review, Container, SectionContainer, Name, Title } from './styled';
import { useRef, useState } from 'react';

export const Reviews = () => {
    const reviewRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [left, setLeft] = useState(0);
    const step = 3;

    const moveSlider = () => {
        const widthOfReview = reviewRef?.current?.getBoundingClientRect().width;
        const widthOfShowingReviews = widthOfReview * step;
        console.log(containerRef?.current?.getBoundingClientRect().right);

        if (containerRef?.current?.getBoundingClientRect().right >= 0) {
            if (
                containerRef?.current?.getBoundingClientRect().right >=
                widthOfShowingReviews
            )
                setLeft((prev) => prev + widthOfShowingReviews);
            else
                setLeft(
                    (prev) =>
                        prev +
                        containerRef?.current?.getBoundingClientRect().right +
                        widthOfReview
                );
        }

        // if (
        //     containerRef?.current?.getBoundingClientRect().right >=
        //     (reviewRef?.current?.getBoundingClientRect().width) * 2
        // )
        //     setLeft(
        //         (prev) =>
        //             prev + reviewRef?.current?.getBoundingClientRect().width * 2
        //     );
    };

    return (
        <SectionContainer ref={sectionRef}>
            <div className="wrapper">
                <Title>Отзывы о Mi Scooter Pro 2</Title>
                <Container $left={left} ref={containerRef}>
                    {REVIEWS.map(({ name, review }, index) => (
                        <Review key={index} ref={reviewRef}>
                            <Name>{name || 'Имя скрыто'}</Name>
                            <p>{review}</p>
                        </Review>
                    ))}
                </Container>
                <button onClick={moveSlider}>sdsf</button>
            </div>
        </SectionContainer>
    );
};
