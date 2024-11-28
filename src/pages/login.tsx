import { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { invoke } from '@tauri-apps/api/core';
import Paragraph from '../components/paragraph';
import Button from '../components/button';
import InputBox from '../components/input_field';
import Image from '../components/image';
import { useNavigate } from "react-router-dom";

const StyledLogin = Styled.div`
    display: flex;
    background-color: white;
    height: 100%;
    flex-direction: column;
`;

const ButtonSet = Styled.div`
    display: flex;
    flex-direction: row;
    gap: 2vh;
    margin-top: 2.5vh;
    margin-left: 2vh;
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
            <ButtonSet>
                <Button padding='1.5vh 5vh' color='rgba(222, 222, 222, 1)' borderRadius='3vh' alignSelf='flex-start'>
                    <Image src="/Apple_Icon.svg" alt="AppleID" />
                </Button>
                <Button padding='1.5vh 5vh' color='rgba(222, 222, 222, 1)' borderRadius='3vh' alignSelf='flex-start'>
                    <Image src="/Google_Icon.svg" alt="Google" />
                </Button>
                <Button padding='1.5vh 5vh' color='rgba(222, 222, 222, 1)' borderRadius='3vh' alignSelf='flex-start'>
                    <Image src="/Twitter_Icon.svg" alt="Twitter" />
                </Button>
            </ButtonSet>
        </StyledLogin>
    )
}

export default Login;