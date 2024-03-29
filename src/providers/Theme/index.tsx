import { useMemo, useState } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { ThemeContextType, ThemeProps, ThemeType } from './interface';
import { themeDark, themeLight } from './constants';

export const Theme = ({ children }: ThemeProps) => {
    const [theme, setTheme] = useState(ThemeType.light);
    const changeTheme = () => {
        setTheme((prev) =>
            prev === ThemeType.light ? ThemeType.dark : ThemeType.light
        );
    };

    const contextValues: ThemeContextType = useMemo(
        () => ({ theme, changeTheme }),
        [theme]
    );
    return (
        <ThemeContext.Provider value={contextValues}>
            <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
