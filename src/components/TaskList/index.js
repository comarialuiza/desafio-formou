import React, { useEffect, useState } from 'react';

import { Container, Head, HeadContent } from './styles';
import Task from '../Task';

import api from './../../services/api';

export default function TaskList() {
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
        <Container>
            <Head>
                <tr>
                    <HeadContent>Tarefa</HeadContent>
                    <HeadContent>Responsável</HeadContent>
                    <HeadContent>Status</HeadContent>
                </tr>
            </Head>
            { tasks.map(task => ( 
                <Task 
                    key={ task.id } 
                    user={ users.filter(user => user.id === task.userId).map(filteredUser => filteredUser.name) } 
                    data={ task } 
                />
            ))}
        </Container>
    );
}