import styled from "styled-components";

type IStyles = {
    active?: boolean;
}

export const Wrapper = styled.div<IStyles>`
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
    margin-top: 85px;
    padding: 35px;
    width: 600px;
    background: #FFF;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 500;
`;

export const Form = styled.form`
    margin-top: 50px;
`;

export const Input = styled.input`
    display: block;
    margin: 20px auto;
    width: 400px;
    height: 70px;
    background: #fff;
    border: 2px solid  #5ECE7B;
    color: #5ECE7B;
    font-size: 24px;
    padding: 0 20px;
    text-align: center;
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
`;

export const CloseBtn = styled.div`
    position: absolute;
    font-size: 128px;
    top: 0;
    right: 50px;
    color: #FFF;
    cursor: pointer;
`;