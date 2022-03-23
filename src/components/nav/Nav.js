import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Nav.css"

export const Nav = () => {
	const history = useHistory()
	
	
	return (

		<header className="bg-dark">
			<div className="container">
				<div className="logo">
					<img src={require('../assets/w_logo.png')} alt="" />
				</div>
			
				<nav className="nav">
					<ul className="nav__list">
					<li className='nav-list__item'>
					<Link className='nav-list__link' to='/'>
						Home
					</Link>
				</li>
				<li className='nav-list__item'>
					<Link className='nav-list__link' to='/events'>
						Events
					</Link>
				</li>
				{localStorage.getItem("whistler_token") !== null ? (
					<li className='nav-list__item'>
						<button
							className='nav-list__item nav-list__button'
							onClick={() => {
								localStorage.removeItem("whistler_id")
								localStorage.removeItem("whistler_token")
								history.push({ pathname: "/" })
							}}>
							Logout
						</button>
					</li>
				) : (
					<>
						<li className='nav-item'>
							<Link className='nav-link' to='/login'>
								Login
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/register'>
								Register
							</Link>
						</li>
					</>
				)}{" "}
					</ul>
				</nav>
			</div>			
			
			<div className="container">
				
				
				<nav className="primary-nav">
					<ul className='nav-list'>
						<li className='nav-list__item'>
							<Link className='nav-list__link' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-list__item'>
							<Link className='nav-list__link' to='/profile'>
								Profile
							</Link>
						</li>
						{localStorage.getItem("whistler_token") !== null ? (
							<li className='nav-list__item'>
								<button
									className='nav-list__item nav-list__button'
									onClick={() => {
										localStorage.removeItem("whistler_id")
										localStorage.removeItem("whistler_token")
										history.push({ pathname: "/" })
									}}>
									Logout
								</button>
							</li>
						) : (
							<>
								<li className='nav-item'>
									<Link className='nav-link' to='/login'>
										Login
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/register'>
										Register
									</Link>
								</li>
							</>
						)}{" "}
					</ul>
				</nav>
			</div>
		</header>
	)
}
