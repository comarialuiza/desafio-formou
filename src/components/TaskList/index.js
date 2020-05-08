import React, { useContext } from 'react';

import { Container, Head, HeadContent } from './styles';
import Task from '../Task';
import { TaskContext } from './../../context/TaskContext';

export default function TaskList({ tasks }) {
    const value = useContext(TaskContext);

    return(
        <Container>
            <Head>
                <tr>
                    <HeadContent>Tarefa</HeadContent>
                    <HeadContent>Responsável</HeadContent>
                    <HeadContent>Status</HeadContent>
                </tr>
            </Head>
            { value.tasks.map(task => ( 
                <>
                    <Task 
                        key={ task.id } 
                        user={ value.users.filter(user => user.id === task.userId).map(filteredUser => filteredUser.name) } 
                        data={ task } 
                    />
                </>
            ))}
        </Container>
    );
}
