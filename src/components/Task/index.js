import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Tag, TaskAssigned, TaskText } from './styles';

export default function Task({ data, user }) {
    return(
        <Container>
            <TaskText>{ data.title }</TaskText>
            <TaskAssigned><Link to="users" >{ user }</Link></TaskAssigned>
            <Tag bgColor={ data.completed ? '#F7FAEF' : '#FCF1F2' } color={ data.completed ? '#9CC455' : '#D84B4B' }>{ data.completed ? 'Feito' : 'Pendente' }</Tag>
        </Container>
    );
}