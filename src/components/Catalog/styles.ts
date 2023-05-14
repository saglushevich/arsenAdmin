import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 160px;
    padding-bottom: 190px;
`;

export const Title = styled.h1`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 42px;
    color: #1D1F22;
`;

export const Products = styled.ul`
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 386px);
    column-gap: 40px;
    row-gap: 100px;
`;