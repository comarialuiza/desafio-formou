import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Head, Divider } from './styles';

export default function Header({ active }) {
    const [ activeMenu, setActiveMenu ] = useState('tasks');

    useEffect(() => {
        setActiveMenu(active);
    }, [active]);

    return(
        <Head>
            <Container>
                <h1>Logo</h1>
                <Link to="/" className="link" id={ activeMenu === 'tasks' ? 'active' : '' } >Tarefas</Link>
                <Divider />
                <Link to="/users" className="link" id={ activeMenu === 'user' ? 'active' : '' }>Usuários</Link>
            </Container>
        </Head>
    );
}