import { signIn } from 'next-auth/client'
import React from 'react'

export const Login = () => {
    return (
        <div className="container container-login">
            <h2>quichel.</h2>
            <button onClick={signIn} className="btn btn-login"><span>Ingresá</span></button>
        </div> 
    )
}
