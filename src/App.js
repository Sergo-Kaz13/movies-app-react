import { ThemeProvider } from 'styled-components';

import { Layout } from './components';
import { GlobalStyle } from './styles';

export const App = () => (
    <ThemeProvider theme={{}}>
        <GlobalStyle />
        <Layout>Content</Layout>
    </ThemeProvider>
);
