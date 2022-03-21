import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { getAppUser } from './InstructorManager'
import './Instructor.css'

function InstructorDetails() {

    const [instructor, setInstructor] = useState({})
    const { instructorId } = useParams()

    useEffect(() => {
        if (instructorId) {
            getAppUser(instructorId).then((data) => {
                setInstructor(data)
            })
        }
    }, [instructorId])

    return (
        <>
            <section className="instructor__details" >
                <div className="container">
                    <div className="flow-content">
                        <img src={`http://localhost:8000${instructor.image}`} alt='' />
                        <h2 className='instructor__details--name'>
                            {instructor.full_name}
                        </h2>
                    </div>
                    <div className='flow-content'>
                        <pre className='bio' >
                            <p>{instructor.bio}</p>
                        </pre>
                    </div>
                </div> {/* <--/container --> */}
            </section>
        </>
    )
}

export default InstructorDetails