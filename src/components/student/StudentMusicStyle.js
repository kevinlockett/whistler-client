import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getAppUser, updateAppUser } from '../user/UserManager'
import "./Student.css"

export default function StudentMusicStyle() {

    const history = useHistory()
    const [userId, setUserId] = useState()
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

    const setPreferredStyle = (style) => {
        const user = {
            id: userId,
            username: currentAppUser.username,
            password: currentAppUser.password,
            first_name: currentAppUser.first_name,
            last_name: currentAppUser.last_name,
            email: currentAppUser.email,
            address: currentAppUser.address,
            city: currentAppUser.city,
            state_id: currentAppUser.state_id,
            zipcode: currentAppUser.zipcode,
            phone: currentAppUser.phone,
            bio: currentAppUser.bio,
            image: "",
            role_id: currentAppUser.role_id,
            shop_id: 1,
            music_style_id: style,
            skill_level_id: currentAppUser.skill_level_id,
            instrument_id: currentAppUser.instrument_id,
            approved: currentAppUser.approved
        }
        updateAppUser(user).then(() => history.push(`/instructors/${currentAppUser.instrument_id}`))
    }

    return (
        <>

            <section className="student student__music-style bg-light">
                <div className="container container--student__music-style flow-content flow-content--large">
                    <h2 className="section-title">Help us match you to the right instructor</h2>
                    <p className="h2">Which music style do you prefer?</p>
                    <form className="form--student__music-style">
                        <fieldset>
                            <button className='btn--music-style' >
                                <img className='btn--music-style__img' src={require('../assets/classical-piano.png')} alt="watercolor of colorful piano with music staff, butterflies, notes, and label that says 'Classical'"
                                    onClick={(evt) => {
                                            evt.preventDefault()
                                            setPreferredStyle(1)
                                        }}/>
                            </button>
                        </fieldset>
                        <fieldset>
                            <button className='btn--music-style' >
                                <img className='btn--music-style__img' src={require('../assets/country-banjo.png')} alt="watercolor of fanciful banjo with notes and butterflies from from it with a label reading 'Country'"
                                    onClick={(evt) => {
                                        evt.preventDefault()
                                        setPreferredStyle(2)
                                    }}/>
                            </button>
                        </fieldset>
                        <fieldset>
                            <button className='btn--music-style' >
                                <img className='btn--music-style__img' src={require('../assets/jazz-instruments.png')} alt="watercolor of colorful collection of brass instruments and a keyboard with notes and hummingbirds flowing out of them, with a label reading, 'Jazz'"
                                    onClick={(evt) => {
                                        evt.preventDefault()
                                        setPreferredStyle(3)
                                    }}/>
                            </button>
                        </fieldset>
                        <fieldset>
                            <button className='btn--music-style' >
                                <img className='btn--music-style__img'src={require('../assets/rock-guitar.png')} alt="colorful watercolor of an electric guitar with paint splatters, butterflies, and music notes exploding around it with a label reading, 'ROCK'"
                                    onClick={(evt) => {
                                        evt.preventDefault()
                                        setPreferredStyle(4)
                                    }}/>
                                </button>
                        </fieldset>
                    </form>
                </div> {/*<--/container -->*/}
            </section>
        </>
    )
}
