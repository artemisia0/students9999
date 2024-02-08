import "./style.css"
import {NavLink, Outlet} from "react-router-dom"


function NavBar() {
		return (
				<>
						<nav className="a-color-bg">
								<ul>
										<li><NavLink to="/"><strong>students9999</strong></NavLink></li>
										<li><NavLink to="/students">Students</NavLink></li>
										<li><NavLink to="/organizations">Organizations</NavLink></li>
										<li><NavLink to="/about">About</NavLink></li>
								</ul>
						</nav>
						<Outlet />
				</>
		)
}


export default NavBar
