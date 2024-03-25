import { ADVANTAGES } from '@/constants';
import {
    SectionWrapper,
    AdvantagesGrid,
    AdvantageTextContainer,
    AdvantageImage,
    Title,
    AdvantageContainer,
    Advantage,
} from './styled';
import { Fragment, useState } from 'react';

export const Advantages = () => {
    const [choosenIndex, setIsChoosenIndex] = useState(0);

    const chooseAdvantage = (index: number) => setIsChoosenIndex(index);

    return (
        <SectionWrapper>
            <div className="wrapper">
                <h2>
                    Мощная батарея и экономичный расход заряда позволяют
                    преодолевать расстояния до 45 км
                </h2>
                <AdvantagesGrid>
                    {ADVANTAGES.map(
                        ({ advantage, description, imgSrc }, index) => {
                            const isChoosen = choosenIndex === index;
                            const isFirst = index === 0;
                            const isLast = index === ADVANTAGES.length - 1;
                            const sum = index + choosenIndex;
                            const imgIndex =
                                sum >= ADVANTAGES.length
                                    ? sum - ADVANTAGES.length
                                    : sum;

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
                                        $index={imgIndex}
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
