import React, { useContext } from 'react';

import { Container, Head, HeadContent } from './styles';
import Task from '../Task';
import { TaskContext } from './../../context/TaskContext';
import { UserContext } from './../../context/UserContext';

export default function TaskList() {
    const [ tasks ] = useContext(TaskContext);
    const [ users ] = useContext(UserContext);

    return(
        <Container>
            <Head>
                <tr>
                    <HeadContent>Tarefa</HeadContent>
                    <HeadContent>Responsável</HeadContent>
                    <HeadContent>Status</HeadContent>
                </tr>
            </Head>
            <tbody>
                { tasks.map(task => (
                    <Task 
                        key={ task.id } 
                        user={ users.filter(user => user.id === task.userId).map(filteredUser => filteredUser.name) } 
                        userId={ users.filter(user => user.id === task.userId).map(userId => userId.id) }
                        data={ task } 
                    />
                ))}
            </tbody>
        </Container>
    );
}
