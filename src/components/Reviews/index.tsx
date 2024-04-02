import 'react-multi-carousel/lib/styles.css';
import { Slider } from '../Slider';
import { SectionContainer } from './styled';

export const Reviews = () => (
    <SectionContainer>
        <div className="wrapper">
            <h2>Отзывы о Mi Scooter Pro 2</h2>
            <Slider />
        </div>
    </SectionContainer>
);
