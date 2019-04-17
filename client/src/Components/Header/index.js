import React from 'react';
import styled from 'styled-components';
import Input from '../Input';

const Header = (props) => {

    const HeaderContainer = styled.div`
        display: flex;
        flex-direction: column;
        background: #254441;
        color: #FF6F59;
        padding: 10px;
    `;

    return (
        <HeaderContainer>
            <h1>{props.title}</h1>
            <Input 
                handleChange={props.handleChange}
                // onClick={props.onClick}
                value={props.value}
                // key={props.key}
                name={props.name}
            />
        </HeaderContainer>
    )
}

export default Header;