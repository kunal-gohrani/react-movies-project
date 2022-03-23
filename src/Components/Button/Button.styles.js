import styled from "styled-components";

export const Wrapper = styled.button`
display: block;
background: var(--darkGrey);
color: var(--white);
border-radius: 30px;
margin: 15px auto;
width: 20%;
height: 65px;
min-width: 200px;

border: 0;
font-size: var(--fontBig);
outline: none;
transition: all 0.4s;
cursor: pointer;

:hover{
    opacity: 0.8;
}
`;