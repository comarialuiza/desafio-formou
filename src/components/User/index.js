import React, { useContext } from 'react';
import { FiUser } from 'react-icons/fi';

import { Container, Image, UserInfo } from './styles';
import { Link } from 'react-router-dom';
import { TaskContext } from './../../context/TaskContext';

export default function User({ userInfo }) {
    const [ tasks ] = useContext(TaskContext);

    return(
        <Container>
            <Image>
                <FiUser />
            </Image>
            <UserInfo>
                <Link className="name" to={`/users/${userInfo.id}`}>{ userInfo.name }</Link>
                <p className="email">{ userInfo.email }</p>
                <p className="tasks">{ tasks.filter(task => Number(task.userId) === Number(userInfo.id)).filter(task => task.completed === false).length } Tarefas Pendentes</p>
            </UserInfo>
        </Container>
    );
}