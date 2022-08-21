import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './components';
import { LayoutContainer } from './containers';
import { HomePage } from './pages';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

export const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />

            <LayoutContainer>
                {({ movies, ...other }) => (
                    <Layout {...other}>
                        <HomePage movies={movies} />
                    </Layout>
                )}
            </LayoutContainer>
        </ThemeProvider>
    </BrowserRouter>
);
