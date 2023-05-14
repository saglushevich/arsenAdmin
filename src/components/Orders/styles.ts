import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 150px;
`;

export const Message = styled.div`
    color: #5ECE7B;
    font-size: 36px;
    margin-top: 55px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const Filters = styled.div`
    display: flex;
    align-items: center;
`;

export const List = styled.div`
    margin-top: 55px;
`;

export const Filter = styled.div`
    display: block;
    padding: 10px 25px;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 18px;
    color: #FFF;
    text-transform: uppercase;
    background: #5ECE7B;
    cursor: pointer;
    border: 1px solid #5ECE7B;
    border-radius: 5px;
    &:nth-last-child(n+2) {
        margin-right: 10px;
    }
`;