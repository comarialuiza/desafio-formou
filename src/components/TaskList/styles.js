import styled from 'styled-components';

export const Container = styled.table`
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    max-width: 1368px;
    margin: 40px auto;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
`;

export const Head = styled.thead`
    padding: 10px 0;
    border: 0;
`;

export const HeadContent = styled.th`
    text-transform: uppercase;
    color: #143EA3;
    text-align: left;

    &:last-of-type {
        text-align: center;
    }
`;