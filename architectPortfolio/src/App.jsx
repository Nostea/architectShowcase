import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import { useState } from "react";

// Import des Context
import { LoadingContext, ThemeContext } from "./components/Context/Context";
import Loadingsscreen from "./pages/Loadingscreen/Loadingscreen";

function App() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? "dark" : ""}>
      {/* "loadingContext.Provider>" der sorgt dafür das der state den wir in der app.jsx "loading " erstellt haben überall zur verfüguing steht
       value={{ loading, setLoading }} mit dieser Zeile habe ich die verbindung hergestellt zum useState "loading" und den LoadingContext <3
      */}

      {/* Es ist egal wie rum wir die Porvieder schrieben, es ist nur wichtig das alle alles warappen */}

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          {loading ? (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </BrowserRouter>
          ) : (
            <Loadingsscreen />
          )}
        </LoadingContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
