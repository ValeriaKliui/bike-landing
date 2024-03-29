import { createContext, useState, useMemo } from 'react';
import { AppContextType } from './interfaces';

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const openMenu = () => setIsMenuOpened(true);

    const closeMenu = () => setIsMenuOpened(false);

    const contextValues: AppContextType = useMemo(
        () => ({ isMenuOpened, openMenu, closeMenu }),
        [isMenuOpened]
    );
    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};
