import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1050;
    background-color: #fff;
    padding: 25px 0 25px 0;
    width: 1250px;
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const MenuItem = styled(Link)`
    position: relative;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    padding: 5px 20px 0;
    line-height: 120%;
    text-transform: uppercase;
    color: #1D1F22;
    cursor: pointer;
    &:hover {
        color: #5ECE7B;
    }
    &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: -25px;
        left: 0;
        background-color: #5ECE7B;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    display: block;
    padding: 15px 35px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 16px;
    color: #FFF;
    text-transform: uppercase;
    background: #5ECE7B;
    cursor: pointer;
    border: 1px solid  #5ECE7B;
    border-radius: 5px;
    &:nth-last-child(1) {
        margin-left: 20px;
    }
`;