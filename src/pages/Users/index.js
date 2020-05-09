import React from 'react';
import Header from './../../components/Header';
import UserList from './../../components/UserList';

export default function Users() {
    return(
        <>
            <Header active={ 'user' } />
            <UserList />
        </>
    );
}