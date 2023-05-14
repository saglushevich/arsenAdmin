import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 35px 0;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
`;

export const Title = styled.h2`
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 24px;
    line-height: 27px;
    color: #1D1F22;
    margin-bottom: 5px;
`;

export const Span = styled.span`
    color: #5ECE7B;
`;

export const Product = styled.div`
    display: block;
    font-size: 18px;
    line-height: 26px;
    color: #1D1F22;
    font-weight: 700;
`;

export const Description = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #1D1F22;
    text-align: justify;
    margin-top: 10px;
`;

export const Button = styled.button`
    display: block;
    border: 1px solid #5ECE7B;
    width: 190px;
    padding: 15px 0;
    border-radius: 5px;
    background: #5ECE7B;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    margin-top: 20px;
`;

export const DeleteButton = styled(Button)`
    background: #CF4A4E;
    border: 1px solid #CF4A4E;
`;

export const Details = styled.div``;