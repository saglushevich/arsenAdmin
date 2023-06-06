import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000075;
    z-index: 1200;
    overflow: hidden;
`;

export const Content = styled.div`
    margin: 0 auto;
    max-height: 550px;
    margin-top: 55px;
    padding: 35px;
    width: 750px;
    background: #FFF;
    overflow: scroll;
`;

export const Text = styled.div`
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 15px;
    text-align: center;
`;

export const Title = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 28px;
`;

export const FieldTitle = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 18px;
`

export const Number = styled(Title)`
    color: #5ECE7B;
    margin-top: 10px;
`;

export const Form = styled.form`
    margin-top: 20px;
`;

export const Input = styled.input`
    margin: 10px auto;
    width: 300px;
    height: 50px;
    background: #fff;
    border: 2px solid #5ECE7B;
    color: #5ECE7B;
    font-size: 24px;
    padding: 0 20px;
    text-align: center;
`;

export const Radio = styled.input``;

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
    margin-top: 20px;
`;

export const CloseBtn = styled.div`
    position: absolute;
    font-size: 128px;
    top: 0;
    right: 50px;
    color: #FFF;
    cursor: pointer;
`;

export const Label = styled.label`
    margin-left: 10px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 18px;
`;

export const Status = styled.div``;

export const Inputs = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 15px;
`;

export const Block = styled.div``;