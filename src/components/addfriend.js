import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function AddFriend(props){
    const [newFriend, setNewFriend] = useState({
        id: "",
        name: "",
        age: "",
        email: ""
    })

    const onChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value,
            id: Date.now()
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('http://localhost:9000/api/friends', newFriend)
            .then(res => {
                props.history.push('/friends')
            })
            .catch(err => console.log(err))
    }


    return(
        <div className="addFriend-container">
            <div className="addFriend-header ">
                <h1>ADD FRIEND</h1>
            </div>
            <div className="formContainer">
                <form onSubmit={onSubmit} className="form">
                    <input placeholder="Enter Friends Name" type="text" name="name" onChange={onChange} value={newFriend.name} />
                    <input placeholder="Enter Friends Email" type="email" name="email" onChange={onChange} value={newFriend.email} />
                    <input placeholder="Enter Friends Age" type="text" name="age" onChange={onChange} value={newFriend.age}/>
                    <button>ADD FRIEND</button>
                </form>
            </div>
        </div>
    )
}