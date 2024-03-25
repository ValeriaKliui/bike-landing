import { FC } from 'react';
import { Logo } from '../Logo';
import { SectionWrapper, Container, Text, Title } from './styled';
import { ColorType, ImageBlockProps } from './interfaces';

export const ImageBlock: FC<ImageBlockProps> = ({
    title,
    text,
    src,
    colorType = ColorType.primary,
}) => {
    const textSentences = text.split('.');

    return (
        <SectionWrapper $src={src} $colorType={colorType}>
            <Container className="wrapper">
                <Logo $type="light" />
                <Text>
                    <Title $colorType={colorType}>{title}</Title>
                    {textSentences.map((sentence) => (
                        <p key={sentence}>{sentence}</p>
                    ))}
                </Text>
            </Container>
        </SectionWrapper>
    );
};
