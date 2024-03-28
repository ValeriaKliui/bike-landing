import { REVIEWS } from '@/constants';
import {
    Review,
    ReviewsContainer,
    SectionContainer,
    Name,
    Container,
    Buttons,
    LeftButton,
    RightButton,
} from './styled';
import { useRef, useState } from 'react';
import ArrowSvg from '@assets/icons/Arrow.svg?react';

export const Reviews = () => {
    const reviewRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [left, setLeft] = useState(0);
    const slidersStep = 3;
    const reviewGap = 42;
    const [slidesMoved, setSlidesMoved] = useState(slidersStep);

    const slidesLeft = REVIEWS.length - slidesMoved;

    const moveSliderRight = () => {
        const widthOfOneReview =
            reviewRef?.current?.getBoundingClientRect().width || 0;
        const widthOfSlidedReviews =
            (widthOfOneReview + reviewGap) * slidersStep;
        if (slidesLeft > 0) {
            if (slidesLeft > slidersStep)
                setLeft((prev) => prev + widthOfSlidedReviews);
            else setLeft((prev) => prev + slidesLeft * widthOfOneReview);
            setSlidesMoved((prev) => prev + slidersStep);
        }
    };

    const moveSliderLeft = () => {
        const widthOfOneReview =
            reviewRef?.current?.getBoundingClientRect().width || 0;
        const widthOfSlidedReviews =
            (widthOfOneReview + reviewGap) * slidersStep;
        if (slidesMoved > slidersStep) {
            if (slidesLeft > 0 && slidesLeft < slidersStep)
                setLeft((prev) => prev - slidesLeft * widthOfOneReview);
            else setLeft((prev) => prev - widthOfSlidedReviews);
            setSlidesMoved((prev) => prev - slidersStep);
        }
    };

    return (
        <SectionContainer ref={sectionRef}>
            <div className="wrapper">
                <h2>Отзывы о Mi Scooter Pro 2</h2>
                <Container>
                    <ReviewsContainer
                        ref={containerRef}
                        $left={left}
                        $gap={reviewGap}
                    >
                        {REVIEWS.map(({ name, review }, index) => (
                            <Review key={index} ref={reviewRef}>
                                <Name>{name || 'Имя скрыто'}</Name>
                                <p>{review}</p>
                            </Review>
                        ))}
                    </ReviewsContainer>
                    <Buttons>
                        <LeftButton onClick={moveSliderLeft}>
                            <ArrowSvg />
                        </LeftButton>
                        <RightButton onClick={moveSliderRight}>
                            <ArrowSvg />
                        </RightButton>
                    </Buttons>
                </Container>
            </div>
        </SectionContainer>
    );
};
