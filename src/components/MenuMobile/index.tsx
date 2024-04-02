import { AppContext } from '@/providers/App';
import { Nav } from '../Nav';
import { Container } from './styled';
import { useContext, useEffect } from 'react';
import { AppContextType } from '@/providers/App/interfaces';
import { useWindowSize } from '@uidotdev/usehooks';
import { ScreenSizes } from '@/providers/Theme/interface';

export const MenuMobile = () => {
    const { isMenuOpened, closeMenu } = useContext(
        AppContext
    ) as AppContextType;
    const { width } = useWindowSize();

    useEffect(() => {
        if (width && width > ScreenSizes.md && isMenuOpened) closeMenu();
    }, [width, closeMenu, isMenuOpened]);

    useEffect(() => {
        if (isMenuOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpened]);

    return (
        <Container $isOpened={isMenuOpened}>
            <Nav />
        </Container>
    );
};
