import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getAppUser, updateAppUser } from '../user/UserManager'
import "./Student.css"

function StudentLevel() {

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

    const setStudentLevel = (level) => {
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
            skill_level_id: level,
            instrument_id: 1,
            approved: "True"
        }
        updateAppUser(user).then(() => history.push("/musicfamily"))
    }

    return (
        <>

            <section className="student student__level bg-light">
                <div className="container flow-content flow-content--large">
                    <h2 className="section-title">Just a couple more steps ...</h2>
                    <p className="h2">What level musician are you now?</p>
                    <form className="form--student_level">
                        <fieldset>
                            <button
                                className='btn btn__student_level'
                                type='submit'
                                onClick={(evt) => {
                                    evt.preventDefault()
                                    setStudentLevel(1)
                                }}>
                                Beginner
                            </button>
                        </fieldset>
                        <fieldset>
                            <button
                                className='btn btn__student_level'
                                type='submit'
                                onClick={(evt) => {
                                    evt.preventDefault()
                                    setStudentLevel(2)
                                }}>
                                Intermediate
                            </button>
                        </fieldset>
                        <fieldset>
                            <button
                                className='btn btn__student_level'
                                type='submit'
                                onClick={(evt) => {
                                    evt.preventDefault()
                                    setStudentLevel(3)
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

export default StudentLevel