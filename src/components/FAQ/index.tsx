import { FAQ_ITEMS } from '@/constants';
import {
    Container,
    SectionText,
    TextContainer,
    Question,
    FAQContainer,
} from './styled';

export const FAQ = () => (
    <section>
        <Container className="wrapper">
            <SectionText>
                <h2 className="colored-title">Часто задаваемые вопросы</h2>
                <TextContainer>
                    <p>
                        Все ваши часто задаваемые вопросы об электросамокате Mi
                        Scooter Pro 2.
                    </p>
                </TextContainer>
            </SectionText>
            <FAQContainer>
                {FAQ_ITEMS.map(({ question, answer }) => (
                    <div key={question}>
                        <Question>{question}</Question>
                        <p>{answer}</p>
                    </div>
                ))}
            </FAQContainer>
        </Container>
    </section>
);
