import React, { useState } from 'react'

const HookForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password ,confirmPassword};
        console.log("Welcome", newUser);
    };
    
    return(
        <div className="container">
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div className="displayInfo">
                <h3>First Name: { firstName }</h3>
                <h3>Last Name: { lastName }</h3>
                <h3>Email Address: { email }</h3>
                <h3>Password: { password }</h3>
                <h3>Confirm Password: { confirmPassword }</h3>
            </div>
        </div>
    );
};

export default HookForm