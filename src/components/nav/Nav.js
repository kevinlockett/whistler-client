import React, {useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAppUser } from "../user/UserManager"
import "./Nav.css"

export default function Nav() {
	const [userId, setUserId] = useState()
	const [userRole, setRole] = useState()
	
	useEffect(() => {
		if (localStorage.getItem("whistler_id") !== null) {
			setUserId(parseInt(localStorage.getItem("whistler_id")))
		}
    }, [])

	useEffect(() => {
        if (userId) {
			getAppUser(userId).then((data) => {
				setRole(data.role_id)
            })
        }
	}, [userId])
	
	let toggleHamburgerMenu = () => {
		document.body.classList.toggle('nav-open')
	}

	let closeHamburgerMenu = () => {
		document.body.classList.remove('nav-open')
	}

	let clearLocalStorage = () => {
		localStorage.removeItem('whistler_id')
		localStorage.removeItem('whistler_token')
		closeHamburgerMenu()
	}
	
	return (
		<header className="bg-dark">
			<div className="logo">
				<img src={require('../assets/w_logo.png')} alt="" />
			</div>
			<button
				className="nav-toggle"
				aria-label="toggle navigation"
				onClick={toggleHamburgerMenu}
			>
				<span className="hamburger"></span>
			</button>
			<nav className="nav">
				<ul className="nav__list">
					<li className='nav__item'>
						<Link className='nav__link'
							to='/'
							onClick={closeHamburgerMenu}>
							Home
						</Link>
					</li>
					<li className='nav__item'>
						<Link className='nav__link'
							to='/instructors'
							onClick={closeHamburgerMenu}>
							Instructors
						</Link>
					</li>
					<li className='nav__item'>
						<Link className='nav__link'
							to='/profile'
							onClick={closeHamburgerMenu}>
							Profile
						</Link>
					</li>
					{userRole === 3 ? (
						<li className='nav__item'>
							<Link className='nav-link'
								to='/admin'
								onClick={closeHamburgerMenu}>
								Admin
							</Link>
						</li>
					)
					: ""
					}
					{localStorage.getItem("whistler_token") !== null ? (
						<li className='nav__item'>
							<Link
								className='nav__link'
								to='/'
								onClick={clearLocalStorage}>
								Logout
							</Link>
						</li>
					) : (
						<>
							<li className='nav__item'>
								<Link className='nav__link' to='/login'>
									Login
								</Link>
							</li>
							<li className='nav__item'>
								<Link className='nav__ink' to='/register'>
									Register
								</Link>
							</li>
						</>
					)
					}
					</ul>
			</nav>
		</header>
	)
}
