import { COMPLECT } from '@/constants';
import { Button } from '../Button';
import { Toggler } from '../Toggler';
import {
    Container,
    Subtitle,
    MediaContainer,
    BikeImage,
    Title,
    LeftContainer,
    Complect,
    SectionContainer,
} from './styled';
import BikeLightImg from '@assets/images/bike_light.png';
import BikeDarkImg from '@assets/images/bike_dark.png';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeType } from '../Theme/interface';

export const BikeBlock = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <SectionContainer>
            <Container className="wrapper">
                <LeftContainer>
                    <div>
                        <Title>Mi Electric Scooter Pro 2</Title>
                        <Subtitle className="colored-title">2000 BYN</Subtitle>
                        <Toggler />
                    </div>
                    <Button text="Купить" primary />
                </LeftContainer>
                <MediaContainer>
                    <BikeImage
                        src={
                            theme === ThemeType.dark
                                ? BikeLightImg
                                : BikeDarkImg
                        }
                    />
                    <Complect>
                        <h4>Комплект поставки</h4>
                        <div>
                            {COMPLECT.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </div>
                    </Complect>
                </MediaContainer>
            </Container>
        </SectionContainer>
    );
};
