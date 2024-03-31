import { REVIEWS } from '@/constants';
import Carousel from 'react-multi-carousel';
import './index.css';
import { Name, Review } from './styled';

export const Slider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2.5,
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

    const CustomLeftArrow = ({ onClick, ...rest }) => {
        console.log(rest);
        return (
            <button
                className="custom-left-arrow"
                onClick={() => onClick()}
                disabled={false}
            />
        );
    };
    const CustomRightArrow = ({ onClick }) => (
        <button className="custom-right-arrow" onClick={() => onClick()} />
    );

    return (
        <div style={{ position: 'relative' }}>
            <Carousel
                responsive={responsive}
                containerClass="carousel"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                renderArrowsWhenDisabled
            >
                {REVIEWS.map(({ name, review }, index) => (
                    <Review key={index}>
                        <Name>{name || 'Имя скрыто'}</Name>
                        <p>{review}</p>
                    </Review>
                ))}
            </Carousel>
        </div>
    );
};
