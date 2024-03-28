import { createGlobalStyle } from 'styled-components';
import GilroyWoff from '@assets/fonts/Gilroy-Regular.woff';
import GilroyEot from '@assets/fonts/Gilroy-Regular.eot';
import GilroyTtf from '@assets/fonts/Gilroy-Regular.ttf';
import GilroySemiboldWoff from '@assets/fonts/Gilroy-SemiBold.woff';
import GilroySemiboldEot from '@assets/fonts/Gilroy-SemiBold.eot';
import GilroySemiboldTtf from '@assets/fonts/Gilroy-SemiBold.ttf';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        src:
            url(${GilroyWoff}) format('woff'),
            url(${GilroyEot}) format('eot'),
            url(${GilroyTtf}) format('ttf');
    }
    @font-face {
        font-family: 'Gilroy-Semibold';
        src:
            url(${GilroySemiboldWoff}) format('woff'),
            url(${GilroySemiboldEot}) format('eot'),
            url(${GilroySemiboldTtf}) format('ttf');
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    h1,
    h2,
    h3,
    h4 {
        margin: 0;
    }
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
    }
    body,
    button {
        font-family: 'Gilroy';
        font-size: 14px;
        color: ${({ theme }) => theme.mainColor};
    }
    p {
        line-height: 150%;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: radial-gradient(
                200px circle at 85% 0%,
                ${({ theme }) => theme.circlesBackground} 50%,
                transparent 420%
            ),
            radial-gradient(
                150px circle at 25% 16%,
                ${({ theme }) => theme.circlesBackground} 50%,
                transparent 400%
            ),
            radial-gradient(
                250px circle at 65% 36%,
                ${({ theme }) => theme.circlesBackground} 50%,
                transparent 400%
            ),
            radial-gradient(
                100px circle at 25% 55%,
                ${({ theme }) => theme.circlesBackground} 50%,
                transparent 560%
            ),
            url(${({ theme }) => theme.noiseSrc});
        background-color: ${({ theme }) => theme.background};
    }
    .wrapper {
        margin: 0 auto;
        max-width: 1160px;
    }
    h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 5.7em;
    }
    h2 {
        font-family: 'Gilroy-Semibold';
        font-size: 3.2em;
        margin-bottom: 1em;
    }
    h3 {
        font-family: 'Gilroy-Semibold';
        font-size: 2.2em;
    }
    h4 {
        font-family: 'Gilroy-Semibold';
        font-size: 1.4em;
        margin-bottom: 1em;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    section {
        margin-bottom: 8.6em;
    }
    .colored-title {
        color: ${({ theme }) => theme.primary};
    }

    .my-node-enter {
        opacity: 0;
    }

    .my-node-enter-active {
        opacity: 1;
        transition: opacity 200ms;
    }

    .my-node-exit {
        opacity: 1;
    }

    .my-node-exit-active {
        opacity: 0;
        transition: opacity 200ms;
    }
`;
