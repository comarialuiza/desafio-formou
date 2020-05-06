import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Head } from './styles';

export default function Header({ active }) {
    const [ activeMenu, setActiveMenu ] = useState('tasks');

    console.log(active);

    return(
        <Head>
            <Container>
                <h1>Logo</h1>
                <Link to="/" className="link">Tarefas</Link>
                <Link to="/users" className="link">Usuários</Link>
            </Container>
        </Head>
    );
}