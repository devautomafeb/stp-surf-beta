import styled, { css } from 'styled-components';

export const PricesContainerSuper = styled.div`
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    direction:row;
    padding:40px;

    @media(max-width:768px){
        display: block;
        align-items: center;
     }
`;

export const PricesContainer = styled.div`
    display:inline-block;
    text-align:center;
    border-radius: 10px;
    height:auto;
    min-height: 60vh;
    width: 30vw;
    padding:50px;
    margin: auto;
    box-sizing: border-box;
    backdrop-filter: blur(10px);
    border: 1px solid  ${(props) => props.theme['--violet']};
    box-shadow: 0 0 40px  ${(props) => props.theme['--violet']};
    background:linear-gradient(191deg, white 13%,
     ${(props) => props.theme['--blue-400']} 72%,
      ${(props) => props.theme['--blue-200']} 87%);
     
     @media(max-width:768px){
        background:linear-gradient(191deg,
         ${(props) => props.theme['--blue-200']} 13%,
         ${(props) => props.theme['--blue-400']} 62%,
         ${(props) => props.theme['--violet']} 87%);
        align-items: center;
        display: block;
        width: auto;
        margin-bottom: 30px;
     }
    `;

export const Img = styled.img`
    height: 20vh;
    margin: 5px;

    @media(max-width:768px){
        display: none;
     }
`;

export const FontAsH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 300;
    padding: 5px;
    color: ${(props) => props.theme['--gray-800']};
`

export const FontAsH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 200;
    padding: 5px;
`

export const FontAsH3 = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 100;
    padding: 5px;
`
