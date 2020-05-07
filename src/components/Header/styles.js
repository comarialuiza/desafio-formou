import styled from 'styled-components';

export const Container = styled.header`
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h1 {
        text-transform: uppercase;
        font-size: 20px;
        margin-right: 70px;
        font-weight: 300;
    }

    .link {
        font-size: 20px;
        padding-right: 30px;

        &:not(:last-of-type) {
            margin-right: 30px;
            border-right: 1px solid #ccc;
        }
    }
`;

export const Head = styled.header`
    padding: 18px 0;
    border-bottom: 1px solid #ccc;
    background: #fff;
`;