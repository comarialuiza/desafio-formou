import React from 'react';

import { Container, Tag } from './styles';

export default function Task({ data }) {
    return(
        <Container>
            <span>{ data.title }</span>
            <span></span>
            <Tag bgColor={ data.completed ? '#F7FAEF' : '#FCF1F2' } color={ data.completed ? '#9CC455' : '#D84B4B' }>{ data.completed ? 'Feito' : 'Pendente' }</Tag>
        </Container>
    );
}