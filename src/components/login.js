import React, { useState } from "react";
import axios from 'axios'

export default function Login(props) {
    const [state, setState] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    const handleChanges = e => {
        setState({
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const submit = e =>{
        e.preventDefault()
        axios.post('http://localhost:9000/api/login', state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.history.push("/friends")
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="loginContainer">
            <h1>LOGIN</h1>
            <div className="formContainer">
                <form className="form" onSubmit={submit}>
                    <input placeholder="Username" type="text" name="username" onChange={handleChanges} value={state.credentials.username}/>
                    <input placeholder="Password" type="password" name="password" onChange={handleChanges} value={state.credentials.password}/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}