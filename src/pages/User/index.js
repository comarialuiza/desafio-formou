import React from 'react';

import Header from './../../components/Header';

export default function Test(props) {
    const urlParam = props.match.params.id;

    return(
        <>
            <Header active={ 'users' } />
            <p>Hello {urlParam}</p>
        </>
    );
}