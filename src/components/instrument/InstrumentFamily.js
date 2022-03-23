import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { getAppUser } from '../user/UserManager'
import "./Instrument.css"

function InstrumentFamily() {

    const [userId, setUserId] = useState()
    const [userRole, setRole] = useState()
    const [ currentAppUser, setCurrentAppUser ] = useState({
        username: "string",
        password: "string",
        first_name: "string",
        last_name: "string",
        email: "string",
        address: "Address",
        city: "City",
        state_id: 43,
        zipcode: "Zip Code",
        phone: "(123) 456-7890",
        bio: "",
        image: "",
        role_id: 1,
        shop_id: 1,
        music_style_id: 1,
        skill_level_id: 1,
        instrument_id: 1,
        approved: "True"
    })

    useEffect(() => {
        setUserId(parseInt(localStorage.getItem("whistler_id")))
    }, [])

    useEffect(() => {
        if (userId) {
            getAppUser(userId).then((data) => {
                setCurrentAppUser(data)
            })
        }
    }, [userId])

    useEffect(() => {
        setRole(currentAppUser.role_id)
    }, [currentAppUser])


    return (
        <>
            <section className="instrument-family instrument-family__items bg-light">
                <div className="container flow-content flow-content--large">
                    <h2 className="section-title">Now let's talk about instruments</h2>
                    <p className="h2">Which instrument family interests you most?</p>
                    <div className="split">
                        <div className="instrument-family__item bg-yellow">
                            <h3 className='box-title'>Brass Family</h3>
                            {
                                userRole === 1 ? <Link className='btn--music-style' to="/studentinstruments/2">
                                    <img className='btn--music-style__img' src={require('../assets/brass-family.png')} alt='brass instruments' />
                                </Link>
                                    : <Link className='btn--music-style' to="/instructorinstruments/2">
                                    <img className='btn--music-style__img' src={require('../assets/brass-family.png')} alt='brass instruments' />
                                </Link>
                            }
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                        <div className="instrument-family__item bg-teal">
                            <h3 className='box-title'>Guitar Family</h3>
                            {
                                userRole === 1 ? <Link className='btn--music-style' to="/studentinstruments/3">
                                    <img className='btn--music-style__img' src={require('../assets/guitar-family.png')} alt='guitar, mandolin, and banjo' />
                                </Link>
                                    : <Link className='btn--music-style' to="/instructorinstruments/3">
                                    <img className='btn--music-style__img' src={require('../assets/guitar-family.png')} alt='guitar, mandolin, and banjo' />
                                </Link>
                            }
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                        <div className="instrument-family__item bg-orange">
                            <h3 className='box-title'>Keyboard Family</h3>
                            {
                                userRole === 1 ? <Link className='btn--music-style' to="/studentinstruments/4">
                                    <img className='btn--music-style__img' src={require('../assets/keyboard-family.png')} alt='piano keyboard' />
                                </Link>
                                    : <Link className='btn--music-style' to="/instructorinstruments/4">
                                    <img className='btn--music-style__img' src={require('../assets/keyboard-family.png')} alt='piano keyboard' />
                                </Link>
                            }
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                    </div>
                    <div className="split">
                        <div className="instrument-family__item bg-green">
                            <h3 className='box-title'>Percussion Family</h3>
                            {
                                userRole === 1 ? <Link className='btn--music-style' to="/studentinstruments/5">
                                    <img className='btn--music-style__img' src={require('../assets/percussion-family.png')} alt='drum trap set' />
                                </Link>
                                    : <Link className='btn--music-style' to="/instructorinstruments/5">
                                    <img className='btn--music-style__img' src={require('../assets/percussion-family.png')} alt='drum trap set' />
                                </Link>
                            }
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                        <div className="instrument-family__item bg-red">
                            <h3 className='box-title'>Bowed Strings Family</h3>
                            {
                                userRole === 1 ? <Link className='btn--music-style' to="/studentinstruments/1">
                                    <img className='btn--music-style__img' src={require('../assets/string-family.png')} alt='violin, viola, cello, and bass' />
                                </Link>
                                    : <Link className='btn--music-style' to="/instructorinstruments/1">
                                    <img className='btn--music-style__img' src={require('../assets/string-family.png')} alt='violin, viola, cello, and bass' />
                                </Link>
                            }
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                        <div className="instrument-family__item bg-blue">
                            <h3 className='box-title'>Woodwind Family</h3>
                            {
                                userRole === 1 ? <Link className='btn--music-style' to="/studentinstruments/6">
                                    <img className='btn--music-style__img' src={require('../assets/woodwind-family.png')} alt='several clarinets' />
                                </Link>
                                    : <Link className='btn--music-style' to="/instructorinstruments/6">
                                    <img className='btn--music-style__img' src={require('../assets/woodwind-family.png')} alt='several clarinets' />
                                </Link>
                            }
                            <p>Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InstrumentFamily