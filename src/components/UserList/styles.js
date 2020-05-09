import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    max-width: 1368px;
    margin: 40px auto;
    width: 100%;
    border-collapse: collapse;

    @media (max-width: 1367px) {
        border-collapse: separate;
        border-spacing: 0 15px;
    }
`;