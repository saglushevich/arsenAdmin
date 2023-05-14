import styled from "styled-components";

export const Product = styled.li`
    position: relative;
    width: 385px;
    padding: 15px;
    cursor: pointer;
    transition: all .5s;
    box-shadow: 0px 4px 35px 0px #A8ACB030;
    &:hover {
        box-shadow: 0px 2px 15px 0px #AABDBC;
    }
`;

export const Content = styled.div``;

export const Image = styled.img`
    width: 350px;
    height: 330px;
    object-fit: contain;
`;

export const Title = styled.h2`
    font-family: 'Raleway';
    font-weight: 300;
    font-size: 18px;
    color: #1D1F22;
    margin-top: 24px;
    line-height: 160%;
`;

export const Price = styled.h3`
    font-family: 'Raleway';
    font-weight: 500;
    font-size: 18px;
    color: #1D1F22;
    line-height: 160%;
`;

export const Delete = styled.button`
    position: absolute;
    display: block;
    border: 1px solid #5ECE7B;
    width: 150px;
    padding: 15px 0;
    background: #CF4A4E;
    border: 1px solid #CF4A4E;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    top: 0;
    right: 0;
    border-radius: 5px;
`;

export const Edit = styled(Delete)`
    top: 60px;
    right: 0;
    background: #CFCC5F;
    border: 1px solid #CFCC5F;
`;