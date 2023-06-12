import styled, { css } from 'styled-components';


export type TextVariant = 'toRight' | 'toLeft' | 'none';

interface TextVariantProps {
    variant?: TextVariant;
}

export const CardText = styled.div<TextVariantProps>`
    display: flex;
    justify-content: center;
    text-align: justify;
    margin: auto;
    margin-bottom: 0;
    margin-top: 0;
    align-items: center;
    margin-top: 5%;
    width:90vw;

    ${(props) => (
        (props.variant == 'toLeft') ? (
            css`
        border-radius: 0px 60px 0px 60px;
        background-color: white;
        background-position: center;
        box-shadow: 0 0 20px ${(props) => props.theme['--gray-800']};
        margin-bottom: 50px;`
        ) : (
            css`
        flex-direction: row-reverse;    
        border-radius: 60px 0px 60px 0px;
        background-color: white;
        background-position: center;
        box-shadow: 0 0 20px ${(props) => props.theme['--gray-800']};
        margin-bottom: 50px;`
        ))
    }
    @media(max-width:768px){
        justify-content: center;
        text-align: justify;
        margin: 5%;
        margin-bottom: 0;
        margin-top: 0;
        align-items: center;
        margin-top: 5%;
        display: block;
        box-sizing: border-box;
    }   
`;

export const Img = styled.img<TextVariantProps>`
    height: 50vh;
    border-radius: 0 60px 0 60px;
    margin: 2%;
    margin-right: 20px;
    margin-left: 20px;


    ${(props) => (
        (props.variant == 'toLeft') ? (
            css`
        border-radius: 0px 60px 0px 60px;
        background-color: white;
        background-position: center;
        margin-bottom: 50px;`
        ) : (
            css`
        flex-direction: row-reverse;    
        border-radius: 60px 0px 60px 0px;
        background-color: white;
        background-position: center;
        margin-bottom: 50px;`
        ))
    }   

    @media(max-width:768px){
        max-width:90vw;
        height:auto;
        margin: 0;
        border-radius: 0 60px 0 60px;
        padding: 5px;
    }
`;

