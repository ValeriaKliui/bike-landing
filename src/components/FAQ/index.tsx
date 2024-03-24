import { FAQ_ITEMS } from '@/constants';
import { Button } from '../Button';
import { SectionContainer, SectionText, TextContainer, Question } from './styled';

export const FAQ = () => (
    <SectionContainer className="wrapper">
        <SectionText>
            <h2>Часто задаваемые вопросы</h2>
            <TextContainer> <p>
                Все ваши часто задаваемые вопросы об электросамокате Mi Scooter
                Pro 2.
            </p>
                <p>
                    Если у вас есть собственный вопрос - задайте его через форму
                    обратной связи.
                </p>
                <Button text="Задать вопрос" />
            </TextContainer>
        </SectionText>
        <div>
            {FAQ_ITEMS.map(({ answer, question }) => (
                <>
                    <Question>{question}</Question>
                    <p>{answer}</p>
                </>
            ))}
        </div>
    </SectionContainer>
);
