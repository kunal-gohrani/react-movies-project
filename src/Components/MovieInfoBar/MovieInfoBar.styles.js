import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
align-items: center;
background-color: var(--darkGrey);
min-height: 100px;
color: white;
padding: 0 20px;
`;

export const Content = styled.div`
margin: 0 auto;
display: flex;
/* align-items: center; */
/* justify-content: center; */
width: 100%;
max-width: var(--maxWidth);

@media(max-width: 768px){
    display: block;
}
`;

export const Column = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color: var(--medGrey);
/* padding: 0 50px; */
margin: 0 20px;
flex: 1;

:first-child{
    margin-left: 0;
}

:last-child{
    margin-right: 0;
}

@media(max-width: 768px){
    margin: 1.4rem 0;
}


`;