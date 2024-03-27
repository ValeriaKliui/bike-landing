import { ColorType } from '../ImageBlock/interfaces';
import { AdvantageProps } from './interfaces';
import {
    SectionWrapper,
    AdvantagesGrid,
    AdvantageTextContainer,
    AdvantageImage,
    Title,
    SectionTitle,
} from './styled';
import { FC, Fragment, useState } from 'react';

export const Advantages: FC<AdvantageProps> = ({
    title,
    advantages = [],
    colorType = ColorType.light,
}) => {
    const [choosenIndex, setIsChoosenIndex] = useState(0);

    const chooseAdvantage = (index: number) => setIsChoosenIndex(index);

    return (
        <SectionWrapper>
            <div className="wrapper">
                <SectionTitle $colorType={colorType}>{title}</SectionTitle>
                <AdvantagesGrid>
                    {advantages.map(
                        ({ advantage, description, imgSrc }, index) => {
                            const isChoosen = choosenIndex === index;
                            const isLast = index === advantages.length - 1;
                            const sum = index + choosenIndex;
                            const imgIndex =
                                sum >= advantages.length
                                    ? sum - advantages.length
                                    : sum;
                            // const isShowed = choosenIndex + 1;
                            console.log(choosenIndex + 1, imgIndex);

                            return (
                                <Fragment key={advantage}>
                                    <AdvantageTextContainer
                                        $index={index}
                                        onClick={() => chooseAdvantage(index)}
                                        $isChoosen={isChoosen}
                                    >
                                        <Title
                                            $isChoosen={isChoosen}
                                            $isLast={isLast}
                                        >
                                            {advantage}
                                        </Title>
                                        <p>{description}</p>
                                    </AdvantageTextContainer>
                                    <AdvantageImage
                                        src={imgSrc}
                                        id={index}
                                        $index={index}
                                    />
                                </Fragment>
                            );
                        }
                    )}
                </AdvantagesGrid>
            </div>
        </SectionWrapper>
    );
};
