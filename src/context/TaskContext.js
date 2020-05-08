import React, { createContext, useState, useEffect } from 'react';

import api from './../services/api';

export const TaskContext = createContext();

export const TaskProvider = props => {
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        api.get('todos').then(res => {
            setTasks(res.data);
        });
    }, []);

    return(
        <TaskContext.Provider value={[ tasks, setTasks ]} >
            { props.children }
        </TaskContext.Provider>
    );
}