import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IssuesProvider } from './contexts/IssuesContext'
import { UserProvider } from './contexts/UserContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <UserProvider>
          <IssuesProvider>
            <Router />
          </IssuesProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
