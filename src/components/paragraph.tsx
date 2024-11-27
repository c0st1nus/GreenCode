import Styled from "styled-components";
import React from "react";

interface ParagraphProps {
    color?: string;
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    textAlign?: 'left' | 'center' | 'right';
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    textSize?: string;
    borderRadius?: string;
    border?: string;
    marginTop?: string;
    marginBottom?: string;
    textColor?: string;
    fontWeight?: string;
    fontFamily?: string;
    padding?: string,
    children: React.ReactNode;
}

const defaultProps: Partial<ParagraphProps> = {
    textSize: "2vh",
    textColor: 'white',
    color: 'transparent',
    alignSelf: 'center',
    textAlign: 'center',
    position: 'static',
    marginTop: '0',
    marginBottom: '0',
    borderRadius: '0',
    border: '0',
    fontWeight: 'normal',
    fontFamily: 'Arial, sans-serif',
    padding: '1vh',
}

const StyledParagraph = Styled.p<ParagraphProps>`
    font-size: ${props => props.textSize};
    color: ${props => props.textColor};
    background-color: ${props => props.color};
    align-self: ${props => props.alignSelf};
    text-align: ${props => props.textAlign};
    position: ${props => props.position};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontWeight};
    padding: ${props => props.padding};
`;

export const Paragraph = ({ ...props}: ParagraphProps) => {
    return (
        <StyledParagraph {...defaultProps} {...props}>
            {props.children}
        </StyledParagraph>
    );
};

export default Paragraph;