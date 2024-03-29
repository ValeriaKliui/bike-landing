import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles';
import { Theme } from './providers/Theme';
import { AppProvider } from './providers/App';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AppProvider>
                <Theme>
                    <GlobalStyles />
                    <App />
                </Theme>
            </AppProvider>
        </BrowserRouter>
    </StrictMode>
);
