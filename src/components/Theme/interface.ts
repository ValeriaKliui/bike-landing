import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export enum ThemeEnum {
    light = 'light',
    dark = 'dark',
}
export type BaseTheme = {
    primary: string;
    white: string;
    background: string;
    circlesBackground: string;
    disabled: string;
};

export type ThemeProps = {
    children: ReactNode;
};
