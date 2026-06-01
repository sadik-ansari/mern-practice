import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context'

const User = () => {
    const { user, setUser } = useContext(UserContext)
    console.log("User component rendered")
    return (
        <>
            <div>{user}</div>
            <button onClick={() => setUser('Sadik Ansari')}>Chnage name</button>
        </>
    )
}

export default User