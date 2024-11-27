import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    textAlign?: 'left' | 'center' | 'right';
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    borderRadius?: string;
    border?: string;
    marginTop?: string;
    marginBottom?: string;
    textColor?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const defaultProps: Partial<ButtonProps> = {
    textColor: 'white',
    size: 'medium',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    position: 'static',
    marginTop: '0',
    marginBottom: '0',
    borderRadius: '0',
    border: '0',
    onClick: () => {console.log('Button clicked')}
}

const StyledButton = styled.button<ButtonProps>`
    color: ${props => props.textColor};
    background-color: ${props => props.color};
    align-self: ${props => props.alignSelf};
    text-align: ${props => props.textAlign};
    position: ${props => props.position};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
    user-select: none;
    cursor: pointer;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;

    ${props => props.size === 'small' && css`
        font-size: 2vw;
        padding: 0.5vw 1vw;
    `}

    ${props => props.size === 'medium' && css`
        font-size: 3vw;
        padding: 1vw 2vw;
    `}

    ${props => props.size === 'large' && css`
        font-size: 2vh;
        padding: 1vh 8vh;
    `}
`;

export const Button = ({children, ...props}: ButtonProps) => {
    return <StyledButton {...defaultProps} {...props}>
        {children}
    </StyledButton>
}