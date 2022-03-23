import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getAppUser, updateAppUser } from '../user/UserManager'
import { getInstrumentsByFamily } from './InstrumentManager'
import "./Instrument.css"

function InstrumentForm() {

    const history = useHistory()
    const { familyId } = useParams()
    const [instruments, setInstruments] = useState([])
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
        bio: "string",
        image: "string",
        role_id: 1,
        shop_id: 1,
        music_style_id: 1,
        skill_level_id: 1,
        instrument_id: 1,
        approved: "False"
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
		getInstrumentsByFamily(familyId).then((data) => {
			setInstruments(data)
		})
    }, [familyId])

    const changeAppUserState = (domEvent) => {
        const copy = { ...currentAppUser }
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentAppUser(copy)
    }

    const instFamily = parseInt(familyId)

    return (
        <>

            <section className="instrument instrument-form bg-light">
                <div className="container flow-content flow-content--large">
                    {instFamily === 1 ? <img className="instrument-form__shadow" src={require('../assets/violins.png')} alt='violin, viola, cello, bass' />
                    : instFamily === 2 ? <img className="instrument-form__shadow" src={require('../assets/trumpets.png')} alt='2 trumpets and a tuba' />
                        : instFamily === 3 ? <img className="instrument-form__shadow" src={require('../assets/guitars.png')} alt='2 guitars, mandolin, and banjo' />
                            : instFamily === 4 ? <img className="instrument-form__shadow" src={require('../assets/keyboards.png')} alt='piano keyboard' />
                                : instFamily === 5 ? <img className="instrument-form__shadow" src={require('../assets/drums.png')} alt='drum trap set' />
                                    : instFamily === 6 ? <img className="instrument-form__shadow" src={require('../assets/clarinets.png')} alt='several clarinets' />
                                        : ""
                    }
                    <p className="h2">Select your instrument:</p>
                    <form className="form--studentSignup">
                        <fieldset>
                            <div className='form-group'>
                                <select
                                    autoFocus
                                    className='form-control'
                                    name='state_id'
                                    onChange={changeAppUserState}
                                    required >
                                    <option value='0' >Select an instrument:</option>
                                    {instruments.map((instrument) => {
                                        return (
                                            <option
                                                value={instrument.id}
                                                key={`instrument.id--${instrument.id}`}>
                                                {instrument.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </fieldset>
                        <button
                            className='btn'
                            type='submit'
                            onClick={(evt) => {
                                // Prevent form from being submitted
                                evt.preventDefault()

                                const user = {
                                    id: userId,
                                    username: currentAppUser.username,
                                    password: currentAppUser.password,
                                    first_name: currentAppUser.first_name,
                                    last_name: currentAppUser.last_name,
                                    email: currentAppUser.email,
                                    address: currentAppUser.address,
                                    city: currentAppUser.city,
                                    state_id: parseInt(currentAppUser.state_id),
                                    zipcode: currentAppUser.zipcode,
                                    phone: currentAppUser.phone,
                                    bio: currentAppUser.bio,
                                    image: currentAppUser.image,
                                    role_id: parseInt(currentAppUser.role_id),
                                    shop_id: parseInt(currentAppUser.shop_id),
                                    music_style_id: parseInt(currentAppUser.music_style_id),
                                    skill_level_id: parseInt(currentAppUser.skill_level_id),
                                    instrument_id: parseInt(currentAppUser.instrument_id),
                                    approved: currentAppUser.approved
                                }

					            // Send PUT request to your API
                                updateAppUser(user).then(() => history.push("/instructorlist"))
                            }}>
                            Continue
                        </button>
                    </form>
                </div> {/*<--/container -->*/}
            </section>
        </>
    )
}

export default InstrumentForm