import { BaseTheme, ScreenSizes } from './interface';
import LightNoiseSrc from '@assets/images/lightNoise.svg';
import DarkNoiseSrc from '@assets/images/darkNoise.svg';

export const devices = {
    xs: `@media (max-width: ${ScreenSizes.xs}px)`,
    sm: `@media (max-width: ${ScreenSizes.sm}px)`,
    md: `@media (max-width: ${ScreenSizes.md}px)`,
    lg: `@media (max-width: ${ScreenSizes.lg}px)`,
    xl: `@media (max-width: ${ScreenSizes.xl}px)`,
    xxl: `@media (max-width: ${ScreenSizes.xxl}px)`,
    xxxl: `@media (min-width: ${ScreenSizes.xxl}px)`,
};

export const colors = {
    primary: '#FF4C0D',
    white: '#f1f1f1',
    background: '#E0E0E0',
    circlesBackground: '#fc4f1f8b',
    disabled: '#826157',
    dark: '#151515',
    mainColor: '#151515',
    subColor: '#f1f1f1',
};

export const darkThemeColors = {
    mainColor: '#f1f1f1',
    subColor: '#151515',
    background: '#222222',
};

export const themeLight: BaseTheme = {
    colors,
    devices,
    noiseSrc: LightNoiseSrc,
};

export const themeDark: BaseTheme = {
    ...themeLight,
    colors: {
        ...themeLight.colors,
        ...darkThemeColors,
    },
    noiseSrc: DarkNoiseSrc,
};
