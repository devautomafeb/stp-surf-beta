import styled, { css } from 'styled-components';

import logoSurf from '../../assets/images/Logo.png';
import logoArena from '../../assets/images/arenaLogo01.png';

export type headerVariant = 'surf' | 'arena';

interface HeaderVariantProps {
    headerVariant: headerVariant;
}

const headerVariants = {
    surf: logoSurf,
    arena: logoArena,
}

export const HeaderContainer = styled.div`
    display: flex;
    background-color: white;
    height: 18vh;
    min-height: 90px;
    width: auto;
    border-bottom: 2px solid ${(props) => props.theme['--blue-600']};
    border-top: 2px solid ${(props) => props.theme['--blue-600']};

    @media(max-width:768px){
         height: 20vh;
    }

`;

export const HeaderLogo = styled.div`
    text-align: center;
    justify-content: center;
    position: relative;
    width: 20vw;
    height: 20vh;
    min-height: 90px;
`;

export const HeaderTools = styled.div`
   text-align: center;
    font-size: 1.0rem;
    justify-content: center;
    position: relative;
    height: 14vh;
    width: 40vw;
    transform: translateY(45%);
`;

export const HeaderSocial = styled.div`
    text-align: center;
    font-size: 1.2rem;
    position: relative;
    height: 14vh;
    width: 40vw;
    transform: translateY(50%);
`;

export const HeaderList = styled.li`
    display: inline;
    margin: 5px;
    text-decoration: none;
    list-style: none;
    color: ${(props) => props.theme['--blue-600']};
    font-size: 1.5rem;
`
export const HeaderImg = styled.div<HeaderVariantProps>`
    height: 90px;
    width: 20vw;
    margin-top: 10px;
    background-image:url(${(props) => headerVariants[props.headerVariant]});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;

  
`

