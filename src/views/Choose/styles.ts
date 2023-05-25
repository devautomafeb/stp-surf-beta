import styled from 'styled-components';

export const ChooseContainer = styled.div`
    display: block;
    justify-content: center;
    text-align:center;
    text-align: center;
    margin: auto;
    padding-bottom:100px;
    margin-top: 0;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30vh;
    width:60vw;
    height:auto;
    border: 1px solid ${(props) => props.theme['--gray-800']};
    border-radius: 10px 10px 10px 10px;
    background-position: center;
    background-color:${(props) => props.theme['white']};

    @media(max-width:768px){
        height:100vh;
        width:95%;

    }
`;

export const ChooseButton = styled.button`
    display: block;
    padding-top:10px;
    height:90px;
    width: 35vw;
    margin:5px;
    background-color: ${(props) => props.theme['--blue-600']};
    box-sizing: border-box;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 1px solid ${(props) => props.theme['--gray-800']};
    box-shadow: 0 0 4px ${(props) => props.theme['--gray-800']};
    align-items: center;
    justify-content: center;
    text-align: center;

    :hover{
        transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        background-color: ${(props) => props.theme['--blue-400']};
        cursor: pointer;
    }

    @media(max-width:768px){
        height:100px;
        min-height: 50px;
        width:90%;
        margin:10px;
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
    text-align:center;
 
 
 
 

    :hover{
        transition:100ms;
        color:${(props) => props.theme['--blue-600']};
    }

    @media(max-width:768px){
        font-size: 1.3rem;
        font-weight: 700;
    }
    `
