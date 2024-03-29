import { REVIEWS } from '@/constants';
import { Review, SectionContainer, Name } from './styled';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        slidesToSlide: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export const Reviews = () => {
    // const reviewRef = useRef<HTMLDivElement>(null);
    // const containerRef = useRef<HTMLDivElement>(null);
    // const sectionRef = useRef<HTMLDivElement>(null);
    // const [left, setLeft] = useState(0);
    // const slidersStep = 3;
    // const reviewGap = 42;
    // const [slidesMoved, setSlidesMoved] = useState(slidersStep);

    // const slidesLeft = REVIEWS.length - slidesMoved;

    // const moveSliderRight = () => {
    //     const widthOfOneReview =
    //         reviewRef?.current?.getBoundingClientRect().width || 0;
    //     const widthOfSlidedReviews =
    //         (widthOfOneReview + reviewGap) * slidersStep;
    //     if (slidesLeft > 0) {
    //         if (slidesLeft > slidersStep)
    //             setLeft((prev) => prev + widthOfSlidedReviews);
    //         else setLeft((prev) => prev + slidesLeft * widthOfOneReview);
    //         setSlidesMoved((prev) => prev + slidersStep);
    //     }
    // };

    // const moveSliderLeft = () => {
    //     const widthOfOneReview =
    //         reviewRef?.current?.getBoundingClientRect().width || 0;
    //     const widthOfSlidedReviews =
    //         (widthOfOneReview + reviewGap) * slidersStep;
    //     if (slidesMoved > slidersStep) {
    //         if (slidesLeft > 0 && slidesLeft < slidersStep)
    //             setLeft((prev) => prev - slidesLeft * widthOfOneReview);
    //         else setLeft((prev) => prev - widthOfSlidedReviews);
    //         setSlidesMoved((prev) => prev - slidersStep);
    //     }
    // };

    return (
        <SectionContainer>
            <div className="wrapper">
                <h2>Отзывы о Mi Scooter Pro 2</h2>
                <Carousel responsive={responsive}>
                    {REVIEWS.map(({ name, review }, index) => (
                        <Review key={index}>
                            <Name>{name || 'Имя скрыто'}</Name>
                            <p>{review}</p>
                        </Review>
                    ))}
                </Carousel>
            </div>
        </SectionContainer>
        // <SectionContainer ref={sectionRef}>
        //     <div className="wrapper">
        //         <h2>Отзывы о Mi Scooter Pro 2</h2>
        //         <Container>
        //             <ReviewsContainer
        //                 ref={containerRef}
        //                 $left={left}
        //                 $gap={reviewGap}
        //             >
        //                 {REVIEWS.map(({ name, review }, index) => (
        //                     <Review key={index} ref={reviewRef}>
        //                         <Name>{name || 'Имя скрыто'}</Name>
        //                         <p>{review}</p>
        //                     </Review>
        //                 ))}
        //             </ReviewsContainer>
        //             <Buttons>
        //                 <LeftButton onClick={moveSliderLeft}>
        //                     <ArrowSvg />
        //                 </LeftButton>
        //                 <RightButton onClick={moveSliderRight}>
        //                     <ArrowSvg />
        //                 </RightButton>
        //             </Buttons>
        //         </Container>
        //     </div>
        // </SectionContainer>
    );
};
