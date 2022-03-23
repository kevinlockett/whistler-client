import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getAppUser, updateAppUser, deleteAppUser } from '../user/UserManager'
import { getStates } from '../states/StatesManager'
import "./User.css"

function UserProfile() {

    const history = useHistory()
    const [states, setStates] = useState([])
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
            <section className="profile bg-light">
                <div className="container flow-content flow-content--large">
                    <p className="h2">Update your profile:</p>
                    <form className="form--profileSignup">
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor="inputUsername"> UserName </label>
                                <input
                                    type='text'
                                    name='username'
                                    className='form-control'
                                    value={currentAppUser.username}
                                    onChange={changeAppUserState}
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor="inputFirstName"> First Name </label>
                                <input
                                    type='text'
                                    name='first_name'
                                    className='form-control'
                                    value={currentAppUser.first_name}
                                    onChange={changeAppUserState}
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor="inputLastName"> Last Name </label>
                                <input
                                    type='text'
                                    name='last_name'
                                    className='form-control'
                                    value={currentAppUser.last_name}
                                    onChange={changeAppUserState}
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className='form-group'>
                                <label htmlFor="inputAddress"> Address </label>
                                <input
                                    type='text'
                                    name='address'
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
                                <label htmlFor='state_id'>State: </label>
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

                        {
                            userRole === 2 ?
                                <>
                                    <fieldset>
                                        <div className='form-group img--update'>
                                            <div>
                                                <img className='profile--img' src={`http://localhost:8000${currentAppUser.image}`} alt='' />
                                            </div>
                                            <div>
                                                <label htmlFor="inputImage"> Select a new image </label>
                                                <input
                                                    type='file'
                                                    id='image'
                                                    name='image'
                                                    className='form-control'
                                                    onChange={createImageString}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <div className='form-group'>
                                            <label htmlFor="inputBio"> Update your biography </label>
                                            <textarea
                                                name='bio'
                                                className='form-control'
                                                value={currentAppUser.bio}
                                                onChange={changeAppUserState}
                                                required
                                            ></textarea>
                                        </div>
                                    </fieldset>
                                    <fieldset className='profile--buttons'>
                                    <button
                                        className='btn btn--delete'
                                        type='submit'
                                        onClick={(evt) => {
                                            // Prevent form from being submitted
                                            evt.preventDefault()
                                            
                                            //Remove user Token & ID from localStorage
                                            localStorage.removeItem("whistler_id")
                                            localStorage.removeItem("whistler_token")
                                            
                                            // Send DELETE request to your API
                                            deleteAppUser(userId).then(() => history.push('/'))
                                        }}>
                                        Delete Account
                                    </button>
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
                                                role_id: currentAppUser.role_id,
                                                shop_id: currentAppUser.shop_id,
                                                music_style_id: currentAppUser.music_style_id,
                                                skill_level_id: currentAppUser.skill_level_id,
                                                instrument_id: currentAppUser.instrument_id,
                                                approved: currentAppUser.approved,
                                            }

                                            // Send PUT request to your API
                                            updateAppUser(user).then(() => history.goBack())
                                        }}>
                                        Update profile
                                        </button>
                                        </fieldset>
                                </>

                            :
                                <>
                                    <button
                                        className='btn btn--delete'
                                        type='submit'
                                        onClick={(evt) => {
                                            // Prevent form from being submitted
                                            evt.preventDefault()

                                            //Remove user Token & ID from localStorage
                                            localStorage.removeItem("whistler_id")
                                            localStorage.removeItem("whistler_token")
                                            
                                            // Send DELETE request to your API
                                            deleteAppUser(userId).then(() => history.push('/'))
                                        }}>
                                        Delete Account
                                    </button>
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
                                                state_id: currentAppUser.state_id,
                                                zipcode: currentAppUser.zipcode,
                                                phone: currentAppUser.phone,
                                                bio: currentAppUser.bio,
                                                image: "",
                                                role_id: currentAppUser.role_id,
                                                shop_id: currentAppUser.shop_id,
                                                music_style_id: currentAppUser.music_style_id,
                                                skill_level_id: currentAppUser.skill_level_id,
                                                instrument_id: currentAppUser.instrument_id,
                                                approved: currentAppUser.approved
                                            }

                                            // Send PUT request to your API
                                            updateAppUser(user).then(() => history.goBack())
                                        }}>
                                        Update Profile
                                    </button>
                                </>
                        }              
                    </form>
                </div>
            </section>
        </>
    )
}

export default UserProfile