import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions/index';

export default function TaskList() {
    useEffect(() => {
        getData();
    }, []);

    return (
        <h1>Hello</h1>
    );
}