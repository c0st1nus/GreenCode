import Styled from "styled-components";

interface ImageProps {
    color?: string;
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    borderRadius?: string;
    border?: string;
    marginTop?: string;
    marginBottom?: string;
    padding?: string,
    src: string;
    alt: string;
}

const defaultProps: Partial<ImageProps> = {
    color: 'transparent',
    alignSelf: 'center',
    position: 'static',
    marginTop: '0',
    marginBottom: '0',
    borderRadius: '0',
    border: '0',
    padding: '1vh',
}

const StyledImage = Styled.img<ImageProps>`
    height: 4vh;
    width: 4vh;
    background-color: ${props => props.color};
    align-self: ${props => props.alignSelf};
    position: ${props => props.position};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
    padding: ${props => props.padding};
`;

export const Image = ({ ...props}: ImageProps) => {
    return (
        <StyledImage {...defaultProps} {...props}/>
    );
};

export default Image;