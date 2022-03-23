import styled from "styled-components";

const Wrapper = styled.div`
background: linear-gradient(rgba(0,0,0,0) 41%,rgba(0,0,0,0.65) 100%), url(${ ({image})=> image });

background-size: 100%,cover;

background-position: center;

height: 650px;

position: relative;

animation: animateHeroImage 1s;

@keyframes animateHeroImage {
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
}
`;


const Content = styled.div`
    padding: 20px;
    margin: 0 auto;
    max-width: var(--maxWidth);
`;

const Text = styled.div`
z-index: 100;
max-width: 60%;
position: absolute;
bottom: 40px;
margin-right: 20px;
min-height: 100px;

h1 {
    font-size: var(--fontSuperBig);
    
    @media (max-width: 720px){
        font-size: var(--fontBig);
    }
}

p {
    font-size: var(--fontMed);

    @media(max-width: 720px){
        font-size: var(--fontSmall);
    }
}

@media(max-width: 720px){
    max-width: 100%;
}
`;

export {Wrapper,Content,Text};