import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="bg-background">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
