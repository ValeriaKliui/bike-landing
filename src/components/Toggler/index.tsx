import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container, Option } from './styled';
import { ThemeContextType, ThemeType } from '../../providers/Theme/interface';

export const Toggler = () => {
    const { changeTheme, theme } = useContext(ThemeContext) as ThemeContextType;

    return (
        <Container>
            <Option onClick={changeTheme} $isChoosen={theme === ThemeType.dark}>
                Белый
            </Option>
            <Option
                onClick={changeTheme}
                $isChoosen={theme === ThemeType.light}
            >
                Черный
            </Option>
        </Container>
    );
};
