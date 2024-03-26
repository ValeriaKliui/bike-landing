import { FC } from 'react';
import { ButtonProps } from './interface';
import { ButtonStyled } from './styled';

export const Button: FC<ButtonProps> = ({ text, primary }) => (
    <ButtonStyled $primary={primary}>{text}</ButtonStyled>
);
