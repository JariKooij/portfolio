import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useWindowBlurChangeTitle } from "./hooks/useWindowBlurChangeTitle";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import BgPattern from "./components/BgPattern/BgPattern";
import { useCursorUpdate } from "./hooks/CursorContext";

import Home from "./pages/Home/Home";


const App = () => {
	useWindowBlurChangeTitle('Please, come back!');
    const cursorUpdate = useCursorUpdate();    

  	return (
		<div className="App">
			<BrowserRouter>
				
				<div id="wrapper">
					
					<main>
						<Routes>
							<Route path="/" element={ <Home /> }/>
							<Route path="/work" element={ <p>work</p> }/>
							<Route path="/about" element={ <p>about</p> }/>
						</Routes>
					</main>
					<Sidebar />
				</div>
				<Footer />
			</BrowserRouter>
			<CustomCursor />
			<BgPattern />

			<div id="mobile-hamburger"
				onMouseEnter={cursorUpdate}
				onMouseLeave={cursorUpdate}
			>
				<span/>
				<span/>
				<span/>
			</div>
		</div>
	);
};

export default App;