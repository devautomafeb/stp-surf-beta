import styled from 'styled-components';

import imageIni from '../../assets/images/FOTOini.jpg';

export type FotoIniVariant = 'sea'

interface FotoIniVariantProps {
    variant: FotoIniVariant;
}

const fotoIniVariants = {
    sea: imageIni
}

export const ChooseContainer = styled.div<FotoIniVariantProps>`
    background-image:url(${(props) => fotoIniVariants[props.variant]});
    background-size: cover;
    background-position: left center;
    display: block;
    justify-content: center;
    text-align:center;
    align-items: center;
    padding-bottom:20px;
    align-items: center;
    margin:auto;
    box-sizing: border-box;
    
    
    @media(max-width:768px){
        min-width:95vw;
    }
`;

export const ChooseContainer2 = styled.div`
    display: block;
    justify-content: center;
    text-align:center;
    text-align: center;
    margin: auto;
    margin-top: 0;
    align-items: center;
    width:60vw;
    height:auto;
    border-radius: 10px 10px 10px 10px;
    background-position: center;
    background-color:transparent;

    @media(max-width:768px){
        height:auto;
        width:95%;
    }`

export const ChooseButton = styled.button`
    display: -webkit-inline-flex;
    height:90px;
    width: 35vw;
    margin-bottom:15px;
    margin-left:auto;
    margin-right:auto;
    background-color: ${(props) => props.theme['--blue-600']};
    box-sizing: border-box;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid ${(props) => props.theme['--gray-800']};
    box-shadow: 0 0 4px ${(props) => props.theme['--gray-800']};
    align-items: center;
    text-align: center;
    

    :hover{
        transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: ${(props) => props.theme['--violet']};
        cursor: pointer;
    }

    @media(max-width:768px){
        height:90px;
        min-height: 50px;
        margin:auto;
        min-width: 90vw;
        margin-top:10px;
        display:flex;
        align-items: center;
        padding-bottom:10px;
        justify-content: center;
    }
`;

export const FontAsH1 = styled.h1`
    display:inline;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 10px;
    color: ${(props) => props.theme['--gray-200']};
    margin: auto;
    padding-left:20%;
    padding-right:20%;

    :hover{
        transition:100ms;
        color:${(props) => props.theme['--blue-200']};
    }

    @media(max-width:768px){
        font-size: 1.3rem;
        font-weight: 700;
    }
    `
