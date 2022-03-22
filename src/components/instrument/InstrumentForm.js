import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getAppUser, updateAppUser } from '../user/UserManager'
import { getStates } from '../states/StatesManager'
import { getInstruments } from './InstrumentManager'
import "./Instrument.css"

function InstrumentForm() {

    const history = useHistory()
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
		getInstruments().then((data) => {
			setInstruments(data)
		})
    }, [])

    const changeAppUserState = (domEvent) => {
        const copy = { ...currentAppUser }
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentAppUser(copy)
    }

    return (
        <>

            <section className="student bg-light">
                <div className="container flow-content flow-content--large">
                    <h2 className="section-title">Welcome to Whistler!</h2>
                    <p className="h2">Tell us about you:</p>
                    <form className="form--studentSignup">
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor='instrument_id'>Instrument: </label>
                                <select
                                    className='form-control'
                                    name='state_id'
                                    value={currentAppUser.instrument_id}
                                    onChange={changeAppUserState}
                                    required >
                                    <option value='0' label='Select an instrument:'></option>
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
                                    bio: "",
                                    image: "",
                                    role_id: 1,
                                    shop_id: 1,
                                    music_style_id: 1,
                                    skill_level_id: 1,
                                    instrument_id: parseInt(currentAppUser.instrument_id),
                                    approved: "True"
                                }

					            // Send PUT request to your API
                                updateAppUser(user).then(() => history.push("/studentlevel"))
                            }}>
                            Start Learning
                        </button>
                    </form>
                </div> {/*<--/container -->*/}
            </section>
        </>
    )
}

export default InstrumentForm