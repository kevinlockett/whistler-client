import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getAppUser, updateAppUser } from '../user/UserManager.js'
import { getStates } from '../states/StatesManager'
import "./Instructor.css"

function InstructorSignUp() {

    const history = useHistory()
    const [states, setStates] = useState([])
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
        role_id: 2,
        shop_id: 1,
        music_style_id: 1,
        skill_level_id: 1
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
		getStates().then((data) => {
			setStates(data)
		})
    }, [])

    const changeAppUserState = (domEvent) => {
        const copy = { ...currentAppUser }
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentAppUser(copy)
    }

    const getBase64 = (file, callback) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => callback(reader.result))
        reader.readAsDataURL(file)
    }
    
    // Update a component state variable to the value of base 64Image String
    const createImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            const newImageString = { ...currentAppUser }
            newImageString.image = base64ImageString
            setCurrentAppUser(newImageString)
        })
    }

    return (
        <>

            <section className="instructor bg-light">
                <div className="container flow-content flow-content--large">
                    <h2 className="section-title">Welcome to Whistler!</h2>
                    <p className="h2">Tell us about you:</p>
                    <form className="form--studentSignup">
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor="inputAddress"> Address </label>
                                <input
                                    type='text'
                                    name='address'
                                    required
                                    className='form-control'
                                    value={currentAppUser.address}
                                    onChange={changeAppUserState}
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor="inputCity"> City </label>
                                <input
                                    type='text'
                                    name='city'
                                    className='form-control'
                                    value={currentAppUser.city}
                                    onChange={changeAppUserState}
                                    required
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor='inputState_id'>State: </label>
                                <select
                                    className='form-control'
                                    name='state_id'
                                    value={currentAppUser.state_id}
                                    onChange={changeAppUserState}
                                    required >
                                    <option value='0' label='Select a state:'></option>
                                    {states.map((state) => {
                                        return (
                                            <option
                                                value={state.id}
                                                key={`state.id--${state.id}`}>
                                                {state.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor="inputZipCode"> Zip Code </label>
                                <input
                                    type='text'
                                    name='zipcode'
                                    className='form-control'
                                    value={currentAppUser.zipcode}
                                    onChange={changeAppUserState}
                                    required
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor="inputPhone"> Phone Number </label>
                                <input
                                    type='text'
                                    name='phone'
                                    className='form-control'
                                    value={currentAppUser.phone}
                                    onChange={changeAppUserState}
                                    required
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor="inputImage"> Upload an image </label>
                                <input
                                    type='file'
                                    id='image'
                                    name='image'
                                    className='form-control'
                                    onChange={createImageString}
                                    required
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor="inputBio"> Give a brief description of your experience </label>
                                <textarea
                                    name='bio'
                                    className='form-control'
                                    value={currentAppUser.bio}
                                    onChange={changeAppUserState}
                                    required
                                ></textarea>
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
                                    role_id: 2,
                                    shop_id: 1,
                                    music_style_id: 1,
                                    skill_level_id: 1,
                                    instrument_id: 1,
                                    approved: "False"
                                }

					            // Send PUT request to your API
                                updateAppUser(user).then(() => history.push("/instructorlevel"))
                            }}>
                            Apply today!
                        </button>
                    </form>
                </div> {/*<--/container -->*/}
            </section>
        </>
    )
}

export default InstructorSignUp