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

const Main = styled.main`
    flex-grow: 1;
`;

const App = () => (
    <>
        <Header />
        <Main>
            <Preview />
            <Advantages />
            <ImageBlock
                title="Высокая скорость передвижения"
                text="Двигатель мощностью до 600 Вт позволяет развивать скорость до 25 км/ч."
                src={PeopleImg}
                colorType={ColorType.light}
            />
            <Design />
            <ImageBlock
                title="О бренде Xiaomi"
                text="Компания Xiaomi была основана предпринимателем Лей Цзюнем в 2010 году под девизом - «Инновации для всех». Мы верим, что высококачественные продукты и передовые технологии должны быть доступны каждому."
                src={MeetingImg}
                colorType={ColorType.primary}
            />
            <Reviews />
            <FAQ />
        </Main>
        <Footer />
    </>
);

export default App;
