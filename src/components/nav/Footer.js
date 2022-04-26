import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from '../assets/LockettDesigns.png'
import githubIcon from '../assets/github.png'
import linkedinIcon from '../assets/linkedin.png'
import "./Footer.css"

export default function Footer() {

	const [ showPath, setShowPath ] = useState({})
    const [ footerVersion, setFooterVersion ] = useState("")
    const location = useLocation ()
	
	useEffect(
        () => {
            setShowPath(location)
        },
        [location]
    )

    useEffect(
        () => {
            showPath.pathname === "/" ?
                setFooterVersion(`container--footer`)
                : setFooterVersion('container--footer__sticky')
        },
        [showPath]
    )
	
	return (
		<footer id={footerVersion} className={footerVersion}>
			<section id="wrapper--footer">
				<div className='footer__div footer__divl'>
					<p><b>LEGAL</b></p>
					<Link className="footer__link" to="PrivacyPolicy">Privacy Policy</Link>
					<p className='footer-copy'>&copy; {new Date().getFullYear()} Kevin Lockett</p>
				</div>
				<div className='footer__div footer__divc'>
                    <img src={logo} className="footer-logo" alt="logo" />
				</div>
				<div className='footer__div footer__divr'>
                    <a href='https://github.com/kevinlockett'>
                        <img src={githubIcon} className="footer-icon" alt="github icon" />
                    </a>
                    <a href='https://www.linkedin.com/in/kevin-lockett/'>
                        <img src={linkedinIcon} className="footer__icon" alt="linked-in icon" />
                    </a>
                </div>
			</section>
		</footer>
	)
}
