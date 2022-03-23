import styled from "styled-components";

export const Wrapper = styled.div`
background-image: url(${ ({backdrop})=>backdrop });
background-size: cover;
background-position: center;
padding: 2.5rem 2.5rem;
animation: animateMovieInfo 1s;

@keyframes animateMovieInfo{
    from {
        opacity: 0;
    }to{
        opacity: 1;
    }
}
`;

export const Content = styled.div`
display: flex;
max-width: var(--maxWidth);
margin: 0 auto;
background-color: rgba(0,0,0,0.7);
border-radius: 20px;
/* height: 600px; */
@media(max-width: 768px){
    display: block;
    max-height: none;
}
`;

export const Text = styled.div`
padding: 1.2rem 2.5rem;
color: var(--white);
width: 100%;



.rating-directors{
    display: flex;
    justify-content: flex-start;
    
}

.director {
    margin-left: 2.5rem;
}

.score{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--white);
    color: rgb(0,0,0);
    font-weight: 600;
}

h3 {
    font-weight: 800;
}

p{
    font-size: 1.2rem;
}

`;




