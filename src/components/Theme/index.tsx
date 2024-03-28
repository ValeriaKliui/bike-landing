import { useMemo, useState } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { BaseTheme, ThemeType, ThemeProps, ScreenSizes } from './interface';
import LightNoiseSrc from '@assets/images/lightNoise.svg';
import DarkNoiseSrc from '@assets/images/darkNoise.svg';
import { colors, devices, darkThemeColors } from './constants';

const themeLight: BaseTheme = {
    colors,
    devices,
    noiseSrc: LightNoiseSrc,
};

const themeDark: BaseTheme = {
    ...themeLight,
    colors: {
        ...themeLight.colors,
        ...darkThemeColors,
    },
    noiseSrc: DarkNoiseSrc,
};

export const Theme = ({ children }: ThemeProps) => {
    const [theme, setTheme] = useState(ThemeType.light);
    const changeTheme = () => {
        setTheme((prev) =>
            prev === ThemeType.light ? ThemeType.dark : ThemeType.light
        );
    };

    const contextValues = useMemo(() => ({ theme, changeTheme }), [theme]);
    return (
        <ThemeContext.Provider value={contextValues}>
            <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
