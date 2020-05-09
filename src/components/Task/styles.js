import styled from 'styled-components';

export const Container = styled.tr`
    padding: 20px 0;
`;

export const Tag = styled.span`
    padding: 10px;
    width: 90px;
    text-align: center;
    background-color: ${props => props.bgColor};
    border-radius: 3px;
    color: ${props => props.color};
    display: block;
    margin: 0 auto;
`;

export const TaskAssigned = styled.span`
    text-align: center;

    a {
        color: #143EA3;
        text-decoration: underline;
    }
`;

export const Content = styled.td`
    border-bottom: 1px solid #E8ECEF;

    @media (min-width: 791px) {
        padding: 10px 0;
    }

    @media (max-width: 790px) {
        padding: 10px;
    }
`;