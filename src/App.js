import { ThemeProvider } from 'styled-components';

import { Layout } from './components';
import { LayoutContainer } from './containers';
import { GlobalStyles } from './styles';
import { darkTheme } from './themes';

export const App = () => (
    <ThemeProvider theme={darkTheme}>
        <GlobalStyles />

        <LayoutContainer>
            {({ movies, ...other }) => (
                <Layout {...other}>
                    <span>Movies list:</span>

                    {movies.map(movie => (
                        <div key={movie.id}>Movie ID: {movie.id}</div>
                    ))}
                </Layout>
            )}
        </LayoutContainer>
    </ThemeProvider>
);
