import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Layout } from './components';
import { GlobalStyles } from './styles';
import { darkTheme, lightTheme } from './themes';

export const App = () => {
    const [theme, setTheme] = useState(darkTheme);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>Content</Layout>
        </ThemeProvider>
    );
};
