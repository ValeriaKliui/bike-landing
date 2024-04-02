import { ReactNode } from 'react';

export interface AppContextType {
    isMenuOpened: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
}
export type AppProps = {
    children: ReactNode;
};
