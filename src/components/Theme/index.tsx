import { useMemo, useState } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { BaseTheme, ThemeType, ThemeProps } from './interface';

const themeLight: BaseTheme = {
    primary: '#FF4C0D',
    white: '#f1f1f1',
    background: '#f1f1f1',
    circlesBackground: '#fc4f1fb7',
    disabled: '#826157',
    dark: '#151515',
    mainColor: '#151515',
    subColor: '#f1f1f1',
};

const themeDark: BaseTheme = {
    ...themeLight,
    mainColor: '#f1f1f1',
    subColor: '#151515',
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
