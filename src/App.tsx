import { Header } from '@components/Header';
import styled from 'styled-components';
import { Advantages } from './components/Advantages';
import { Footer } from './components/Footer';
import { ImageBlock } from './components/ImageBlock';
import { Preview } from './components/Preview';
import PeopleImg from '@assets/images/people_on_bike.png';
import MeetingImg from '@assets/images/meeting.png';
import { Design } from './components/Design';
import { FAQ } from './components/FAQ';
import { ColorType } from './components/ImageBlock/interfaces';
import { Reviews } from './components/Reviews';
import { BikeBlock } from './components/BikeBlock';
import { PARAMETERS, PARAMETERS_EXTRA } from './constants';
import pathBottomSrc from '@assets/images/path_bottom.svg';
import { Mobile } from './components/Mobile';

const Main = styled.main`
    flex-grow: 1;
`;
const Wrapper = styled.div`
    position: relative;
    &::after {
        content: url(${pathBottomSrc});
        position: absolute;
        bottom: -176px;
        right: 0;
        display: block;
    }
`;

const App = () => (
    <>
        <Header />
        <Main>
            <Preview />
            <Advantages
                title="Мощная батарея и экономичный расход заряда позволяют преодолевать расстояния до 45 км"
                advantages={PARAMETERS}
            />
            <ImageBlock
                title="Высокая скорость передвижения"
                text="Двигатель мощностью до 600 Вт позволяет развивать скорость до 25 км/ч."
                src={PeopleImg}
                colorType={ColorType.light}
            />
            <Design />
            <Advantages
                title="Заботится о вашей безопасности"
                advantages={PARAMETERS_EXTRA}
                colorType={ColorType.primary}
            />
            <Mobile />
            <Wrapper>
                <ImageBlock
                    title="О бренде Xiaomi"
                    text="Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010 году под девизом - «Инновации для всех». Мы верим, что высококачественные продукты и передовые технологии должны быть доступны каждому."
                    src={MeetingImg}
                    colorType={ColorType.primary}
                />
            </Wrapper>
            <Reviews />
            <FAQ />
            <BikeBlock />
        </Main>
        <Footer />
    </>
);

export default App;
