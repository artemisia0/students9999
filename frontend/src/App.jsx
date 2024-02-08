import "./style.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import NavBar from "./NavBar"
import NotFound from "./NotFound"
import Students from "./Students"
import Organizations from "./Organizations"


function App() {
		return (
				<BrowserRouter>
						<Routes>
								<Route path="/" element={<NavBar />}>
										<Route index element={<Home />} />
										<Route path="/about" element={<About />} />
										<Route path="/students" element={<Students />} />
										<Route path="/organizations" element={<Organizations />} />
										<Route path="*" element={<NotFound />} />
								</Route>
						</Routes>
				</BrowserRouter>
		);
}

export default App;
