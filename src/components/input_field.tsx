import React from "react";
import Styled from "styled-components";

interface InputBoxProps {
    color?: string;
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    textAlign?: 'left' | 'center' | 'right';
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    borderRadius?: string;
    border?: string;
    marginTop?: string;
    marginBottom?: string;
    textColor?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const StyledInput = Styled.input<InputBoxProps>`\
    height: 2vh;
    color: ${props => props.textColor};
    background-color: ${props => props.color};
    align-self: ${props => props.alignSelf};
    text-align: ${props => props.textAlign};
    position: ${props => props.position};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
`;

export const InputBox = ({ ...props }: InputBoxProps) => {
    return (
        <StyledInput {...props} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
    );
};

export default InputBox;