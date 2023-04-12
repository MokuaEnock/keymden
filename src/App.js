import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
