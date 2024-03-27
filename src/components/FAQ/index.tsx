import { FAQ_ITEMS } from '@/constants';
import { Container, SectionText, TextContainer, Question } from './styled';
import { Fragment } from 'react/jsx-runtime';

export const FAQ = () => (
    <section>
        <Container className="wrapper">
            <SectionText>
                <h2>Часто задаваемые вопросы</h2>
                <TextContainer>
                    <p>
                        Все ваши часто задаваемые вопросы об электросамокате Mi
                        Scooter Pro 2.
                    </p>
                </TextContainer>
            </SectionText>
            <div>
                {FAQ_ITEMS.map(({ question, answer }) => (
                    <Fragment key={question}>
                        <Question>{question}</Question>
                        <p>{answer}</p>
                    </Fragment>
                ))}
            </div>
        </Container>
    </section>
);
