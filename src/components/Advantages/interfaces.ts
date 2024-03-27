import { ColorType } from '../ImageBlock/interfaces';

export interface Advantage {
    advantage: string;
    description: string;
    imgSrc: string;
}
export interface AdvantageProps {
    title: string;
    advantages: Advantage[];
    colorType?: ColorType;
}
