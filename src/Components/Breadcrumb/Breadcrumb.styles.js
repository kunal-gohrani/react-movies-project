import styled from "styled-components";

export const Wrapper = styled.div`
background: var(--medGrey);
color: var(--white);
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 4rem;
text-decoration: none;

`;
export const Content = styled.div`
width: 100%;
padding: 0 1.3rem;
font-size: var(--fontMed);

span {
    color: inherit;
    padding-right: 2px;
}
a {
    text-decoration: none;
    color: inherit;
}

a:hover{
    text-decoration: underline;
}

@media(max-width:768px){
    font-size: var(--fontSmall);
}


`;