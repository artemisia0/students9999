import "./style.css"
import {NavLink, Outlet} from "react-router-dom"


function NavBar() {
		return (
				<>
						<nav className="navbar navbar-dark bg-dark">
								<div className="container">
										<NavLink to="/" className="navbar-brand">students9999</NavLink>
										<ul className="nav mx-auto">
												<li className="nav-item"><NavLink className="nav-link my-link text-white" to="/students">Students</NavLink></li>
												<li className="nav-item"><NavLink className="nav-link my-link text-white" to="/organizations">Organizations</NavLink></li>
												<li className="nav-item"><NavLink className="nav-link my-link text-white" to="/about">About</NavLink></li>
										</ul>
								</div>
						</nav>
						<Outlet />
				</>
		)
}


export default NavBar
