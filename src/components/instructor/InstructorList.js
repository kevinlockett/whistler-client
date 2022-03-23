import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { getInstructors } from './InstructorManager'
import "./Instructor.css"

function InstructorList() {

    const [instructors, setInstructors] = useState([])
    
    useEffect(() => {
        getInstructors().then((d) => {
            setInstructors(d)
        })
    }, [])

    return (
        <>
            <section className = "instructor__list" >
                <div className="container">
                    <div className="instructors">
                        <h2 className="instructor-list--header">Here are the instructors you might be interested in:</h2>
                        <div >
                            {
                                instructors.map(instructor => {
                                    return <div className='instructor__list-item split__instructor' key = {`instructor--${instructor.id}`}>
                                        <div className="flow-content corner-square split__instructor-item">
                                            <img src={`http://localhost:8000${instructor.image}`} alt='' />
                                        </div>
                                        <div className="split__instructor-item">
                                            <div className="flow-content instructor__name">
                                                <Link to={`/details/${instructor.id}`}>
                                                    <h3>{instructor.full_name}</h3>
                                                </Link>
                                                <p>{instructor.first_name} plays {instructor.instrument.name} prefers {instructor.music_style.style}, and likes to work with  {instructor.skill_level.level} students.</p>
                                                <p>You can reach {instructor.first_name} at {instructor.phone}.</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div> {/* <--/container --> */}
            </section>
        </>
    )
}

export default InstructorList