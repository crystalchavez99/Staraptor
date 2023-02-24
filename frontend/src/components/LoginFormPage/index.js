import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";

function LoginFormPage() {
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const history = useHistory();

    if (sessionUser) {
        <Redirect to="/" />
    }

    // useEffect(() => {
    //     const errors = [];
    //     if (!credential){
    //         errors.push("Need credential")
    //     }
    //     if(!password){
    //         errors.push("Need password")
    //     }
    //     setErrors(errors)
    // }, [credential, password])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login({ credential, password }))
        .catch(async res =>{
        const data = await res.json();
        console.log("found errors", data)
        if (data && data.errors) {
            setErrors(data.errors)
        }else{
            history.push("/")
        }
        })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    The following errors were found:
                    <ul>
                        {errors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
                <label>
                    Username or Email
                </label>
                <input
                    type="text"
                    name="credential"
                    value={credential}
                    onChange={e => setCredential(e.target.value)}
                    placeholder="Enter your credential"
                    
                >
                </input>
                <label>
                    Password
                </label>
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"

                >
                </input>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default LoginFormPage;
