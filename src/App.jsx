import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useWindowBlurChangeTitle } from "./utils/useWindowBlurChangeTitle";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

export default function App() {
  useWindowBlurChangeTitle('Please, come back!');

  return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper">
          <main>
              <Routes>
                <Route path="/" element={ <p>home</p> }/>
                <Route path="/work" element={ <p>work</p> }/>
                <Route path="/about" element={ <p>about</p> }/>
              </Routes>
          </main>
          <Sidebar />
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}