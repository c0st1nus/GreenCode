import React from "react";
import styled from "styled-components";

interface ButtonProps {
    fontSize?: string;
    padding?: string;
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
    fontSize: '2vh',
    textColor: 'white',
    padding: '1vh',
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
    font-size: ${props => props.fontSize};
    padding: ${props => props.padding};
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
`;

export const Button = ({children, ...props}: ButtonProps) => {
    return <StyledButton {...defaultProps} {...props}>
        {children}
    </StyledButton>
}

export default Button;