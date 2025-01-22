import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);
    //console.log(algo);

    return (
        <>
            <h1>Login page</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>


            <button
                className='btn btn-primary'
                onClick={() => setUser({ id: 123, name: 'Andres', email: 'undadevcode@gmail.com' })}
            >
                Establecer usuario
            </button>
        </>
    )
}
