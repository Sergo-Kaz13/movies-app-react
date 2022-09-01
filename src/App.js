import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components';
import { LayoutContainer } from './containers';
import { HomePage, MovieDetailsPage } from './pages';
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
                            {['/favorite', '/profile', '/logout'].map(
                                (path, i) => (
                                    <Route
                                        path={path}
                                        element={<FakePage />}
                                        key={i}
                                    />
                                )
                            )}

                            <Route
                                path="/movie/:movieId"
                                element={<MovieDetailsPage movie={movies} />}
                            ></Route>

                            <Route
                                path="/"
                                element={<HomePage movies={movies} />}
                            ></Route>
                        </Routes>
                    </Layout>
                )}
            </LayoutContainer>
        </ThemeProvider>
    </BrowserRouter>
);
