import styled, { css } from 'styled-components';


export const CardVideo = styled.div`
    display: block;
    text-align: justify;
    margin: auto;
    margin-bottom: 0;
    margin-top: 0;
    margin-top: 5%;
    width:90vw;

    align-items: center;
    justify-content: center;
    text-align: center;
    background:white;
    border-radius: 0px 60px 0px 60px;
    /*background-image: linear-gradient(-25deg, ${(props) => props.theme['--violet']},
    ${(props) => props.theme['--blue-400']}, white);*/
    background-position: center;
    box-shadow: 0 0 20px ${(props) => props.theme['--gray-800']};
    margin-bottom: 50px;
`;

export const Logo = styled.h1`
    font-size: 1rem;
    padding: auto;
    padding-top: 10px;
    margin: 20px;
    margin-bottom: 2px;
`

export const Video = styled.video`
    max-height:75vh;
    margin: 10px;
    font-size: 2.5rem;
    padding: auto;
    padding-top: 10px;
    border-radius: 0px 30px 0px 30px;
    margin-bottom:50px;
`

export const Img = styled.img`
    height:100px;
    width:auto;
   
`

