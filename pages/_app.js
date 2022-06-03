import '../styles/globals.css'
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'https://b2cdemo.getswift.asia/graphql',
  cache: new InMemoryCache()
});

const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <Component {...pageProps} />
        </StyledEngineProvider>
      </ThemeProvider>\
    </ApolloProvider>
  )
}

export default MyApp
