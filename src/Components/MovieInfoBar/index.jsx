import React from "react";
import {Wrapper,Content,Column} from './MovieInfoBar.styles';
import { calcTime } from "../../helpers";
import { convertMoney } from "../../helpers";

const MovieInfoBar = ({movie})=>{
    /*
    Budget = movie.budget
    running time = movie.runtime (in minutes)
    Revenue = movie.revenue
    */
    const runTime=calcTime(movie.runtime);
    const budget = convertMoney(movie.budget);
    const revenue = convertMoney(movie.revenue);
    const runTimeString = `Running Time: ${runTime}`;
    const budgetString = `Budget: ${budget}`;
    const revenueString = `Revemue: ${revenue}`;
    return (
        <>
        <Wrapper>
            <Content>
                <Column ><p>{runTimeString}</p></Column>
                <Column ><p>{budgetString}</p></Column>
                <Column ><p>{revenueString}</p></Column>
            </Content>
        </Wrapper>
        </>
    )
}

export default MovieInfoBar;