import { Header } from '@components/Header';
import styled from 'styled-components';
import { Advantages } from './components/Advantages';
import { Footer } from './components/Footer';
import { ImageBlock } from './components/ImageBlock';
import { Preview } from './components/Preview';
import PeopleImg from '@assets/images/people_on_bike.png';
import { Design } from './components/Design';
import { FAQ } from './components/FAQ';

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
      />
      <Design />
      <FAQ />
    </Main>
    <Footer />
  </>
);

export default App;
