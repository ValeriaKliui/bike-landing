import { createContext, useState, useMemo, FC } from 'react';
import { AppContextType, AppProps } from './interfaces';

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<AppProps> = ({ children }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const openMenu = () => setIsMenuOpened(true);

    const closeMenu = () => setIsMenuOpened(false);
    const toggleMenu = () => setIsMenuOpened((prev) => !prev);

    const contextValues: AppContextType = useMemo(
        () => ({ isMenuOpened, openMenu, closeMenu, toggleMenu }),
        [isMenuOpened]
    );
    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};
