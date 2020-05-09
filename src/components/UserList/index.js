import React, { useContext } from 'react';

import { Container } from './styles';
import User from './../User';
import { UserContext } from './../../context/UserContext';

export default function UserList({ userId }) {
    const [ users ] = useContext(UserContext);

    return(
        <Container>
            { userId 
                ? 
                    (
                        users.filter(user => Number(user.id) === Number(userId)).map(filteredUsers => (
                            <User key={ filteredUsers.id } userInfo={ filteredUsers } moreInfo={ filteredUsers.name } />
                        ))
                    )
                : 
                    (
                        users.map(user => (
                            <User key={ user.id } userInfo={ user } />
                        ))
                    )
            }
        </Container>
    );
}