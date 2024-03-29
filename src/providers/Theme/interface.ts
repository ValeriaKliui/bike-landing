import { ReactNode } from 'react';

export enum ThemeType {
    light = 'light',
    dark = 'dark',
}
export enum ScreenSizes {
    xs = 400, // for small screen mobile
    sm = 600, // for mobile screen
    md = 900, // for tablets
    lg = 1280, // for laptops
    xl = 1440, // for desktop / monitors
    xxl = 1920, // for big screens
}

export type BaseTheme = {
    colors: {
        primary: string;
        white: string;
        background: string;
        circlesBackground: string;
        disabled: string;
        dark: string;
        mainColor: string;
        subColor: string;
    };
    devices: Record<keyof typeof ScreenSizes, string>;
    noiseSrc: string;
};

export type ThemeProps = {
    children: ReactNode;
};

export type ThemeContextType = {
    theme: ThemeType;
    changeTheme: (theme: ThemeType) => void;
};
