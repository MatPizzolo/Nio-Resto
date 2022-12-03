import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "assets/theme";
import MKTypography from "components/MKTypography";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
