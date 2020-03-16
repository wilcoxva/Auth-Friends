import React from 'react';

const LogIn = () => {
    return (
        <div>
            <form>
                <input type="text" name="username" placeholder="Enter your username." />
                <input type="text" name="password" placeholder="Enter your password." />
                <button type="submit">Submit</button>
            </form>   
        </div>
    )
};

export default LogIn;