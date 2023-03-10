import React from 'react'

const FormDisplay = (props) => {
    const { firstName , lastName, email, password, confirmPassword } = props
    return (
        <div className="displayInfo">
            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Email Address: {email}</h4>
            <h4>Password: {password}</h4>
            <h4>Confirm Password: {confirmPassword}</h4>
        </div>
    )
}

export default FormDisplay