import { REVIEWS } from '@/constants';
import { Review, Container, SectionContainer, Name, Title } from './styled';
import { useRef, useState } from 'react';

export const Reviews = () => {
    const reviewRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [left, setLeft] = useState(0);
    const slidersStep = 3;
    const reviewGap = 42;
    const [slidersMoved, setSlidersMoved] = useState(slidersStep)

    const moveSlider = () => {
        const widthOfOneReview = reviewRef?.current?.getBoundingClientRect().width || 0;
        const widthOfSlidedReviews = (widthOfOneReview + reviewGap) * slidersStep;
        const slidesLeft = REVIEWS.length - slidersMoved

        if (slidesLeft > 0) {
            if (slidesLeft > slidersStep) setLeft((prev) => prev + widthOfSlidedReviews);
            else setLeft((prev) => prev + (slidesLeft) * widthOfOneReview);
        }
        setSlidersMoved(prev => prev + slidersStep)
    };

    return (
        <SectionContainer ref={sectionRef}>
            <div className="wrapper">
                <Title>Отзывы о Mi Scooter Pro 2</Title>
                <Container ref={containerRef} $left={left} $gap={reviewGap}>
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
