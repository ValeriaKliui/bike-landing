import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles';
import { Theme } from './components/Theme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Theme>
                <GlobalStyles />
                <App />
            </Theme>
        </BrowserRouter>
    </StrictMode>
);
