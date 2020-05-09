import React from 'react';

import Header from './../../components/Header';
import UserList from './../../components/UserList';

export default function Test(props) {
    const urlParam = props.match.params.id;

    return(
        <>
            <Header active={ 'user' } />
            <UserList userId={ urlParam } />
        </>
    );
}