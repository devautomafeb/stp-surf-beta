import styled from 'styled-components';

export const MapContainer = styled.div`

    background: white 13%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    display: flex;
    border-radius: 10px;
    @media(max-width:768px){
        display: block;
        height: auto;
        box-sizing: border-box;
    }

    `

export const Informations = styled.div`
    height: 90vh;
    width: auto;
    box-sizing: border-box;
    background-size: cover;
    background-color: transparent;
    background-position: center;
    text-align: center;
    border-radius: 10px;
    margin:10px;
    padding:20px;

    @media(max-width:768px){
        display: block;
        height: auto;
        box-sizing: border-box;
    }

    `

export const Img = styled.img`
    box-sizing: border-box;
    border-radius: 10px;
    
    
    @media(max-width:768px){
        height: auto;
        border-radius: 10px;
        max-width:75vw;
    }`

export const FontAsH3 = styled.h3`
font-family: 'Roboto', sans-serif;
font-style: italic;
font-weight: 100;
padding: 5px;
color:${(props) => props.theme['--gray-200']};
`
export const FontAsLink = styled.a`
    color:${(props) => props.theme['--gray-800']};
    text-decoration: none;
    font-size: 1em;
    font-weight:300;
    margin-top: -20px;
`
