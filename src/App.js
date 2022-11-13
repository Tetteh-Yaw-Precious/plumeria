import Homepage from "./pages/Homepage";
import "../src/css/output.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Topnavigation from "./components/Topnavigation";
import Gallery from "./pages/Gallery";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Topnavigation />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/gallery" element={<Gallery />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
