import React from "react";
import {Link} from 'react-router-dom';
import {Wrapper,Content} from './Breadcrumb.styles';
const BreadCrumb = ({movieTitle})=>{
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <span>Home</span>
                </Link>
                <span> &nbsp;|&nbsp;</span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    );
}

export default BreadCrumb;