import { Toggler } from '../Toggler';
import { SectionContainer, Subtitle } from './styled';

export const Preview = () => (
    <SectionContainer>
        <div className="wrapper">
            <h1>Стильный электросамокат с мощным аккумулятором</h1>
            <Subtitle>
                Улучшенная производительность для дальних путешествий. Работает
                так же просто, <br />
                как и выглядит.
            </Subtitle>
            <Toggler />
        </div>
    </SectionContainer>
);
