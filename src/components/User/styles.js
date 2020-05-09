import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    border-radius: 4px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: 791px) {
        padding: 40px;
    }

    @media (max-width: 790px) {
        padding: 20px 0;
    }
`;

export const Image = styled.div`
    height: 132px;
    width: 132px;
    background: #EFEFEF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 791px) {
        margin-right: 40px;
    }

    @media (max-width: 790px) {
        margin-right: 20px;
    }

    svg {
        height: 60px;
        width: 60px;
        color: #434343;
    }
`;

export const UserInfo = styled.div`
    word-break: break-word;

    @media (min-width: 791px) {
        width: calc(100% - 132px - 40px);
    }

    @media (max-width: 790px) {
        width: calc(100% - 132px - 20px);
    }

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