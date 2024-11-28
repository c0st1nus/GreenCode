import { useEffect } from 'react';
import Styled from 'styled-components';
import { invoke } from '@tauri-apps/api/core';
import { useNavigate } from "react-router-dom";
import { Button } from '../components/button';

const StyledWelcome = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(26, 139, 39, 0.75) 0%, rgba(41, 112, 49, 0.884106) 48.1%);
`;

const StyledIcon = Styled.img`
    display: flex;
    width: 30vh;
    height: auto;
    user-select: none;
    pointer-events: none;
    cursor: pointer;
`;

export const WelcomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("AuthToken");
        if (token?? false) {
            invoke("check_token", { token: token }).then((response) => {
                if (response) {
                    navigate("/mainPage");
                }
            });
        }
    });

    return (
        <StyledWelcome>
            <StyledIcon src='/circle.svg' alt='Logo' style={{marginTop: 'auto'}}/>
            <Button 
                borderRadius='1.8vh' 
                color='transparent' 
                border='0.5vh solid white' 
                padding='1vh 8vh'
                marginTop='auto' 
                marginBottom='3vh'
                onClick={() => navigate("/login")}
            >
                Log in
            </Button>
        </StyledWelcome>
    )
}

export default WelcomePage;