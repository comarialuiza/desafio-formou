import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px;
    box-sizing: border-box;
    border-radius: 4px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Image = styled.div`
    height: 132px;
    width: 132px;
    background: #EFEFEF;
    border-radius: 50%;
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        height: 60px;
        width: 60px;
        color: #434343;
    }
`;

export const UserInfo = styled.div`
    .name {
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: #434343;
        margin-bottom: 10px;
        display: block;
    }

    .email {
        font-size: 16px;
        line-height: 20px;
        color: #252631;
        margin-bottom: 10px;
    }

    .tasks {
        color: #143EA3;
        font-size: 16px;
        text-decoration: underline;
    }
`;