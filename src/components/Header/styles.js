import styled from 'styled-components';

export const Container = styled.header`
    max-width: 1368px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    @media (max-width: 1367px) {
        padding-left: 15px;
        padding-right: 15px;
    }

    h1 {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 300;
        margin-right: 70px;
    }

    .link {
        font-size: 20px;
        font-weight: 700;
        padding: 10px 13px;

        &#active {
            color: #143EA3;
            background: #EDF1F8;
            border-radius: 8px;
            text-align: center;
        }
    }
`;

export const Head = styled.header`
    border-bottom: 1px solid #ccc;
    background: #fff;
    height: 64px;
`;

export const Divider = styled.span`
    height: 40px;
    width: 1px;
    background-color: #efefef;
    display: block;
    margin: 0 30px;
`;