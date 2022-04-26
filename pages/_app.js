// import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { createGlobalStyle, ThemeProvider } from "styled-components"
// import Layout from "../components/Layout"
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin: auto;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
