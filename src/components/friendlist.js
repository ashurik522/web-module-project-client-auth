import React, { useState, useEffect } from "react";
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function Friends(props) {

    const [friends, setFriends] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res =>{
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    }
    console.log(friends)
    return(
        <div className="friendsContainer">
            <h1>FRIENDS LIST</h1>
            <div className="friendsList">
                {friends.map(friend => (
                    <h2 key={friend.id}>- {friend.name.toUpperCase()} - {friend.email.toUpperCase()}</h2>
                ))}
            </div>

        </div>
    )
}