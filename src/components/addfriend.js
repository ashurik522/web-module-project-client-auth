import React, { useState } from "react";
import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function AddFriend(){
    const [newFriend, setNewFriend] = useState({
        id: "",
        name: "",
        age: null,
        email: ""
    })


    return(
        <div className="addFriend-container">
            <div className="addFriend-header ">
                <h1>ADD FRIEND</h1>
            </div>
            <div className="formContainer">
                <form className="form">
                    <input placeholder="Enter Friends Name" type="text" name="name"/>
                    <input placeholder="Enter Friends Email" type="email" name="name"/>
                    <input placeholder="Enter Friends Age" type="number" name="age"/>
                    <button>ADD FRIEND</button>
                </form>
            </div>
        </div>
    )
}