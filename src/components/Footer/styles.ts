import styled, { css } from 'styled-components';

import logoSurf from '../../assets/images/Logo.png';
import logoArena from '../../assets/images/arenaLogo01.png';

export type footerVariant = 'surf' | 'arena';

interface footerVariantProps {
    footerVariant: footerVariant;
}

const footerVariants = {
    surf: logoSurf,
    arena: logoArena,
}

export const FooterContainer = styled.div`
    display: flex;
    background-color: ${(props) => props.theme['--gray-800']};
    height: 20vh;
    width: auto;
`;

export const FooterLogo = styled.div`
    background-color: ${(props) => props.theme['--gray-800']};
    text-align: center;
    justify-content: center;
    position: relative;
    width: 20vw;
    height: 10vh;
   
`;

export const FooterTools = styled.div`
box-sizing:border-box;
   text-align: center;
    font-size: 1.0rem;
    justify-content: center;
    position: relative;
    width: 40vw;
    height: 10vh;
 
    transform: translateY(45%);
`;

export const FooterSocial = styled.div`
box-sizing:border-box;
    text-align: center;
    font-size: 1rem;
    position: relative;
    height: 10vh;

    width: 40vw;
    transform: translateY(50%);
    margin: 0;
`;

export const FooterList = styled.li`
    display: inline;
    padding:10px;
    text-decoration: none;
    list-style: none;
    color: ${(props) => props.theme['--gray-200']};
    margin: 0;
`
export const FooterImg = styled.div<footerVariantProps>`
     height: 70px;
    width: auto;
    margin-top:20px;
    background-image:url(${(props) => footerVariants[props.footerVariant]});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
`

export const Ul = styled.ul`
    margin:0;
`

