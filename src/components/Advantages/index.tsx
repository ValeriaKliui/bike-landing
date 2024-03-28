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
                            const imgNextIndex =
                                advantages.length - 1 === choosenIndex
                                    ? 0
                                    : choosenIndex + 1;

                            const isShowing =
                                index === choosenIndex ||
                                index === imgNextIndex;

                            return (
                                <Fragment key={advantage}>
                                    <AdvantageTextContainer
                                        onClick={() => chooseAdvantage(index)}
                                        $index={index}
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
                                    {isShowing && (
                                        <AdvantageImage
                                            src={imgSrc}
                                            onClick={() =>
                                                chooseAdvantage(index)
                                            }
                                            $isFirst={index === choosenIndex}
                                            $totalAmount={advantages.length}
                                        />
                                    )}
                                </Fragment>
                            );
                        }
                    )}
                </AdvantagesGrid>
            </div>
        </SectionWrapper>
    );
};
