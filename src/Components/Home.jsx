import React from 'react';
//Components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner1 from './Spinner';
import Spinner from './Spinner';

import SearchBar from './SearchBar';
import Button from './Button';
//Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

//Image
import NoImage from '../images/no_image.jpg';

//Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

function Home() {
    const { state, loading, error, searchTerm, setSearchTerm,setIsLoadingMore} = useHomeFetch();
    // console.log(state);

    if(error){
        return <div>Something went wrong</div>;
    }
    return (
        <>
            {loading && <Spinner1/>}
            {!searchTerm && state.result[0] ?
                <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.result[0].backdrop_path}`}
                    text={state.result[0].overview}
                    title={state.result[0].original_title}
                /> :
                ""}
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm?'Search Results':'Popular Movies'}>
                {state.result.map(movie=>{
                    return <Thumb key={movie.id} clickable={true} image={movie.poster_path?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`:NoImage}
                    
                    movieId={movie.id}/>
                })};
            </Grid>
            {loading && <Spinner />}
            {state.page<state.total_pages && !loading && 
                <Button text='Load More' callback={()=>setIsLoadingMore(true)}/>}

        </>
    )
    // return <div>Home</div>;

};

export default Home;