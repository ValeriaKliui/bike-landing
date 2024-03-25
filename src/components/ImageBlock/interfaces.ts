export interface ImageBlockProps {
    title: string;
    text: string;
    src: string;
    colorType: ColorType;
}
export enum ColorType {
    light = 'light',
    primary = 'primary',
}
