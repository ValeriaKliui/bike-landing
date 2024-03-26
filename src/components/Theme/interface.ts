import { ReactNode } from 'react';

export enum ThemeType {
    light = 'light',
    dark = 'dark',
}
export type BaseTheme = {
    primary: string;
    white: string;
    background: string;
    circlesBackground: string;
    disabled: string;
    dark: string;
    mainColor: string;
    subColor: string;
    noiseSrc: string;
};

export type ThemeProps = {
    children: ReactNode;
};
