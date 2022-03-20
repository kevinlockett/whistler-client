import React from "react"
import { Link, useHistory } from 'react-router-dom'
import "../../../node_modules/video-react/dist/video-react.css"
import "./landingPage.css"

function Home() {

    const history = useHistory()
    
    const handleClick = () => {
        history.push("/Login")
    }

    return (
        <>
            {/*<-- Hero -->*/}
            <section className="hero">
                <div className="container">
                    <div className="split a-center">
                        <div className="flow-content flow-content--large">
                            <h1 className="section-title">Start learning to play today</h1>
                            <p className="h2 page-heading">Are you looking for one-on-one training in studio or on-line?<br/> <strong>We can get you started!</strong>
                            </p>
                            <p>Lorem ipsum dolor sit <a href="https://www.linkedin.com/in/kevin-lockett">Kevin Lockett's LinkedIn page</a> elit. Donec placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.</p>
                            <button className='btn'
                                onClick={() => {
                                    handleClick()
                                }}>Login</button>
                        </div>
                        <div>
                            <img className="shadow" src={require('../assets/hero.png')}
                                alt="man with a deck of cards floating between his hands, which are in front of his concealed face" />
                        </div>
                    </div>
                </div> {/*<--/container -->*/}
            </section>

            {/*<-- How it works -->*/}
            <section className="hiw__items bg-accent">
                <div className="container flow-content flow-content--large">
                    <h2 className="section-title">How it works</h2>
                    <p className="h2">You can begin this week!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.</p>
                    <Link className='btn-hiw bg-light' to="/signUp">
                        Sign up for a free 30-minute lesson
                    </Link>
                    <div className="split">
                        <div className="hiw__item bg-light corner-square">
                            <h3 className='box-title'>Choose from the best instructors in our area!</h3>
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                        <div className="hiw__item bg-dark corner-square">
                            <h3 className='box-title'>All instructors are highly skilled musicians and educators</h3>
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                        <div className="hiw__item bg-light corner-square">
                            <h3 className='box-title'>No contracts! <br/> No commitments! <br/> Quit any time</h3>
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*<-- Video -->*/}
            <section className="video__items">
                <div className="container flow-content flow-content--large">
                    <div className="split">
                        <div className="video__item bg-light">
                            <p className="h2">We'll help you get started this week!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.</p>
                            <Link className='btn bg-light' to="/signUp">
                                Sign up today
                            </Link>
                        </div>
                        <div className="video__item">
                            <embed src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" width="560" height="349>"></embed>
                        </div>
                    </div>
                </div>
            </section>

            {/* <-- Styles --> */}
            <section className="bg-dark">
                <div className="container styles">
                    <div>
                        <h1 className="section-title">The very best</h1>
                        <h2 className="text-accent">No matter your age or experience,</h2>
                        <h2 className="text-accent">It's never too late!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.</p>
                    </div>
                    <div className="styles">
                        <p>All your favorite styles</p>
                        <ul className="split">
                            <li className="flow-content">
                                <img src={require('../assets/classical.png')} alt="dice falling into a hand" />
                                <h3>Classical</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </li>
                            <li className="flow-content">
                                <img src={require('../assets/country.png')} alt="cards spread on a table" />
                                <h3>Country</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </li>
                            <li className="flow-content">
                                <img src={require('../assets/jazz.png')} alt="man riffling cards" />
                                <h3>Jazz</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </li>
                            <li className="flow-content">
                                <img src={require('../assets/rock.png')} alt="teenager doing cardestry" />
                                <h3>Rock</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </li>
                        </ul>
                    </div>
                </div> {/*<--/container -->*/}
            </section>

            {/* <-- Instrument Families --> */}
            <section className="join-now">
                <div className="container">
                    <div className="families">
                        <h2>We teach all instrument families</h2>
                        <ul className="split">
                            <li className="flow-content corner-square">
                                <img className="shadow" src={require('../assets/brass.png')} alt="man with cards flying in front of him" />
                                <h3>Brass</h3>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                            </li>
                            <li className="flow-content corner-square">
                                <img className="shadow" src={require('../assets/guitar.png')} alt="woman and man    talking over video conference" />
                                <h3>Guitar Family</h3>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                            </li>
                            <li className="flow-content corner-square">
                                <img className="shadow" src={require('../assets/keyboard.png')} alt="man in front of  laptop with earphonese on" />
                                <h3>Keyboard</h3>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                            </li>
                            <li className="flow-content corner-square">
                                <img className="shadow" src={require('../assets/percussion.png')} alt="man with cards flying in front of him" />
                                <h3>Percussion</h3>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                            </li>
                            <li className="flow-content corner-square">
                                <img className="shadow" src={require('../assets/strings.png')} alt="woman and man    talking over video conference" />
                                <h3>Strings</h3>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                            </li>
                            <li className="flow-content corner-square">
                                <img className="shadow" src={require('../assets/woodwind.png')} alt="man in front of  laptop with earphonese on" />
                                <h3>Woodwind</h3>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                            </li>
                        </ul>
                    </div>
                </div> {/* <--/container --> */}
            </section>

            {/* <-- Call to Action --> */}
            <section className="bg-accent cta">
                <div className="container flow-content flow-content--large">
                    <h2 className="section-title">Start learning music today</h2>
                    <p className="h2">You’re only one step away</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, ipsum ac auctor ornare.</p>
                    <Link className='btn' to="/signUp">
                        Get started now
                    </Link>
                </div> {/*<--/container -->*/}
            </section>

            {/* <-- Testimonials --> */}
            <section className="testimonials">
                <div className="container flow-content flow-content--large">
                    <h2 className="section-title">Testimonials</h2>
                    <p className="h2">Others have done it, so can you!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.</p>
                    <div className="split">
                        <div className="testimonial bg-dark corner-square">
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                            <p className="name">John Smith</p>
                            <p className="position">Guitar Student</p>
                        </div>
                        <div className="testimonial bg-accent corner-square">
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                            <p className="name">Ricky Skaggs</p>
                            <p className="position">Bluegrass Artist</p>
                        </div>
                        <div className="testimonial bg-dark corner-square">
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                            <p className="name">Becky Nelson</p>
                            <p className="position">Music Teachers Association</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <-- Instructors --> */}
            <section className="cta bg-grey">
                <div className="container flow-content flow-content--large">
                    <h2 className="section-title">Invest in future musicians</h2>
                    <p className="h2">Are you a music teacher or musician looking to pass on your knowledge and skills?</p>
                    <p>Stop looking and get started today!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link className='btn' to="/apply">
                        Apply now!
                    </Link>
                </div> {/*<--/container -->*/}
            </section>
        </>
    )
}

export default Home