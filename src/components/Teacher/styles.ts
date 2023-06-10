import styled, { css } from 'styled-components';

export const TeacherContainer = styled.div`
    display: inline-block;
    background-image: linear-gradient(-25deg, ${(props) => props.theme['--violet']}, ${(props) => props.theme['--blue-400']});
    border-radius: 10px;
    height: 70vh;
    width: auto;
    margin: 1vw;
    box-sizing: border-box;
    border-radius: 10px;

    @media(max-width:768px){
       max-width:75vw;
       height: auto;
    }
  
`;

export const ImgTeacher = styled.img`
    height: 80%;
    width:auto;
    border-radius: 10px;
    background-color: transparent;
    margin-top: 1%;
    margin-bottom: -10%;
    margin-right: 2px;
    margin-left: 2px;
    padding: 1px;
    border: 1px solid transparent;

    @media(max-width:768px){
       max-width:70vw;
       height: auto;
    }
`;

export const Label = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: italic;
    padding: 5px;
    margin-top: 60px;
    align-self:center;
    color: white;
`;