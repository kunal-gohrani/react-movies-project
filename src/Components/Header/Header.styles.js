import styled from "styled-components";

export const Wrapper = styled.div`
background-color: var(--darkGrey);
padding: 0 20px;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
// max-width: var(--maxWidth);
padding: 20px 0;
margin: 0 auto;
`;

export const LogoImg = styled.img`
width: 150px;

@media (max-width: 500px){
    width: 100px;
}

@media (max-width: 200px){
    width: 50px;
}
`;

export const TMDBLogoImg = styled.img`
width: 150px;

@media (max-width: 500px){
    width: 100px;
}

@media (max-width: 200px){
    width: 50px;
}
`;
