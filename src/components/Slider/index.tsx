import { REVIEWS } from '@/constants';
import './index.css';
import ArrowSvg from '@assets/icons/Arrow.svg?react';
import {
    CarouselStyled,
    LeftButton,
    Name,
    Review,
    RightButton,
} from './styled';
import { ScreenSizes } from '@/providers/Theme/interface';

export const Slider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 10000, min: ScreenSizes.md },
            items: 2.5,
            slidesToSlide: 2,
        },
        tablet: {
            breakpoint: { max: ScreenSizes.md, min: ScreenSizes.sm },
            items: 1.5,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: ScreenSizes.sm, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    const CustomLeftArrow = ({ onClick }) => (
        <LeftButton onClick={onClick}>
            <ArrowSvg />
        </LeftButton>
    );

    const CustomRightArrow = ({ onClick }) => (
        <RightButton onClick={onClick}>
            <ArrowSvg />
        </RightButton>
    );

    return (
        <div style={{ position: 'relative' }}>
            <CarouselStyled
                responsive={responsive}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                renderArrowsWhenDisabled
                sliderClass="sliderList"
                itemClass="carouselItem"
            >
                {REVIEWS.map(({ name, review }, index) => (
                    <Review key={index}>
                        <Name>{name || 'Имя скрыто'}</Name>
                        <p>{review}</p>
                    </Review>
                ))}
            </CarouselStyled>
        </div>
    );
};
