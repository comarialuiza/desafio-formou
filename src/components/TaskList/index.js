import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Task from '../Task';

import api from './../../services/api';

export default function TaskList() {
    const [ tasks, setTasks ] = useState([]);

    useEffect(() => {
        api.get('todos').then(res => {
            setTasks(res.data);
        })
    }, []);

    return(
        <Container>
            { tasks.map(task => ( <Task key={ task.id } data={ task } /> ))}
        </Container>
    );
}