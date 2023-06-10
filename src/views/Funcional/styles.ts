
import styled, { css } from 'styled-components';

export const Title = styled.h1`
 font-size: 2rem;
    padding: 50px;
    color: ${(props) => props.theme['--gray-800']};
    font-weight: 500;
    line-height:40px;
    `

export const FontAsH3 = styled.h3`
   font-size: 1.3rem;
    font-weight: 400;
    padding: 50px;
    text-indent: 100px;
    color: ${(props) => props.theme['--gray-800']};
    line-height:40px;
    `
export const FontBold = styled.b`
    font-weight: 900;
    color: ${(props) => props.theme['--violet']};
    `

export const Container = styled.div`
display: block;
background:white;
justify-content: center;
text-align: center;
margin: auto;

align-items: center;
margin-top: 5%;
width:90vw;
border-radius: 10px 10px 10px 10px;

background-position: center;
box-shadow: 0 0 20px ${(props) => props.theme['--gray-800']};
margin-bottom: 20px;`

export const Container2 = styled.div`
display: block;
background-color: ${(props) => props.theme['white']};
justify-content: center;
text-align: center;
margin: auto;

align-items: center;
margin-top: 5%;
width:90vw;
border-radius: 10px 10px 10px 10px;

background-position: center;
box-shadow: 0 0 20px ${(props) => props.theme['--gray-800']};
margin-bottom: 20px;`