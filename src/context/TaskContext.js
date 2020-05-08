import React, { createContext, useState, useEffect } from 'react';

import api from './../services/api';

export const TaskContext = createContext();

export const TaskProvider = props => {
    const [ tasks, setTasks ] = useState([]);
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        api.get('todos').then(res => {
            setTasks(res.data);
        });

        api.get('users').then(res => {
            setUsers(res.data);
        }) 
    }, []);

    return(
        <TaskContext.Provider value={{ tasks, users }} >
            { props.children }
        </TaskContext.Provider>
    );
}