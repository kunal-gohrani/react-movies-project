import styled from "styled-components";

export const Spinner = styled.div`
border: 5px sold var(--lightGrey);
border-top: 10px solid var(--medGrey);
border-bottom: 5px solid var(--medGrey);
border-left: 2px solid var(--lightGrey);
border-radius: 50%;
width: 50px;
height: 50px;
animation: spin 0.8s linear infinite;
margin: 20px auto;

@keyframes spin{
    0%{
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

`;