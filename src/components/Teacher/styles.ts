import styled, { css } from 'styled-components';

export const TeacherContainer = styled.div`
    display: inline-block;
    background-image: linear-gradient(-25deg, ${(props) => props.theme['--violet']}, ${(props) => props.theme['--blue-400']});
    height: auto;
    width: auto;
    margin: 5px;
    margin-bottom:20px;
    box-sizing: border-box;
    border-radius: 10px;
`;

export const ImgTeacher = styled.img`
    max-height: 80vh;
    max-width:70vw;
    border-radius: 10px;
    background-color: transparent;
    margin-top: 2px;
    margin-bottom: 2px;
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
    align-self:center;
    color: white;
    padding-bottom:5px;
`;