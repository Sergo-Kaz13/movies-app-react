import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Layout } from './components';
import { LayoutContainer } from './containers';
import { HomePage } from './pages';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

const FakePage = () => {
    return <p>Hello! I'm a fake page!</p>;
};

export const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />

            <LayoutContainer>
                {({ movies, ...other }) => (
                    <Layout {...other}>
                        <Routes>
                            <Route
                                path="/"
                                element={<HomePage movies={movies} />}
                            ></Route>

                            <Route path="/fake" element={<FakePage />}></Route>
                        </Routes>
                    </Layout>
                )}
            </LayoutContainer>
        </ThemeProvider>
    </BrowserRouter>
);
