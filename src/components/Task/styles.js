import styled from 'styled-components';

export const Container = styled.p`
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Tag = styled.span`
    padding: 10px;
    width: 90px;
    text-align: center;
    background-color: ${props => props.bgColor};
    border-radius: 3px;
    color: ${props => props.color}
`;

export const TaskAssigned = styled.span`
    width: 200px;
    text-align: center;
`;

export const TaskText = styled.span`
    width: calc(100% - 200px - 90px);
`;