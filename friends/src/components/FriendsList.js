import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const FriendsList = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data);
        })
    }, [friends]);

    const [info, setInfo] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', info)
        .then(res => {
            friends.push(res);
        })
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder="Enter your name." value={info.name} onChange={handleChange}/>
                <input type="text" name="age" placeholder="Enter your age." value={info.age} onChange={handleChange}/>
                <input type="text" name="email" placeholder="Enter your email." value={info.email} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>   
            {friends.map(friend => (
                <div>
                    <h1>{friend.name}</h1>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    );
};

export default FriendsList;