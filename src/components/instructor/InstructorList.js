import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getApprovedInstructors, getApprovedInstructorsByInstrument } from './InstructorManager'
import { getInstrumentById } from '../instrument/InstrumentManager'
import "./Instructor.css"

export default function InstructorList() {

    
    const { instrumentId } = useParams()
    const instId = parseInt(instrumentId)
    const [instructors, setInstructors] = useState([])
    const [instructorsByInstrument, setInstructorsByInstrument] = useState([])
    const [instrument, setInstrument] = useState([])

    useEffect(() => {
        getApprovedInstructors().then((d) => {
            setInstructors(d)
        })
    }, [])

    useEffect(() => {
        if (instId) {
            getApprovedInstructorsByInstrument(instId).then((d) => {
                setInstructorsByInstrument(d)
            })
        } else {
            getApprovedInstructors().then((d) => {
                setInstructorsByInstrument(d)
            })
        }
    }, [instId])

    useEffect(() => {
        if (instId) {
            getInstrumentById(instId).then((d) => {
                setInstrument(d)
            })
        }
    }, [instId])

    return (
        <>
            <section className = "instructor__list" >
                <div className="container">
                    <div className="instructors">
                        {
                            instructorsByInstrument.length === 0 ? (
                                <h2 className="instructor-list--header">Sorry, we do not have any {instrument.name} instructors yet.</h2>
                            ) : (
                                    <h2 className="instructor-list--header">Here are the {instrument.name} instructors:</h2>
                            )
                        }
                        <div >
                            {
                                instructorsByInstrument.map(instructor_by_id => {
                                    return <div className='instructor__list-item split__instructor' key = {`instructor--${instructor_by_id.id}`}>
                                        <div className="flow-content corner-square split__instructor-item">
                                            <img src={`http://localhost:8000${instructor_by_id.image}`} alt='' />
                                        </div>
                                        <div className="split__instructor-item">
                                            <div className="flow-content instructor__name">
                                                <Link to={`/details/${instructor_by_id.id}`}>
                                                    <h3>{instructor_by_id.full_name}</h3>
                                                </Link>
                                                <p>{instructor_by_id.first_name} plays {instructor_by_id.instrument.name}, prefers {instructor_by_id.music_style.style}, and likes to work with  {instructor_by_id.skill_level.level} students.</p>
                                                <p>You can reach {instructor_by_id.first_name} at {instructor_by_id.phone}.</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="instructors">
                        <h2 className="instructor-list--header">Here are our other instructors:</h2>
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
                                                <p>{instructor.first_name} plays {instructor.instrument.name}, prefers {instructor.music_style.style}, and likes to work with  {instructor.skill_level.level} students.</p>
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
