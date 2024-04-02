import { REVIEWS } from '@/constants';
import './index.css';
import ArrowSvg from '@assets/icons/Arrow.svg?react';
import {
    CarouselStyled,
    LeftButton,
    Name,
    Review,
    RightButton,
    ArrowsContainer,
    Container,
    Dot,
} from './styled';
import { ScreenSizes } from '@/providers/Theme/interface';
import { ButtonGroupProps, DotProps } from 'react-multi-carousel';
import { FC } from 'react';
import { useWindowSize } from 'usehooks-ts';

export const Slider = () => {
    const { width = 0 } = useWindowSize();

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

    const ButtonGroup: FC<ButtonGroupProps> = ({ next, previous }) => (
        <ArrowsContainer>
            <LeftButton onClick={previous}>
                <ArrowSvg />
            </LeftButton>
            <RightButton onClick={next}>
                <ArrowSvg />
            </RightButton>
        </ArrowsContainer>
    );

    const CustomDot: FC<DotProps> = ({ onClick, active }) => (
        <Dot onClick={onClick} $active={active} />
    );

    return (
        <Container>
            <CarouselStyled
                responsive={responsive}
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                sliderClass="sliderList"
                itemClass="carouselItem"
                showDots={width <= ScreenSizes.md ? true : false}
                customDot={<CustomDot />}
                renderDotsOutside
            >
                {REVIEWS.map(({ name, review }, index) => (
                    <Review key={index}>
                        <Name>{name || 'Имя скрыто'}</Name>
                        <p>{review}</p>
                    </Review>
                ))}
            </CarouselStyled>
        </Container>
    );
};
