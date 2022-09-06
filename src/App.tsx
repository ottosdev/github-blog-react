import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { Router } from "./routes/Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";


export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}
