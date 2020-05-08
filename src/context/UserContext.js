import React, { createContext, useState, useEffect } from 'react';

import api from './../services/api';

export const UserContext = createContext();

export const UserProvider = props => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        api.get('users').then(res => {
            setUsers(res.data);
        }) 
    }, []);

    return(
        <UserContext.Provider value={[ users, setUsers ]} >
            { props.children }
        </UserContext.Provider>
    );
}