import React, { useState, useEffect } from 'react'
import { useHistory,Link } from "react-router-dom"
import { getInstructors } from '../instructor/InstructorManager'
import { getStudents } from '../student/StudentManager'
import { getStaff } from '../admin/AdminManager'
import { deleteAppUser, updateAppUser } from '../user/UserManager'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faStar } from "@fortawesome/free-solid-svg-icons"
import "./Admin.css"

export default function AdminList() {
    
    const history = useHistory()
    const [instructors, setInstructors] = useState([])
    const [students, setStudents] = useState([])
    const [staff, setStaff] = useState([])

	const trashCan = <FontAwesomeIcon icon={faTrashCan} />
	const star = <FontAwesomeIcon icon={faStar} />
    
    useEffect(() => {
        getInstructors().then((d) => {
            setInstructors(d)
        })
    }, [])

    useEffect(() => {
        getStudents().then((d) => {
            setStudents(d)
        })
    }, [])

    useEffect(() => {
        getStaff().then((d) => {
            setStaff(d)
        })
    }, [])

    const updateInstructors = () => {
        getInstructors().then((d) => {
            console.table(d)
            setInstructors(d)
            history.push('/admin')
        })
    }

    const updateStudents = () => {
        getStudents().then((d) => {
            setStudents(d).then(() => {
                history.push('/admin')
            })
        })
    }

    const updateStaff = () => {
        getStaff().then((d) => {
            setStaff(d).then(() => {
                history.push('/admin')
            })
        })
    }

    const updateInstructorApproval = (instructor, value) => {
        const copy = instructor
            copy.approved = value
            updateAppUser(copy).then(() => {
                history.push('/admin')
            })
    }

    return (
        <>
            <section className = "admin-list" >
                <div className="container">
                    <div className="admin-list__instructors">
                        <h2 className="admin-list__header">Instructors:</h2>
                        <div className="admin-list__instructor">
                            {
                                instructors.map(instructor => {
                                    return <div className='admin-list__list-item split__admin-list' key={`instructor--${instructor.id}`}>
                                        <div className="flow-content corner-square split__admin-list-item">
                                            <img src={`https://whistler-app-api.herokuapp.com${instructor.image}`} alt='' />
                                        </div>
                                        <div className="split__admin-list-item">
                                            <div className="flow-content admin-list__user-details">
                                                <Link className="admin-list__user-name" to={`/details/${instructor.id}`}>
                                                    <h3>{instructor.full_name}</h3>
                                                </Link>
                                                <div className="admin-list__list-items">
                                                    <ul>
                                                        <li>Instrument: {instructor.instrument ? `${instructor.instrument.name}` : ""}</li>
                                                        <li>Preferred Style: {instructor.music_style.style} music</li>
                                                        <li>Approved to teach up to {instructor.skill_level.level} level students</li>
                                                        <li className="admin-list__icon-buttons">
                                                            <button
                                                                className='btn__admin btn__admin--trashcan'
                                                                type='submit'
                                                                onClick={(evt) => {
                                                                    evt.preventDefault()
                                                                    deleteAppUser(instructor.id).then(() => {
                                                                        updateInstructors()
                                                                    })
                                                                }}>
                                                                {trashCan}
                                                            </button>

                                                            {
                                                                <>
                                                                    {instructor.approved === true ? (
                                                                        <button
                                                                            className='btn__admin btn__admin--star--green'
                                                                            type='submit'
                                                                            onClick={(evt) => {
                                                                                evt.preventDefault()
                                                                                updateInstructorApproval(instructor, false)
                                                                            }}>
                                                                            {star}
                                                                        </button>
                                                                    ) : (
                                                                        <button
                                                                            className='btn__admin btn__admin--star--yellow'
                                                                            type='submit'    
                                                                                onClick={(evt) => {
                                                                                    evt.preventDefault()
                                                                                    updateInstructorApproval(instructor, true)
                                                                            }}>
                                                                            {star}
                                                                        </button>
                                                                    )}
                                                                </>
                                                            }
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flow-content admin-list__user-details">
                                                <h3>Address:</h3>
                                                <ul>
                                                    <li>{instructor.address}</li>
                                                    <li>{instructor.city}, {instructor.state.abbrev} {instructor.zipcode} </li>
                                                </ul>
                                                <ul>
                                                    <li><b>Phone: </b>{instructor.phone} </li>
                                                </ul>
                                                <ul>
                                                    <li><b>e-mail: </b>{instructor.email} </li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="admin-list__students">
                        <h2 className="admin-list__header">Students:</h2>
                        <div className='admin-list__student'>
                            {
                                students.map(student => {
                                    return <div className='admin-list__list-item split__admin-list' key={`student--${student.id}`}>
                                        <div className="split__admin-list-item">
                                            <div className="flow-content admin-list__user-details">
                                                <Link className="admin-list__user-name" to={`/details/${student.id}`}>
                                                    <h3>{student.full_name}</h3>
                                                </Link>
                                                <div className="admin-list__list-items">
                                                    <ul>
                                                        <li>Instrument: {student.instrument ? `${student.instrument.name}` : `No instrument yet`}</li>
                                                        <li>Preferred Style: {student.music_style.style} music</li>
                                                        <li>Currently assigned to {student.skill_level.level} level</li>
                                                        <li className="admin-list__icon-buttons">
                                                            <button
                                                                className='btn__admin btn__admin--trashcan'
                                                                type='submit'
                                                                onClick={(evt) => {
                                                                    evt.preventDefault()
                                                                    deleteAppUser(student.id).then(() => {
                                                                        updateStudents()
                                                                    })
                                                                }}>
                                                                {trashCan}
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flow-content admin-list__user-details">
                                                <h3>Address:</h3>
                                                <ul>
                                                    <li>{student.address}</li>
                                                    <li>{student.city}, {student.state.abbrev} {student.zipcode} </li>
                                                </ul>
                                                <ul>
                                                    <li><b>Phone: </b>{student.phone} </li>
                                                </ul>
                                                <ul>
                                                    <li><b>e-mail: </b>{student.email} </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="admin-list__staff-members">
                        <h2 className="admin-list__header">Staff:</h2>
                        <div className="admin-list__staff-member">
                            {
                                staff.map(staff => {
                                    return <div className='admin-list__list-item split__admin-list' key={`staff--${staff.id}`}>
                                        <div className="flow-content admin-list__user-details">
                                            <Link to={`/details/${staff.id}`}>
                                                <h3>{staff.full_name}</h3>
                                            </Link>
                                            <div className="admin-list__list-items">
                                                <ul>
                                                    <li>Shop #{staff.shop_id}: Manager</li>
                                                    <li>{staff.shop.name}</li>
                                                    <li>{staff.shop.address}</li>
                                                    <li>{staff.shop.city}, {staff.shop.state.abbrev} {staff.shop.zipcode}</li>
                                                    <li>{staff.shop.phone}</li>
                                                    <li className="admin-list__icon-buttons">
                                                        <button
                                                            className='btn__admin btn__admin--trashcan'
                                                            type='submit'
                                                            onClick={(evt) => {
                                                                evt.preventDefault()
                                                                deleteAppUser(staff.id).then(() => {
                                                                    updateStaff()
                                                                })
                                                            }}>
                                                            {trashCan}
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flow-content admin-list__user-details">
                                                <h3>Address:</h3>
                                                <ul>
                                                    <li>{staff.address}</li>
                                                    <li>{staff.city}, {staff.state.abbrev} {staff.zipcode} </li>
                                                </ul>
                                                <ul>
                                                    <li><b>Phone: </b>{staff.phone} </li>
                                                </ul>
                                                <ul>
                                                    <li><b>e-mail: </b>{staff.email} </li>
                                                </ul>
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