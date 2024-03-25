import { useMemo, useState } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { BaseTheme, ThemeEnum, ThemeProps } from './interface';

const themeLight: BaseTheme = {
    primary: '#FF4C0D',
    white: '#f1f1f1',
    background: '#f1f1f1',
    circlesBackground: '#fc4f1fb7',
    disabled: '#826157',
};

const themeDark: BaseTheme = {
    ...themeLight,
};

export const Theme = ({ children }: ThemeProps) => {
    const [theme, setTheme] = useState(ThemeEnum.light);
    const changeTheme = () => {
        setTheme((prev) =>
            prev === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light
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
