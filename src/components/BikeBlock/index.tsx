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
    ComplectText,
    ImgBikeMobile,
    TogglerContainer,
} from './styled';
import BikeLightImg from '@assets/images/bike_light.png';
import BikeDarkImg from '@assets/images/bike_dark.png';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeContextType, ThemeType } from '../../providers/Theme/interface';

export const BikeBlock = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    return (
        <SectionContainer>
            <Container className="wrapper">
                <LeftContainer>
                    <div>
                        <Title>Mi Electric Scooter Pro 2</Title>
                        <Subtitle className="colored-title">2000 BYN</Subtitle>
                        <TogglerContainer>
                            <Toggler />
                        </TogglerContainer>
                    </div>
                    <ImgBikeMobile
                        src={
                            theme === ThemeType.dark
                                ? BikeLightImg
                                : BikeDarkImg
                        }
                    />
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
                        <ComplectText>
                            {COMPLECT.map((item) => (
                                <p key={item}>{item}</p>
                            ))}
                        </ComplectText>
                    </Complect>
                </MediaContainer>
            </Container>
        </SectionContainer>
    );
};
