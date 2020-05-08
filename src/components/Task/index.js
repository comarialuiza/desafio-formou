import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Tag, TaskAssigned, Content } from './styles';

export default function Task({ data, user, userId }) {
    return(
        <Container>
            <Content>{ data.title }</Content>
            <Content><TaskAssigned><Link to={`/users/${userId}`} >{ user }</Link></TaskAssigned></Content>
            <Content><Tag bgColor={ data.completed ? '#F7FAEF' : '#FCF1F2' } color={ data.completed ? '#9CC455' : '#D84B4B' }>{ data.completed ? 'Feito' : 'Pendente' }</Tag></Content>
        </Container>
    );
}