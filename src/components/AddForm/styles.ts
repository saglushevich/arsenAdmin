import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 150px;
`;

export const Form = styled.form`
`;

export const Inputs = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const Button = styled.button`
    display: block;
    padding: 15px 85px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 18px;
    color: #FFF;
    text-transform: uppercase;
    background: #5ECE7B;
    cursor: pointer;
    border: 1px solid #5ECE7B;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 50px;
    &:disabled {
        background: #768F9C;
        border: 1px solid #768F9C;
    }
`;

export const Input = styled.input`
    display: block;
    width: 400px;
    height: 70px;
    background: #fff;
    border: 2px solid  #5ECE7B;
    color: #5ECE7B;
    font-size: 24px;
    padding: 0 20px;
    text-align: center;
    &:nth-last-child(n+2) {
        margin-right: 25px;
    }
`;

export const Message = styled.div`
    color: #5ECE7B;
    font-size: 36px;
    text-align: center;
    margin-top: 55px;
    font-weight: 700;
`;