import styled from 'styled-components';

export const Container = styled.table`
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    max-width: 1368px;
    margin: 40px auto 0;
    width: 100%;
    border-collapse: collapse;

    @media (max-width: 1367px) {
        border-collapse: separate;
        border-spacing: 0 15px;
    }
`;

export const Head = styled.thead`
    padding: 10px 0;
    border: 0;
`;

export const HeadContent = styled.th`
    text-transform: uppercase;
    color: #143EA3;
    text-align: left;
    padding: 20px 0;

    &:last-of-type {
        text-align: center;
    }
`;