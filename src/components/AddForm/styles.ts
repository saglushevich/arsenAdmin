import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 150px;
`;

export const Form = styled.form`
`;

export const Inputs = styled.div`
    position: relative;
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

export const DropDawnHeader = styled.div`
    cursor: pointer;
    display: flex;
    width: 400px;
    height: 70px;
    background: #fff;
    border: 2px solid  #5ECE7B;
    color: gray;
    font-size: 24px;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Message = styled.div`
    color: #5ECE7B;
    font-size: 36px;
    text-align: center;
    margin-top: 55px;
    font-weight: 700;
`;

export const Dropdawn = styled.div`
    z-index: 100;
    position: absolute;
    top: 65px;
    right: 0;
    width: 400px;
`

export const Menu = styled.ul`
    list-style-type: none;
    margin: 5px 0;
    padding: 0px;
    border: 1px solid grey;
    width: 100%;
`

export const MenuItem = styled.li`
    cursor: pointer;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    background-color: white;
    padding: 5px 10px;
    &:hover {
        background-color: lightgray;
    }
`

export const MenuButton = styled.button`
    width: 100%;
    height: 100%;
    text-align: left;

    background: none;
    color: inherit;
    border: none;
    padding: 5px;
    margin: 0;
    font: inherit;
    cursor: pointer;
`