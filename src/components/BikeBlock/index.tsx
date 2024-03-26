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
} from './styled';
import BikeImg from '@assets/images/bikeBig.png';

export const BikeBlock = () => (
    <section>
        <Container className="wrapper">
            <LeftContainer>
                <div>
                    <Title>Mi Electric Scooter Pro 2</Title>
                    <Subtitle>2000 BYN</Subtitle>
                    <Toggler />
                </div>
                <Button text="Купить" primary />
            </LeftContainer>
            <MediaContainer>
                <BikeImage src={BikeImg} />
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
    </section>
);
