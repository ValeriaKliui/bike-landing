import { css } from 'styled-components';
import { ScreenSizes } from './interface';

export const devices = {
    xs: `@media (max-width: ${ScreenSizes.xs}px)`,
    sm: `@media (max-width: ${ScreenSizes.sm}px)`,
    md: `@media (max-width: ${ScreenSizes.md}px)`,
    lg: `@media (max-width: ${ScreenSizes.lg}px)`,
    xl: `@media (max-width: ${ScreenSizes.xl}px)`,
    xxl: `@media (min-width: ${ScreenSizes.xxl}px)`,
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
