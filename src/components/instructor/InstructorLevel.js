import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getAppUser, updateAppUser } from '../user/UserManager'
import "./Instructor.css"

function InstructorLevel() {

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

    const setInstructorLevel = (level) => {
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
            skill_level_id: level,
            instrument_id: 1,
            approved: "True"
        }
        updateAppUser(user).then(() => history.push("/instructors"))
    }

    return (
        <>

            <section className="instructor instructor__level bg-light">
                <div className="container flow-content flow-content--large">
                    <h2 className="section-title">Just a couple more steps ...</h2>
                    <p className="h2">What level students do you prefer to teach?</p>
                    <form className="form--instructor_level">
                        <fieldset>
                            <button
                            className='btn btn__instructor_level'
                            type='submit'
                            onClick={(evt) => {
                                evt.preventDefault()
                                setInstructorLevel(1)
                            }}>
                                Beginner
                            </button>
                        </fieldset>
                        <fieldset>
                            <button
                            className='btn btn__instructor_level'
                            type='submit'
                            onClick={(evt) => {
                                evt.preventDefault()
                                setInstructorLevel(2)
                            }}>
                                Intermediate
                            </button>
                        </fieldset>
                        <fieldset>
                            <button
                                className='btn btn__instructor_level'
                                type='submit'
                                onClick={(evt) => {
                                    evt.preventDefault()
                                    setInstructorLevel(3)
                                }}>
                                Advanced
                            </button>
                    </fieldset>
                    </form>
                </div> {/*<--/container -->*/}
            </section>
        </>
    )
}

export default InstructorLevel