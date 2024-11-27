import { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { invoke } from '@tauri-apps/api/core';
import Paragraph from '../components/paragraph';
import InputBox from '../components/input_field';
import { useNavigate } from "react-router-dom";

const StyledLogin = Styled.div`
    display: flex;
    background-color: white;
    height: 100%;
    flex-direction: column;

`;

export const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    return (
        <StyledLogin>
            <Paragraph
                textColor='black'
                textSize='5vh'
                fontFamily='Dosis, sans-serif'
                fontWeight='800'
                alignSelf='flex-start'
                padding='1vh 2vh'
           >
                Log in
            </Paragraph>
            <Paragraph
                textColor='rgba(130, 130, 130, 1)'
                fontFamily='Arial, sans-serif'
                fontWeight='400'
                alignSelf='flex-start'
                padding='0 2vh'
            >
                Login with one of the following options
            </Paragraph>
        </StyledLogin>
    )
}

export default Login;