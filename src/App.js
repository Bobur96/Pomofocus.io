import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Privacy from "./components/Privacy";
import Home from "./components/Home";
import Main from "./components/Main";
import "./index.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(!loaded);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {loaded ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Loading />} />
          )}
          <Route path="/app" element={<Main />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
