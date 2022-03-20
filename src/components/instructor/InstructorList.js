import React, { useState, useEffect } from 'react'
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
            {/* <-- Instrument Families --> */ }
            <section className = "join-now" >
                <div className="container">
                    {/*<div className="families">*/}
                    <div className="instructors">
                        <h2>Here are the instructors you might be interested in:</h2>
                        <ul className="split">
                            {
                                instructors.map(instructor => {
                                    return <section key = {`instructor--${instructor.id}`}>
                                        <li className="flow-content corner-square"><img src={`http://localhost:8000${instructor.image}`} alt=''/></li>
                                        <li className="flow-content">
                                            <h3>{instructor.full_name}</h3>
                                        </li>
                                        <li className='flow-content'>
                                            Commodo risus non cursus risus, metus, velit scelerisque urna, aenean leo diam arcu sed arcu purus sagittis posuere orci ornare lorem risus malesuada nec sit
                                        </li>
                                    </section>
                                })
                            }
                        </ul>
                    </div>
                </div> {/* <--/container --> */}
            </section>
        </>
    )
}

export default InstructorList