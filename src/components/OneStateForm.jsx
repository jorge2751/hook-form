import React, { useState } from 'react'
import FormDisplay from './FormDisplay'
// for all input, state variables
const OneStateForm = () => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [formError, setFormError] = useState({
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        confirmPassword: true
    })

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFormInput = (e) => {
        const keyToUpdate = e.target.name
        const valToUpdate = e.target.value
        // handle input
        setFormState({
            ...formState,
            [keyToUpdate]: valToUpdate
        })

        // handle errors
        const errors = { ...formError }
        switch (keyToUpdate) {
            case 'firstName':
                valToUpdate.length < 2 ?
                    errors.firstName = "first name must be at least 2 characters" :
                    errors.firstName = ""
                break;
            case 'lastName':
                valToUpdate.length < 2 ?
                    errors.lastName = "last name must be at least 2 characters" :
                    errors.lastName = ""
                break;
            case 'email':
                valToUpdate.length < 2 ?
                    errors.email = "email must be at least 2 characters" :
                    errors.email = ""
                break;
            case 'password':
                valToUpdate.length < 8 ?
                    errors.password = "password must be at least 8 characters" :
                    errors.password = ""
                break;
            case 'confirmPassword':
                valToUpdate !== formState.password ?
                    errors.confirmPassword = "passwords must match" :
                    errors.confirmPassword = ""
        }

        setFormError(errors)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // send the completed form into backend using API
        const newUser = formState
        console.log(newUser)
        setHasBeenSubmitted(true);
    }

    return (
        <div class="container mb-3">
            <form onSubmit={handleSubmit}>
                {
                    hasBeenSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }
                <h2>Form</h2>
                <div class="mb-3">
                    <label class="form-label"> First Name: </label>
                    <input type="text" class="form-control" onChange={handleFormInput}
                        name="firstName" value={formState.firstName} />
                    <p class="form-text" style={{ color: "red" }}> {formError.firstName} </p>
                </div>
                <div class="mb-3">
                    <label class="form-label"> Last Name: </label>
                    <input type="text" class="form-control" onChange={handleFormInput}
                        name="lastName" value={formState.lastName} />
                    <p class="form-text" style={{ color: "red" }}> {formError.lastName} </p>
                </div>
                <div class="mb-3">
                    <label class="form-label"> Email: </label>
                    <input type="email" class="form-control" onChange={handleFormInput}
                        name="email" value={formState.email} />
                    <p class="form-text" style={{ color: "red" }}> {formError.email} </p>
                </div>
                <div class="mb-3">
                    <label class="form-label"> Password: </label>
                    <input type="password" class="form-control" onChange={handleFormInput}
                        name="password" value={formState.password} />
                    <p class="form-text" style={{ color: "red" }}> {formError.password} </p>
                </div>
                <div class="mb-3">
                    <label class="form-label"> Confirm Password: </label>
                    <input type="password" class="form-control" onChange={handleFormInput}
                        name="confirmPassword" value={formState.confirmPassword} />
                    <p class="form-text" style={{ color: "red" }}> {formError.confirmPassword} </p>
                </div>
                <button className="btn btn-primary" type="submit" disabled={formError.firstName || formError.lastName || formError.email || formError.password || formError.confirmPassword}> Submit</button>
            </form>
            <FormDisplay firstName={formState.firstName} lastName={formState.lastName} email={formState.email} password={formState.password} confirmPassword={formState.confirmPassword} />
        </div>
    )
}

export default OneStateForm